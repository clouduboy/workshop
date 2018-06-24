// Server
const express = require('express')
const app = express()


// Simple, string-replacement-based templating
var fs = require('fs') // this engine requires the fs module
app.engine('html',(filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)

    let ret = content.toString()

    for (let k of Object.keys(options)) {
      if (typeof options[k] == 'string') {
        ret = ret.replace(new RegExp(`<!--${k}-->`,'gi'), options[k])
      }
    }

    return callback(null, ret)
  })
})

app.set('views', './views')
app.set('view engine', 'html')


// Static files
app.use(express.static('public'))
app.use('/games', express.static('games'))


// Select game to play
app.get('/', (request, response) => {
  response.render('index', { game: 'space-invaders.js' })
})

// Simple in-memory store
app.get('/play/:game', (request, response) => {
  const game = request.params.game || 'space-invaders'
  response.render('play', { game: `/games/${game}.js` })
})




// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
