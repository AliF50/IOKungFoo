/**
 * Title: Unwind
 *
 * Summary: Unwind matrix of letters in a clockwise direction.
 *
 * Difficulty: Easy
 *
 * Tags: Array
 *
 * Specification:
 *
 * input: Matrix (2D Array) of letters.
 *
 * output: String containing the input letters in the
 *         following order:
 *
 *         Start with [0][0] and move right to [0][n]; (right across the top)
 *         continue clockwise down to [m][n] (down the right side)
 *         then move left to [m][0], (left across the bottom)
 *         and complete the first circuit at [0][1]. (up the left side)
 *
 *         Start the next clockwise circuit at [1][1] and
 *         the next at [2][2] etc...
 *
 *         When full circuits do not exist then begin the
 *         circuit as normal and then stop when no more
 *         letters are available.
 */
 function kungfoo(input) {
     var output = '';
     var arr = input;
     var i;
   var top = 0;
   var left = 0;
   var bottom = arr.length;
   var right = arr[0].length;

   while (top < bottom && left < right) {

     //print top
     for (i = left; i < right; i += 1) {
       output += arr[top][i];
     }
     top++;

     //print right column
     for (i = top; i < bottom; i += 1) {
       output += arr[i][right - 1];
     }
     right--;

     if (top < bottom) {
       //print bottom
       for (i = right - 1; i >= left; i -= 1) {
         output += arr[bottom - 1][i];
       }
       bottom--;
     }

     if (left < right) {
       //print left column
       for (i = bottom - 1; i >= top; i -= 1) {
         output += arr[i][left];
       }
       left++;
     }
   }

     return output;
 }
