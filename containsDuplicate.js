/**
 * Title: Contains Duplicate
 *
 * Summary: Determine if a string contains any duplicate letters.
 *
 * Difficulty: Easy
 *
 * Tags: String
 *
 * Specification:
 *
 * input: String
 *
 * output: true if input contains any duplicate letters
 *         else false
 */
 function kungfoo(input) {
     var output;

     if(!input || input.length === 0){
         return false;
     }
     var dict = {};
     for(var i = 0; i < input.length; i++){
         if(dict[input[i]]){
             return true;
         }else{
             dict[input[i]] = 1;
         }
     }
     return false;
 }
