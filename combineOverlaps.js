/**
 * Title: Combine Overlaps
 *
 * Summary: Combine overlapping ranges into a single range.
 *
 * Difficulty: Easy
 *
 * Tags: Array
 *
 * Specification:
 *
 * input: An array of range objects each containing:
 *     start: Integer, start of range,
 *       end: Integer, end of the range.
 *
 * output: An array of non-overlapping range objects covering
 *         the same range(s) as input ordered from smallest
 *         start to largest start. Two ranges overlap if
 *         range1.start <= range2.start and
 *         range1.end >= range2.start
 */
 function kungfoo(input) {
     var result = [];

     input = input.sort(function(a, b){
        return a.start - b.start;
     });
     var prev = input[0];
     for(var i = 1; i < input.length; i++){
         var curr = input[i];
         if(prev.end >= curr.start){
             //merged case
             var merged = {start: prev.start, end: Math.max(prev.end, curr.end)};
             prev = merged;
         }else{
             result.push(prev);
             prev = curr;
         }
     }
     result.push(prev);

     return result;
 }
