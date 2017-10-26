/**
 * Title: Shuffle Arrays
 *
 * Summary: Shuffle two arrays into one.
 *
 * Difficulty: Easy
 *
 * Tags: Array
 *
 * Specification:
 *
 * Combine two arrays into one by shuffling the array
 * elements. Begin the shuffle with the first element
 * from the longer array. If the arrays are the same
 * length then begin with the first array, input[0].
 * Add elements from the shorter array, or array[1]
 * if same length, such that it's elements are evenly
 * distributed throughout the longer array. The combined
 * array should end with the last element of the shorter
 * array, or array[1] if same length.
 *
 * For Example:
 * [1,2],[10] => [1,2,10]
 * [1,2,3,4],[10,11] => [1,2,10,3,4,11]
 *
 * You can assume the length of the shorter array evenly
 * divides into the length of the longer array.
 */
 function kungfoo(input) {
     var output;

     var arr1 = input[0];
     var arr2 = input[1];
     var longer = [];
     var shorter = [];
     var resultingArray = [];
     if(arr1.length > arr2.length){
          longer = arr1;
          shorter = arr2;
     }else if(arr2.length > arr1.length){
         longer = arr2;
         shorter = arr1;
     }else{ //if equal
         longer = arr1;
         shorter = arr2;
     }
     var iShort = 0;
     var iLong = 0;
     var count = 0;
     var frequency = longer.length/shorter.length;
     var n = shorter.length + longer.length;
     var countShort = 0;
     do{
        if(countShort === frequency){
            resultingArray.push(shorter[iShort++]);
            countShort = 0;
        }else{
            resultingArray.push(longer[iLong++]);
            countShort++;
        }
        count++;
     }while(count < n);
     return resultingArray;
 }
