'use strict';

/*global MicroCanvas */
const game = new MicroCanvas();


// Graphics
const gfxDino = game.loadSprite(`
! sprite 16x16@#083
................
...........###..
..........##.###
..........######
.........####...
.........######.
........####....
........####....
.......#######..
.......#####.#..
......######....
.....#######....
.....#######....
....#####..#....
...###..#..#....
.####...##.##...
`);


// Initialize game
game.setup(function() {
});



// Main game loop
game.loop(function() {

  // Clear display, redraw background text
  game.clear();

  // Draw Ground

  // drawing color only applies on some devices with color screens
  game.fillStyle = "#a53"

  // the 1-pixel-high rectangle is a same as drawing
  // a horizontal line!
  game.fillRect(0, game.height - 4, game.width, 1);
  
  // Draw Dino in the bottom of the screen
  game.drawImage(gfxDino, 0, game.height - 4 - gfxDino.height);

});
