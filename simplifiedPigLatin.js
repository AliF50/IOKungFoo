/**
 * Title: Simplified Pig Latin
 *
 * Summary: Convert string to Pig Latin
 *
 * Difficulty: Easy
 *
 * Tags: String
 *
 * Specification:
 *
 * This kungfoo() uses simplified rules for Pig Latin.
 * Given a sentence, for each word, the first letter
 * is moved to the end of the word and "ay" is added.
 * Also, the sentence punctuation and first letter
 * capitalization must be persevered.
 *
 * For Example:
 * "That is a big dog." => "Hattay siay aay igbay ogday."
 * "This is a test." => "Histay siay aay esttay."
 *
 * input: String containing a sentence.
 *
 * output: String containing simplified Pig Latin.
 */
 function kungfoo(input) {
     var output = [];
     var tempString = '';
     input = input.split(' ');
     for(var i = 0; i < input.length; i++){
             if(i === 0){ //if beginning of string, deal with capital letter
                 tempString = input[i].substring(1, 2).toUpperCase() + input[i].substring(2, input[i].length) + input[i][0].toLowerCase() + 'ay';
             }else if(i === input.length - 1){//if last word in sentence, deal with punctuation
                 tempString = input[i].substring(1, input[i].length - 1) + input[i][0] + 'ay' + input[i][input[i].length - 1];
             }else{ //else treat as normal
                 tempString = input[i].substring(1, input[i].length) + input[i][0] + 'ay';
             }
             output.push(tempString);
             tempString = '';
     }
     output = output.join(' ');
     return output;
 }
