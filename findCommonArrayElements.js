/**
 * Title: Find Common Array Elements
 *
 * Summary: Given two arrays, find all integers that appear in both arrays.
 *
 * Difficulty: Easy
 *
 * Tags: Search, Array
 *
 * Specification:
 *
 * input is of the form [[a1,a2,...,aX],[b1,b2,...,bY]]
 * where all array elements are integers. Note, there may
 * be duplicates within the a or b arrays.
 *
 * output must be a sorted array of unique integers,
 * [c1,c2,...,cZ], where an integer only appears in the
 * c array if it appears in both the a and b arrays.
 */
 function kungfoo(input) {
     var output = [];

     var dict1 = {};
     var dict2 = {};
     var arr1 = input[0];
     var arr2 = input[1];
     for(var i = 0; i < arr1.length; i++){
         if(!dict1[arr1[i]]){
             dict1[arr1[i]] = 1;
         }
     }
     for(var i = 0; i < arr2.length; i++){
         if(!dict2[arr2[i]]){
             dict2[arr2[i]] = 1;
         }
     }
     var whichOne;
     if(Object.keys(dict1) >= Object.keys(dict2)){
         whichOne = dict1;
     }else{
         whichOne = dict2;
     }

     for(var key in whichOne){
         if(dict1[key] && dict2[key]){
             output.push(+key);
         }
     }
     output = output.sort(function(a, b){
        return a - b;
     });
     return output;
 }
