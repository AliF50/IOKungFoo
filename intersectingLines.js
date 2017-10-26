/**
 * Title: Intersecting Lines
 *
 * Summary: Determine if two lines intersect.
 *
 * Difficulty: Easy
 *
 * Tags: Geometry
 *
 * Specification:
 *
 * Given two lines where each is defined by two points
 * on the line (not the line end points), determine
 * if the lines intersect. If they intersect then return
 * the point of intersection else return false.
 *
 * input: object containing two lines defined by two
 *     points each:
 *     {
 *         line1: {x1: int, y1: int, x2: int, y2: int},
 *         line2: {x1: int, y1: int, x2: int, y2: int}
 *     }
 *
 * output: object containing point of intersection rounded
 *     to nearest integer, {x: int, y int} else false.
 */
 function kungfoo(input) {
     var output;
     var x;
     var y;
     var line1 = input.line1;
     var line2 = input.line2;

     var m1 = (line1.y2 - line1.y1)/(line1.x2 - line1.x1);
     var m2 = (line2.y2 - line2.y1)/(line2.x2 - line2.x1);
     var b1 = line1.y1 - m1*line1.x1;
     var b2 = line2.y1 - m2*line2.x1;
     if(m1 === m2){
         return false;
     }else{
         x = (b2 - b1)/(m1 - m2);
         y = m1*x + b1;
     }
     return {x: Math.round(x), y: Math.round(y)};
 }
