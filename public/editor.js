/*global MicroCanvas, PixelData */

/*
https://cdn.glitch.com/12d2134a-eeea-40b9-b810-182d8ae246ab%2Fcompile-button.png?1529679484659

! compile-button 10x10
.########.
.#......#.
.#......#.
.#......#.
.########.
.########.
.##.###.#.
.#...#.##.
.##.#####.
.########.

https://cdn.glitch.com/12d2134a-eeea-40b9-b810-182d8ae246ab%2Fpaint-button.png?1529679484365

! paint-button 10x10
.####.....
.#..#..#..
.#..#.###.
.#.....#..
.#.###....
.#.#.##...
...#####..
....#####.
.....####.
......##..
*/

let gameSrc,
    gameGfx

function init() {
  const cb = document.createElement('button')
  cb.addEventListener('click', btnCompile)
  cb.className = 'compile'
  cb.textContent = cb. title = 'Generate Tiny Arcade binary'
  cb.disabled = true
  document.body.appendChild(cb)

  const pb = document.createElement('button')
  // TODO: microcanvas gamepad emulation interferes with this
  pb.addEventListener('click', btnPaint)
  pb.className = 'paint'
  pb.textContent = pb. title = 'Edit sprites...'
  pb.disabled = true
  document.body.appendChild(pb)

  const jsfile = document.querySelector('script#game').src || '/game.js'
  fetch(jsfile).then(r => r.text()).then(r => processSrc(r)).catch(e => console.log('Failed request:', e))
}

function btnCompile(e) {
  compile(gameSrc, 'tiny_arcade').then(
    r => console.log(r)
  )
}
function btnPaint(e) {
  let gfxlist = '<ul class="pixeledit">'+
    gameGfx.map( (g,i) => {
      return `<li><button data-id=${i}>${gameGfx[i].svg()}<span>${g.id} (${g.w}x${g.h})</span></button>`
    }).join('\n')+
    '<li><button class="close">close</button></li>'+
    '</ul>'
   
  document.body.insertAdjacentHTML('beforeend', gfxlist)
  document.body.lastElementChild.addEventListener('click', btnPaintSelect)
}

function btnPaintSelect(e) {
  if ('id' in e.target.dataset === false) return document.querySelector('.pixeledit').remove()

  let i = parseInt(e.target.dataset.id, 10)
  let pif = gameGfx[i].pif.replace(/\n+/g, '|')
  let url = `https://create.clouduboy.org/painter/?pif=`+pifInUrl(pif)
  
  console.log(url)
  window.open(url)
}

function pifInUrl(pif) {
  return encodeURIComponent(pif).replace(/[!'()*]/g, c => '%' + c.charCodeAt(0).toString(16) )
}

function processSrc(src) {
  gameSrc = src

  // detect images
  let gfx = src.match(/`[^`]+?`/g)
  gameGfx = []

  gfx.forEach(g => {
    let px = new PixelData(g.replace(/`/g,''))
    if (px && px.id && px.w > 0 && px.h > 0) {
      gameGfx.push(px)
    }
  })

  // re-enable buttons
  document.querySelector('button.compile').disabled = false
  document.querySelector('button.paint').disabled = false
}


const BUILDSERVER_API_URL = 'https://builder.clouduboy.community/api/v1'
const QUEUE_LENGTH_HEADER = 'x-queue-length'
function compile(source, target = 'tiny_arcade') {
  return fetch(
    BUILDSERVER_API_URL+'/compile?target='+target,
    {
      method: 'POST',
      body: JSON.stringify({ file: source }),
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }
  )
  .then(r => Promise.all([ Promise.resolve(r), r.json() ]) )
  .then(([r, result]) => {
    const q = r.headers.get(QUEUE_LENGTH_HEADER) || result.queue
    const jobid = result.job

    console.log('Queue: ', q +' jobs queued before ' + jobid)
    // Leave some time for the server to process the job,
    // if there isn't too much of a contention, this might
    // return with the result right away
    return after(300).then(_ => pollForResult(jobid))
  })
  .then(jobResult => {
    console.log('Job result: ', jobResult)

    // If there is a compiled binary, download it
    if (jobResult.binary) {
      window.open(jobResult.binary)
    }

    return fetch(jobResult['device_code']).then(r => r.text())
  })
  .then(deviceCode => {
    console.log(deviceCode)
  })
  .catch(e => {
    console.log(e)
  })
}

function pollForResult(jobid) {
  return fetch(BUILDSERVER_API_URL+'/job/'+jobid)
  .then(r => {
    if (r.status === 404) throw 'Job does not exist: '+jobid

    const q = r.headers.get(QUEUE_LENGTH_HEADER)
    if (q === null) {
      return r.json().then(poll => {
        if (poll.queue) {
          return after(700+1000*Math.random()|0).then(pollForResult.bind(null, jobid))
        } else {
          return poll
        }
      })
    }

    if (q > 0) {
      // TODO: align poll interval based on queue length
      return after(700+1000*Math.random()|0).then(pollForResult.bind(null, jobid))
    }

    return r.json()
  })
}

function after(millisecs) {
  return new Promise(resolve => setTimeout(resolve, millisecs))
}


setTimeout(init, 1)
