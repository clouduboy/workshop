// This is a boilerplate (template) for creating your own
// Clouduboy games from scratch! Make a copy of this file
// in the `games` folder (choose any name you like), and
// start creating! You can preview and play the game as you
// go, for example a game "my-game.js" can be played at:
// https://<your-glitch-fork>.glitch.com/play/<my-game>

// To learn more about how to develop your own Clouduboy
// games head to
// https://docs.clouduboy.org/
// or refer to the links to specific sections mentioned
// in the comments further below!



/*global MicroCanvas */
'use strict';

// Initialize MicroCanvas
// What's Microcanvas? https://docs.clouduboy.org/microcanvas
const game = new MicroCanvas();



// Define your globals
// Why globals? https://docs.clouduboy.org/globals

// Graphics assets
// https://docs.clouduboy.org/gfx
// let gfxFoo;

// Sound effects
// https://docs.clouduboy.org/sfx
// let sfxBar;



// Global constants
// const MY_CONSTANT = 42;

// Global variables (game state)
// Why globals? https://docs.clouduboy.org/globals
// let myVar = 1;


// Load graphics, sounds assets and initialize variables here
//
// The body of the `setup` function initially runs only once,
// in the very beginning right after your game is loaded.
// It is ideal for setting up game assets (like graphics and music),
// and initializing your game's beginning state.
// When later in the game you call the `reset()` method the setup
// body is re-run so your game is re-initialized to the original
// state (e.g. all aliens are resurrected, score is reset to zero etc)
// More on `setup`: https://docs.clouduboy.org/setup
// Learn more about `reset()`: https://docs.clouduboy.org/reset
game.setup(() => {
  // "Load" (more like create) a sprite (pixelgraphic image)
  // Read more: https://docs.clouduboy.org/sprites
  // gfxFoo = game.loadGraphics(`
  //   ! foo 3x3
  //   .#.
  //   #.#
  //   .#.
  // `).
});



// Main game loop code goes here
//
// The body of the `loop` function is called continuously,
// several times a second. In the browser this is usually
// 60 times a second (we call this 60 "fps", frames per
// second), and this code lets you update the game state
// and the contents of the display. Please note, that not
// all devices run the `loop` function 60 times a second!
// use `game.framerate` to figure out how many times your
// loop function will be called on the executing device.
// More on `loop`: https://docs.clouduboy.org/loop
// More info on the framerate: https://docs.clouduboy.org/framerate 
game.loop(() => {
  // Define and manipulate local variables
  // https://docs.clouduboy.org/variables
  // let x,y;
  // x = 0;
  // y = x + 5;

  // Clear the screen
  // https://docs.clouduboy.org/clear
  // game.clear();

  // Set drawing color
  // Please note, drawing colors are only displayed on devices
  // that support them. They can also be enabled/disabled in the
  // browser.
  // More about colors in Clouduboy: https://docs.clouduboy.org/colors
  // game.fillStyle = "#ff0000"
  
  // Draw some shapes to specific coordinates
  // What are the drawing commands? https://docs.clouduboy.org/drawing
  // How do the coordinates work? https://docs.clouduboy.org/coordinates
  // More about game.width/height: https://docs.clouduboy.org/screen
  // game.fillRect(0, 0, game.width, game.height / 2);
  
  // Display some text starting at the (x,y) position on the screen
  // Strings in Clouduboy: https://docs.clouduboy.org/strings
  // More about drawing text: https://docs.clouduboy.org/drawing-text
  // game.drawText(`Hello World!`, x, y);

  // Draw the "foo" graphics sprites at the coordinates (0,0)
  // On drawing sprite graphics: https://docs.clouduboy.org/drawing-sprites
  // game.drawImage(gfxFoo, 0, 0);
});
