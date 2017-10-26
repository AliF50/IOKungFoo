/**
 * Title: 13 + 1
 *
 * Summary: Determine if a number is a multiple of 13 or 1 greater then a multiple of 13.
 *
 * Difficulty: Easy
 *
 * Tags: Modulus
 *
 * Specification:
 *
 * input: positive integer.
 *
 * output: return true if input is a multiple of 13 or
 *         input is a multiple of 13 + 1 else return false.
 *
 * Examples:
 * 25 -> false
 * 26 -> true
 * 27 -> true
 * 28 -> false
 */
 function kungfoo(input) {
     var output;

     if(input % 13 === 0 || input % 13 === 1){
         return true;
     }

     return false;
 }
