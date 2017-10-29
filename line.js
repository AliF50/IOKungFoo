/**
 * Title: Line?
 *
 * Summary: Determine if 3 points form a strait line.
 *
 * Difficulty: Medium
 *
 * Tags: Geometry
 *
 * Specification:
 *
 * Determine if an array of 3 points form a strait line.
 *
 * input: 3 points of the form [[x1,y1],[x2,y2],[x3,y3]]
 *
 * output: true if 3 points form a line else false.
 */
 function kungfoo(input) {
     var output;

     input = input.map(JSON.stringify).reverse().filter(function (e, i, a) {
         return a.indexOf(e, i+1) === -1;
     }).reverse().map(JSON.parse); //get rid of doubles
     if(input.length === 2){//2 points is always a straight line
         return true;
     }else{
         var x1 = input[0][0];
         var y1 = input[0][1];
         var x2 = input[1][0];
         var y2 = input[1][1];
         var x3 = input[2][0];
         var y3 = input[2][1];
         if(x1 === x2 && x2 === x3){ //vertical line
             return true;
         }
         m = (y2 - y1)/(x2 - x1);
         b = y1 - m*x1;
         if(y1 === m*x1 + b && y2 === m*x2 + b && y3 === m*x3 + b){
             return true;
         }else{
             return false;
         }
     }

 }
