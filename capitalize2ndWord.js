/**
 * Title: Capitalize 2nd Word
 *
 * Summary: Capitalize the second word of a string.
 *
 * Difficulty: Foundation
 *
 * Tags: Array, String
 *
 * Specification:
 *
 * To complete this kungfoo() capitalize the second word
 * of the input string.
 *
 * Helpful Methods:
 * http://www.w3schools.com/jsref/jsref_split.asp
 * http://www.w3schools.com/jsref/jsref_touppercase.asp
 * http://www.w3schools.com/jsref/jsref_join.asp
 *
 * input: String of words separated by spaces.
 *
 * output: input string with the second word capitalized.
 */
 function kungfoo(input) {
     var output;

     input = input.split(' ');
     for(var i = 0; i < input.length; i++){
         if(i % 2 === 1){
             input[i] = input[i].toUpperCase();
         }
     }
     output = input.join(' ');
     return output;
 }
