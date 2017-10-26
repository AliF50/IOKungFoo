/**
 * Title: Palindrome
 *
 * Summary: Determine if a string is a palindrome, ignoring white space, punctuation, and case.
 *
 * Difficulty: Easy
 *
 * Tags: String
 *
 * Specification:
 *
 * input: String
 *
 * output: true if input is a palindrome (ignoring white space,
 * punctuation, and case) else false.
 *
 * For example:
 * "Anna" and "Pot top." are palindromes.
 * "Animal" and "The ball is red." are not.
 */
 function kungfoo(input) {
     var output;

     input = input.toLowerCase();
     input = input.split('');
     //remove punctuation and space
     for(var i = 0; i < input.length; i++){
         if(input[i] === ' ' || input[i] === ',' || input[i] === "’" || input[i] === "!" || input[i] === '.'){
             input.splice(i, 1);
             i--;
         }
     }
     for(var i = 0; i < input.length; i++){
         if(input[i] !== input[input.length - i - 1]){
             return false;
         }
     }
     return true;
 }
