/**
 * Title: Largest Duplicate Count
 *
 * Summary: Count the letter with the most duplicates.
 *
 * Difficulty: Medium
 *
 * Tags: Map
 *
 * Specification:
 *
 * input: string
 *
 * output: false if input contains no duplicate letters else
 *         the total count of the letter with the most
 *         duplicates.
 *
 * For Example:
 *     "abc" => false
 *     "aba" => 2
 *     "ababcb" => 3
 */
 function kungfoo(input) {
     var output;

     letterDict = {};
     for(var i = 0; i < input.length; i++){
         if(letterDict[input[i]]){
             letterDict[input[i]]++;
         }else{
             letterDict[input[i]] = 1;
         }
     }
     var max = 1;
     for(var letter in letterDict){
         if(letterDict[letter] > max){
             max = letterDict[letter];
         }
     }

     if(max === 1){
         return false;
     }else{
         return max;
     }
 }
