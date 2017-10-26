/**
 * Title: Greatest Common Divisor
 *
 * Summary: Find the greatest common divisor of two integers.
 *
 * Difficulty: Easy
 *
 * Tags: Math, Iteration
 *
 * Specification:
 *
 * Given an array of two to ten non-zero integers, return the greatest
 * common divisor of the integers. That is, the largest positive integer
 * that divides all the numbers in the array without a remainder.
 */
 function kungfoo(input) {
     var output;

     function gcd(a, b){
         if(a === 0){
             return b;
         }
         return gcd(b%a, a);
     }

     output = input[0];
     for(var i = 1; i < input.length; i++){
         output = gcd(input[i], output)
     }

     return Math.abs(output);
 }
