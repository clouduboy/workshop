/// 04: Working with properties
///
/// Now that the invading alien situation is getting quite
/// out of hand, it's about time Earth has lined up some
/// defenses. 

/*global MicroCanvas */
'use strict';

// We are using the MicroCanvas library
const game = new MicroCanvas();


// The graphics we will be using
let gfxInvader;
let gfxDefender;



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

  // Our hero! Our savior!
  gfxDefender = game.loadSprite(`
    ! defender 9x6
    ....#....
    ...###...
    ..#####..
    #.##.##.#
    ###...###
    #########
  `);

});



// Main game loop
game.loop(() => {

  // Clear the screen (our drawing canvas)
  game.clear();

  // Now that we have a *proper* alien invasion on our hands...
  let x = 0;

  while (x < 100) {
    game.drawImage(gfxInvader, x, 10);
    x = x + 10;
  }
  // ...it is about time for a hero to appear to save us from this grim fate!

  // Savior of earth, the Defender!
  game.drawImage(gfxDefender, 0, 20);


  // Well we don't really want to put our Defender into the sky, but down to Earth
  // We mentioned that the height of the screen is 64 pixels, so let's use that

  //game.drawImage(gfxDefender, 0, 64); // <- uncomment me!


  // Oh no, where did our Defender go? Where is our hero?
  // Well, we just buried it! :D
  // Try slightly smaller numbers (63,62,61...) instead and you'll realize
  // that our defender is drawn from the *starting point* we define, so it was
  // simply drawn outside of the screen!
  // To make the defender sit on the bottom of the screen, we can
  // tell the computer to draw it at the bottom of the screen *minus* 6 pixels!
  // (6 pixels is the height of our Defender's very mighty graphics.)

  //game.drawImage(gfxDefender, 0, 64 - 6); // <- uncomment me!


  // It would also be great if we could position our defender in the center
  // of the screen - that's also just a bit of math (and most of it you
  // don't even need to do - the computer will do it for you)

  //game.drawImage(gfxDefender, 128/2 - 9/2, 64 - 6); // <- uncomment me!

  // We want to put the Defender centered, so that means at the half of the
  // width of the screen (128 divided by 2).
  // Since the Defender is drawn left-to-right from this coordinate we will
  // actually need to put it a bit more to the left to make sure it's centered
  // correctly - so we push it to the left by exactly half of the width of our
  // mighty defender graphics (9 divided by 2)


  // It wasn't that hard, was it?

  // Fortunately, you don't even need to remember all those numbers, the computer
  // knows them well, and lets you refer to them by some *built-in* variables.
  // Like this:

  //game.drawImage(gfxDefender, game.width/2 - gfxDefender.width/2, game.height - gfxDefender.height); // <- uncomment me!

  // Now that's a bit more typing, sure, but now you know exactly what's going
  // on just by looking at the code!

  // `game.width` and `game.height` are the size of the screen (128 and 64), while
  // `gfxDefender.width` and `gfxDefender.height` are the sizes of the Defender
  // graphics (9 and 6 pixels, respectively). The dot (.) lets you know that
  // those variables are _connected_ to something: the width OF gfxDefender,
  // or the height OF the game canvas (screen).

  // We can also use the same tricks to center our alien invaders :)

});