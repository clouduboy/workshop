'use strict';

/*global MicroCanvas */
const game = new MicroCanvas();


let gfxGotchi, gfxGotchiFlip, gfxBone;
  

let x = 0, y = 0;
let sx = 1, sy = 1;


let boney = 0;
let bonefallspeed = 0;

let hungry = 0;

let animationSpeed = 8;



game.setup(() => {
  gfxGotchi = game.loadSprite(`! gotchi 16x16
##............##
.#.....###.#####
.##......###.#.#
.##.......#####.
..#......#####.#
..#.......##..#.
..##.....#####..
..##########....
.##..###.####...
##..#########...
.#####...###....
.####....###....
##.##...##.##...
##..##..##.###..
.##.............
................`);
  gfxGotchiFlip = game.loadSprite(`! gotchiflip 16x16
..#...........##
.##.###.....####
.####........###
#.####.......##.
.##.##........##
#####.........#.
#####....#.###..
..##########....
.###.###...##...
.########.###...
.#####..#####...
.####...#####...
..###...##.##...
.##.##..##.##...
###.............
................`);
  gfxBone = game.loadSprite(`! bone 10x10
..........
..###.....
##..#.....
#...#.....
.###.####.
...###..#.
....#.##..
..###.##..
...###....
..........`);

  y = game.height - gfxGotchi.height;
});



game.loop(() => {
  if (game.everyXFrames(10)) {
	 hungry = hungry + 1;
  }

  if (hungry < 100) {
	  x = x + sx;
  }

  if (bonefallspeed > 0) {
    boney = boney + bonefallspeed;
  }
  
  if (x > game.width - gfxGotchi.width) {
    x = game.width -gfxGotchi.width;
    sx = -1;
  }
 
  if (x < 0) {
    x = 0;
    sx = 1;
  }

  if (game.detectCollision(gfxGotchi,x,y, gfxBone, 50, boney)) {
    hungry = hungry - 20;

    boney = 0;
    bonefallspeed = 0;
  }
  
  // Clear display, redraw background text
  game.clear();

  game.centerText(`${hungry}`, 20,10);

  // Draw gotchi
  if (sx === 1) {
    game.drawImage(gfxGotchi, x,y);
  } else {
    game.drawImage(gfxGotchiFlip, x,y);
  }

  game.drawImage(gfxBone, 50, boney);
  
  if (game.buttonPressed('enter')) {
    bonefallspeed = 2;
  }
  if (game.everyXFrames(120)) {
    if (boney > game.height) {
      boney = 0;
      bonefallspeed = 0;
    }
  }
  // Screen updates automatically at the end of loop()
});


console.log("MicroCanvas initialized");
