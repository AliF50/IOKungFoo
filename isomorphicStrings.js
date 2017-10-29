/**
 * Title: Isomorphic Strings
 *
 * Summary: Determine if two strings are isomorphic.
 *
 * Difficulty: Medium
 *
 * Tags: String
 *
 * Specification:
 *
 * Given two strings, determine if they are isomorphic. Two strings are
 * isomorphic if they are the same length and you can replace all occurrences
 * of each letter in the first string with the same letter to create the
 * second string.
 *
 * For example,"egg" and "add" are isomorphic, replace all occurrence of
 * e with a and g with d. "paper" and "title" are also isomorphic.These
 * strings are not isomorphic: "foo" and "bar", "it" and "odd".
 */
 function kungfoo(input) {
     var output;
     var string1 = input[0];
     var string2 = input[1];

     if(string1.length !== string2.length){
         return false;
     }
     var string1Map = {};
     var string2Map = {};
     for(var i = 0; i < string1.length; i++){
         if(!string1Map[string1[i]] && !string2Map[string2[i]]){
             string1Map[string1[i]] = string2[i];
             string2Map[string2[i]] = string1[i];
         }else if(string1Map[string1[i]] !== string2[i] || string2Map[string2[i]] !== string1[i]){
             return false;
         }
     }

     return true;
 }
