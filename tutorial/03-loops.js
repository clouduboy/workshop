/// 03: Loops
///
/// We now have multiple aliens but tediously laying them out
/// one by one would get boring fast - so here we learn how to
/// teach the computer to do that for us.

/*global MicroCanvas */
'use strict';

// We are using the MicroCanvas library
const game = new MicroCanvas();


// The graphics for our alien invader
let gfxInvader;



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

  // Now we can draw any number of space invaders...
  game.drawImage(gfxInvader, 10, 10);
  game.drawImage(gfxInvader, 20, 10);
  // ...but it's still takes a lot of typing!

  let changingNumber = 30;
  game.drawImage(gfxInvader, changingNumber, 10);

  changingNumber = 40;
  game.drawImage(gfxInvader, changingNumber, 10);
  // although, do you notice something?

  // Every alien is 9 pixels wide.

  // We add an extra pixel and draw the aliens at every 10 pixels.
  
  // This makes the aliens neatly line up in a row, without overlapping
  // (that is, sitting on each others' heads!)
  // So there is a rule! Every alien is placed 10 pixels to the right of
  // the previous one. There has got to be a way to tell this rule
  // to the computer, rright? Well, of course!

  // First, we create a variable for the "x" coordinate (the first coordinate)
  // (remember, x coordinate of 0 is the leftmost pixel, while 127 is the rightmost)
  let x = 0;

  // Then we tell the computer:

  // If the value in variable "x", that is, our current x-coordinate
  // is _smaller_ than "100", do the following...
  while (x < 100) {
    // ...first, draw a new alien (we will start a second row of aliens for this,
    // notice that the second coordinate is now 20!)
    game.drawImage(gfxInvader, x, 20);

    // ...and then also, increase the value of the "x" coordinate by 10!
    x = x + 10;
    // You should imagine this as follows:
    // - the computer will have a look into the box named "x"
    // - it will check the value stored in the box, let's say it's "20"
    // - the computer will add 10 to whatever the value was (20+10, 30!)
    // - then place this new value (30!) back into the box!
    // - the box now contains a new, updated value of 30
  }
  // the computer will repeat the commands between the "{" and "}" as long as
  // the condition stated in while(...) is TRUE. So for the first time x
  // will be zero, and we run the commands. The second command increases
  // x to 10, but that's still smaller than 100 so we draw again, increase again...
  // ...exactly 10 times! When x grows from 90 to 100, x will no longer
  // be smaller than 100 so we don't run these commands any more, and
  // continue our program. Ta-da!

  // PS: try commenting out the commands in the top - you will still
  //     see all aliens show up neatly lined up because our loop takes
  //     care of all of that!

});
