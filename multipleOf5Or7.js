/**
 * Title: Multiple of 5 or 7
 *
 * Summary: Determine if a number is a multiple of 5 or 7.
 *
 * Difficulty: Foundation
 *
 * Tags: Modulus
 *
 * Specification:
 *
 * The modulus operator (%) returns the division remainder
 * and is useful in many coding problems. Use the modulus
 * operator to determine if input is a multiple of 5 or 7.
 *
 * Help with Modulus:
 * http://codingbat.com/doc/practice/mod-introduction.html
 *
 * input: positive integer.
 *
 * output: true if input is a multiple of 5 or 7 else false.
 */
 function kungfoo(input) {
     var output;

     output = input % 5 === 0 || input % 7 === 0;

     return output;
 }
