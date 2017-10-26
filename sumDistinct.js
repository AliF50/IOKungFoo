/**
 * Title: Sum Distinct
 *
 * Summary: Sum all distinct numbers in an array.
 *
 * Difficulty: Easy
 *
 * Tags: Array
 *
 * Specification:
 *
 * Given array of numbers, return the sum of all
 * distinct numbers.
 *
 * input: array of 2 or more numbers.
 *
 * output: sum of all distinct input numbers.
 *
 * Example:
 * [5,5] -> 5
 * [5,6,6] -> 11
 * [6,5,5,6] -> 11
 */
 function kungfoo(input) {
     var output;

     var dict = {};
     for(var i = 0; i < input.length; i++){
         if(dict[input[i]]){
             dict[input[i]]++;
         }else{
             dict[input[i]] = 1;
         }
     }
     var total = 0;
     for(var key in dict){
         total += +key;
     }
     output = total;
     return output;
 }
