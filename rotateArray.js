/**
 * Title: Rotate Array
 *
 * Summary: Rotate array n elements to the right.
 *
 * Difficulty: Easy
 *
 * Tags: Array
 *
 * Specification:
 *
 * Rotate an array n elements to the right. For example, with n = 3, the
 * array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4]. Note, n can be
 * larger than the array and n can be negative.
 *
 * input: Object with n and array, eg. { n: 3, a: [1,2,3,4,5,6,7] }
 *
 * output: Rotated array, eg. [5,6,7,1,2,3,4]
 *
 * Try to do this without coping elements to a new array.
 */
 function kungfoo(input) {
     var output;

     var n = input['n'];
     var a = input['a'];
     if(n > 0){
        for(var i = 0; i < n; i++){
             a.unshift(a.pop());
         }
     }else{
         for(var i = 0; i < -1*n; i++){
             a.push(a.shift());
         }
     }

     return a;
 }
