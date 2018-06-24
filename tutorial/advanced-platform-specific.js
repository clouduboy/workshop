'use strict';

/*global MicroCanvas */
const game = new MicroCanvas();


game.setup(() => {
});


game.loop(() => {
  game.clear();
  game.drawText('Cross\nPtfrm', 0,0, 4);

  // Flash the RGB led on the Arduboy
  // Flash the browser canvas background in a purple color
  if (game.everyXFrames(6)) {
    game.custom({
      canvas: `document.body.style.backgroundColor='rgb(96, 0, 128)'`,
      arduboy: `arduboy.setRGBled(96, 0, 128)`,
    });
  }

  if (game.everyXFrames(12)) {
    game.custom({
      canvas: `document.body.style.backgroundColor=''`,
      arduboy: `arduboy.setRGBled(0, 0, 0)`,
    });
  }

});
