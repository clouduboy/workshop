'use strict';

/*eslint-env es6 */
/*global MicroCanvas */
const game = new MicroCanvas();



// By default, all JavaScript numbers are interpreted as
// "max precision signed integers" when transformed into
// C code - that is, as the "int" type, the size of which
// is platform-dependent (but at least 16 bits)
let aNumber;



// Byte (8 bit unsigned integer)
// This format uses the Flow "comment annotation" syntax
// https://flow.org/en/docs/types/comments/
let aByte /*: Uint8 */ = 255;

// Same, but via initializer hint
// Anything with an initializer 0x00-0xff in the global
// scope is treated as an unsigned 8-bit integer.
// A notice is emmitted during compilation for these
// to make sure this inference does not cause any issues.
let anotherByte = 0xff;



// 16-bit unsigned integers
let aShort /*: Uint16 */ = 16384;
let anotherShort = 0x4000;



// Floats (floating point number type, with a size/precision
// specific to the given platform)
let aFloat /*: Float */ = 3.14;

// Explicit floating point annotations like the above are
// optional and can be ommited when using an initializer
// constant with a decimal point
let anotherFloat = 3.14;
// Note: JavaScript numbers are 64-bit precision "double" types,
// always use float types very carefully, and make sure you keep
// the loss of precision in mind for the code you write, making
// sure your precision errors won't accumulate and cause issues
// down the line



// Custom functions with specific number parameter- or return
// types also need to be annotated to work correctly
function dist(x /*: Float */, y /*: Float */) /*: Float */ {
  return Math.sqrt(x*x + y*y);
}



// By default, arrays are treated as to contain signed integers
// (that is, C "int"-s).
// To reduce memory usage of the code, arrays can be designated
// as "byte arrays" by initializing them as Uint8ClampedArrays.

let byteArray = new Uint8ClampedArray(10);

// Clamped 8-bit "Typed Arrays" are built into JavaScript, and
// are "clamped" to 0-255, which means even in JavaScript the
// byte-size limitation is enforced!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray



game.setup(() => {
});


game.loop(() => {
});
