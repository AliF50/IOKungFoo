/**
 * Title: Search Object
 *
 * Summary: Determine if any properties of an object contain a specific value.
 *
 * Difficulty: Foundation
 *
 * Tags: Search, Object
 *
 * Specification:
 *
 * Search the properties, regardless of name, of an object
 * and return true if any value matches target else return
 * false.
 *
 * Help with Objects:
 * http://www.w3schools.com/js/js_objects.asp
 * http://www.w3schools.com/js/js_loop_for.asp (see The For/In Loop)
 *
 * input: Object containing:
 *     search: object to search through
 *     target: value to search for
 *
 * output: true if any value in search object equals target
 *         else false.
 */

 function kungfoo(input) {
     var output;

     for(var key in input.search){
         if(input.search[key] === input.target){
             return true;
         }
     }
     return false;
 }
