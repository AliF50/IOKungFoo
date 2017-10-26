/**
 * Title: Encode Repeats
 *
 * Summary: Replace repeated letters in a string with the letter count.
 *
 * Difficulty: Easy
 *
 * Tags: String
 *
 * Specification:
 *
 * Replace consecutive repeated letters in a string with
 * the count of the repeated letters. Only perform a
 * replacement when the total number of characters would
 * be reduced.
 *
 * For Example:
 * "abc" => "abc"
 * "abbbc" => "ab2c"
 * "abbc" => "abbc"
 * "acccccbacccb" => "ac4bac2b"
 *
 * input: String of only lower case letters.
 *
 * output: String with repeated letters encoded.
 */
 function kungfoo(input) {
   var output = '';
   var count = 0;
   if(input.length <= 2){
     return input;
   }else{
   for(var i = 0; i < input.length - 1; i++){
     if(input[i] === input[i + 1]){
       if(count === 0){
        output += input[i];
      }
       count++;
     }
     if(i === input.length - 2 && count > 1 && input[i] === input[i + 1]){
       output += count;
       count = 0;
     }
     if(input[i] !== input[i + 1]){
       if(count > 1){
         output += count;
         count = 0;
       }else if(count === 1){
         output += input[i];
         count = 0;
       }else{
         output += input[i];
       }
     }
     if(i === input.length - 2 && input[i] !== input[i + 1]){
       output += input[i + 1];
     }
   }
   return output;
   }
 }
