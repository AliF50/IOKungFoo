/**
 * Title: Mean == Mode
 *
 * Summary: Determine if an array of integers has the same Mean and Mode.
 *
 * Difficulty: Medium
 *
 * Tags: Math, Map
 *
 * Specification:
 *
 * input: non-empty array of positive integers.
 *
 * output: true if the Mean and Mode of the input integers
 *         are the same else false.
 */
 function kungfoo(input) {
     var output;

     var sum = 0;
     var mean;
     var mode;
     numberDict = {};
     for(var i = 0; i < input.length; i++){
         sum += input[i];
     }
     mean = sum/input.length;
     max = -Infinity;
     for(var i = 0; i < input.length; i++){
         if(numberDict[input[i]]){
             numberDict[input[i]]++;
         }else{
             numberDict[input[i]] = 1;
         }
     }
     for(var number in numberDict){
         if(numberDict[number] > max){
             max = numberDict[number];
             mode = Number(number);
         }
     }
     return output = mean === mode;
 }
