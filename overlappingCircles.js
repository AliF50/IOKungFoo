/**
 * Title: Overlapping Circles
 *
 * Summary: Determine if two circles overlap or touch.
 *
 * Difficulty: Easy
 *
 * Tags: Geometry
 *
 * Specification:
 *
 * Determine if two circles overlap or touch, given
 * their center and radius.
 *
 * input: array containing two circle objects:
 *     [{x: <x center>, y: <y center>, r: <radius>},
 *      {x: <x center>, y: <y center>, r: <radius>]
 *
 * output: true if the circles overlap or touch else false
 */
 function kungfoo(input) {
     var output;

     var C1C2 = Math.sqrt(Math.pow(input[0].x - input[1].x, 2) + Math.pow(input[0].y - input[1].y, 2));

     return C1C2 <= input[0].r + input[1].r;
 }
