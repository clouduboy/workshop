/// 01: Intro (simple graphics in MicroCanvas)
///
/// This tutorial introduces the structure of a MicroCanvas game and loads

/*global MicroCanvas */
'use strict';

// We are using the MicroCanvas library
const game = new MicroCanvas();


// We will be using this name to refer to a sprite (game graphics),
// we just declare this variable (placeholder) here, and we will give
// it a value later on when we actually assign the graphics to it
let gfxInvader;


// MicroCanvas games consist of two main phases: `setup` and `loop`

// The setup phase runs first (always), when the game is loaded, but
// generally it never runs again (there are exceptions, but more on this
// later).

// The loop phase on the other hand runs multiple times a second (usually,
// 60 times per second, but again, there can be exceptions to this rule)
// for the entire time the game is running.


// Initialize game
game.setup(() => {

  // Create a sprite for our space alien!
  // Sprites are pixelart images used to draw graphics on the screen.
  // Sprites could be created in many ways, the below format (called PIF)
  // is a straightforward format where dots (.) represent transparent
  // pixels and pound signs (#) represent filled (opaque) pixels.
  //
  // The name of the sprite and the sizes are specified on the top line
  // following a bang (!), but can also be inferred in many cases. This
  // sprite is 9 pixels wide and 8 pixels tall.
  gfxInvader = game.loadSprite(`
    ! invader 9x8
    .........
    ..#...#..
    ...#.#...
    .#######.
    ##.###.##
    #########
    #.#.#.#.#
    .........
  `);

});



// Main game loop
game.loop(() => {

  // Our screen is 128 pixels (drawing points) wide and 64 pixels high
  // on the Arduboy device (every target device has their specifics regarding
  // screen size and color depth)

  // Coordinates start from the top left, from (0,0) to (127,63)

  // Clear the screen (our drawing canvas)
  game.clear();
  
  // Draw our space alien on the drawing canvas on the coordinates (10,10)
  game.drawImage( gfxInvader, 10, 10 );

});
