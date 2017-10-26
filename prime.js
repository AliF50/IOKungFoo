/**
 * Title: Prime?
 *
 * Summary: Determine if a positive integer is prime.
 *
 * Difficulty: Easy
 *
 * Tags: Math, Modulus
 *
 * Specification:
 *
 * Determine if input is a prime number. Prime numbers are integers
 * greater than 1 with no positive divisors besides 1 and itself.
 *
 * Create the most efficient solution possible (least number of
 * statements executed). Modulus and Math.sqrt() are useful for this.
 *
 * input: positive integer.
 *
 * output: true if input is prime else false.
 */
 function kungfoo(input) {
     var output;
     var count;
     for(var i = 2; i < input; i++){
         if(input % i === 0){
             return false;
         }
     }
     return true;
 }
