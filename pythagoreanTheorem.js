/**
 * Title: Pythagorean Theorem
 *
 * Summary: Use Math object to compute Pythagorean theorem.
 *
 * Difficulty: Foundation
 *
 * Tags: Math, Object
 *
 * Specification:
 *
 * Use the Math object to compute the length of the
 * hypotenuse of a right angle triangle. Round the
 * answer to the nearest integer value.
 *
 * Help with the Math object:
 * http://www.w3schools.com/jsref/jsref_obj_math.asp
 *
 * input: Object with side a and b values of a right
 *        angle triangle.
 *
 * output: Integer length of hypotenuse, side c, rounded to
 *         the nearest integer value.
 */
 function kungfoo(input) {
     var output;

     output = Math.round(Math.sqrt(Math.pow(input.a, 2) + Math.pow(input.b, 2)));

     return output;
 }
