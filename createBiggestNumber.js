/**
 * Title: Create Biggest Number
 *
 * Summary: Combine Array of numbers so resulting number is as large as possible.
 *
 * Difficulty: Easy
 *
 * Tags: Array
 *
 * Specification:
 *
 * input: Array of positive integers.
 *
 * output: Integer created by sorting and combining
 *         input integers such that resulting integer
 *         is as large a possible.
 *
 * Example:
 * [15,21] - > 2115
 * [1,5,3,10,1] -> 531110
 */
 function kungfoo(input) {
     var output;

     output = input.sort(function(a, b){
         if((a.toString() + b.toString()) >= (b.toString() + a.toString())){
             return -1;
         }else{
             return 1;
         }
     });
     output = +output.join('');

     return output;
 }
