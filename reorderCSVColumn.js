/**
 * Title: Reorder CSV Column
 *
 * Summary: Reorder columns for each line of a comma separated value (CSV) string.
 *
 * Difficulty: Easy
 *
 * Tags: String, Array
 *
 * Specification:
 *
 * Reorder columns for each line of a comma separate value string.
 *
 * input is an object with:
 *     source: the column to be moved (0 indexed).
 *     target: the new position of the source solumn
 *        csv: the CSV string.
 *
 * output is the a csv string with the updated columns.
 *
 * Note: "\n" in the CSV is the new line character.
 */
 function kungfoo(input) {
     var output = '';

     var rows = input.csv.split('\n');
     var columns = [];
     var temp;

     for(var i = 0; i < rows.length; i++){
         columns.push(rows[i].split(','));
     }
     for(var i = 0; i < rows.length; i++){
         temp = columns[i][input.source];
         columns[i].splice(input.source, 1);
         columns[i].splice(input.target, 0, temp);
     }
     for(var i = 0; i < rows.length; i++){
         output += columns[i].join(',');
         if(rows.length > 1 && i !== rows.length -1){
            output += '\n';
         }

     }
     return output;
 }
