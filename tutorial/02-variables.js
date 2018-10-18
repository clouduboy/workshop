/// 02: Variables
///
/// Now we have a boring alien stuck to the screen - not very
/// exciting to hunt down... This tutorial teaches the basics
/// to moving and changing your games around.

/*global MicroCanvas */
'use strict';

// We are using the MicroCanvas library
const game = new MicroCanvas();


// The graphics for our alien invader
let gfxInvader;


// The '//' characters signify a "comment" - anything that comes
// after the '//', up until the end of line is ignored and not
// recognized as commands - even if they look like one. This
// allows the programmer to leave notes for other people (or
// themselves) reading the code later, as well as makes it possible
// to temporarily "disable" some commands, to see how that
// effects the outcome of the program.



// Initialize game
game.setup(() => {

  // Create a sprite for our space alien!
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

  // Clear the screen (our drawing canvas)
  game.clear();

  // We can draw more than one space invader, too
  game.drawImage(gfxInvader, 10, 10);
  game.drawImage(gfxInvader, 20, 10);
  //...and so on and so forth...


  // We don't want to give the computer all those coordinates all the time
  // (in programming they say we don't want to "hard-code" these numbers)
  // We want to be able to change those numbers.
  // The thing that lets us do that is called a "variable"

  // We create a variable like this
  let changingNumber = 30;
  // The text "changingNumber" from now represents a "variable".
  // Variables are like boxes: you can put any value into them and that value
  // can be used later, or even modified by replacing it with a different value.

  // Now we can use our variable everywhere we otherwise would have used its value
  //game.drawImage(gfxInvader, changingNumber, 10); // <- uncomment me!

  // As we said, we can even change its value
  changingNumber = 40;
  //now "changingNumber" represents the value "40"

  //game.drawImage(gfxInvader, changingNumber, 10); // <- uncomment me!
  // See? we used the exact same command to tell the computer we want to draw a
  // new alien, and yet the computer knew that "changingNumber" now is a
  // *different* number so it made sure it used the new value to place our alien.

});
