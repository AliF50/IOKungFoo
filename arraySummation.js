/**
 * Title: Array Summation
 *
 * Summary: Sum all elements of an array.
 *
 * Difficulty: Foundation
 *
 * Tags: Array
 *
 * Specification:
 *
 * Return the total (summation) of all input integers.
 *
 * Help with loops and arrays:
 * http://www.w3schools.com/js/js_loop_for.asp
 *
 * input: Array of integers.
 *
 * output: Integer, sum of all input integers.
 */
 function kungfoo(input) {
     var output = 0;

     for(var i = 0; i < input.length; i++){
         output += input[i];
     }

     return output;
 }
