/**
 * Title: Even Spacing
 *
 * Summary: Determine if all values in a set of integers are evenly spaced.
 *
 * Difficulty: Easy
 *
 * Tags: Array, Math
 *
 * Specification:
 *
 * Given an set of integers return true if the set of
 * integers are evenly spaced from one another.
 *
 * input: array of 2 or more integers.
 *
 * output: true if the set of input integers are evenly
 *         spaced from one another else false.
 *
 * Example:
 * [6,2,4,8] -> true
 * [4,7,1,10] -> true
 * [5,3,8] -> false
 */
 function kungfoo(input) {
     var output;
     input = input.sort(function(a, b){
         return a -b;
     });
     var diff = input[0] - input[1];
     for(var i = 2; i < input.length - 1; i++){
         if(input[i] - input[i + 1] !== diff){
             return false;
         }
     }

     return true;
 }
