/**
 * Title: Reverse Sort
 *
 * Summary: Use array sort method to sort array in descending order.
 *
 * Difficulty: Foundation
 *
 * Tags: Array, Sort
 *
 * Specification:
 *
 * To complete this kungfoo() use the array sort function
 * to sort the input array in descending order.
 *
 * If you need help with array sort see:
 * http://www.w3schools.com/jsref/jsref_sort.asp
 *
 * input: Array of integers.
 *
 * output: Array of input integers sorted in descending
 *         order (largest to smallest).
 */
 function kungfoo(input) {
     var output;

     output = input.sort(function(a, b){
         return b - a;
     });

     return output;
 }
