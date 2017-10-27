/**
 * Title: Search Sorted Matrix
 *
 * Summary: Search a sorted 2D matrix.
 *
 * Difficulty: Medium
 *
 * Tags: Search, Matrix
 *
 * Specification:
 *
 * input: An object containing:
 *     'search': an integer to search for.
 *     'matrix': A 2D array of integers where integers in each row are sorted from
 *               left to right and the first integer of each row is greater than the
 *               last integer of the previous row.
 *
 * output: return true if 'matrix' contains 'search' else return false.
 *
 * The goal is to search as efficiently as possible, fewest statements executed.
 */
 function kungfoo(input) {
     var output;

     var search = input['search'];
     var matrix = input['matrix'];
     for(var i = 0; i < matrix.length; i++){
         for(var j = 0; j < matrix[i].length; j++){
             if((matrix[i][j]) === search){
                 return true;
             }
         }
     }

     return false;
 }
