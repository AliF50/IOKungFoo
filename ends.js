/**
 * Title: Ends
 *
 * Summary: Return array that contains only the input array start and end values.
 *
 * Difficulty: Foundation
 *
 * Tags: Array
 *
 * Specification:
 *
 * Given an input array, return a new array containing only
 * the ends, first and last elements of the input array.
 *
 * Help with Arrays:
 * http://www.w3schools.com/js/js_arrays.asp
 *
 * input: array containing 2 or more elements.
 *
 * output: array containing the first and last elements
 *         of the input array.
 *
 * Example:
 * [1,2,3,4,5,6] -> [1,6]
 * ['apple','banana','pear'] -> ['apple','pear']
 */

 function kungfoo(input) {
     var output;

     output = [input[0], input[input.length - 1]];

     return output;
 }
