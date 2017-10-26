/**
 * Title: Bounding Box
 *
 * Summary: Compute the smallest bounding box that contains all points.
 *
 * Difficulty: Easy
 *
 * Tags: Geometry
 *
 * Specification:
 *
 * Given an array of point objects determine the minimum
 * bounding box that contains all the points.
 *
 * input: array of point objects where each object contains
 *        the x and y values for one point:
 *
 *        [{x: integer, y: integer},{x: integer, y: integer},...]
 *
 * output: array containing exactly two point objects where the
 *         first point object contains the minimum x  and minimum
 *         y values. The second point object contains the
 *         maximum x and maximum y values:
 *
 *         [{x: <min x>, y: <min y> },{x: <max x>, y: <max y>}]
 */
 function kungfoo(input) {
     var output;
     var minX = Infinity, minY = Infinity;
     var maxX = -Infinity, maxY = -Infinity;
     for(var i = 0; i < input.length; i++){
         if(input[i]['x'] > maxX){
             maxX = input[i]['x'];
         }
         if(input[i]['y'] > maxY){
             maxY = input[i]['y'];
         }
         if(input[i]['x'] < minX){
             minX = input[i]['x'];
         }
         if(input[i]['y'] < minY){
             minY = input[i]['y'];
         }
     }
     output = [{x: minX, y: minY},
               {x: maxX, y: maxY}];
     return output;
 }
