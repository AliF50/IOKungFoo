/**
 * Title: Substitution Cipher I
 *
 * Summary: Encode string using a simple substitution cipher.
 *
 * Difficulty: Easy
 *
 * Tags: String, Cryptography
 *
 * Specification:
 *
 * input: String containing only A-Z, a-z, ".", and " " (space).
 *
 * output: String encoded such that:
 *         "." and " " (space) are left unchanged.
 *         A-Z and a-z are replaced with the corresponding letter,
 *         of the same case, shifted 13 letters to the right.
 *         If a letter is shifted past Z or z then it wraps
 *         back around to A or a and continues the remaining
 *         number of shifted positions.
 *
 * For Example:
 * A -> N
 * B -> O
 * Y -> L
 * a -> n
 * b -> o
 * y -> l
 * . -> .
 * " " -> " "
 *
 * More about substitution ciphers:
 * https://en.wikipedia.org/wiki/Substitution_cipher
 */
 function kungfoo(input) {
     var output = '';
     var capitalAlphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     var capitalAlphabetsMapped = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
     var alphabets = capitalAlphabets.toLowerCase();
     var alphabetsMapped = capitalAlphabetsMapped.toLowerCase();
     for(var i = 0; i < input.length; i++){
         if(input[i] === ' ' || input[i] === '.'){
             output += input[i];
         }else if(input[i] === input[i].toUpperCase() && input[i] !== ','){
             var index = capitalAlphabets.indexOf(input[i]);
             output += capitalAlphabetsMapped[index];
         }else if(input[i] === ','){
             output += '9';
         }else{
             var index = alphabets.indexOf(input[i]);
             output += alphabetsMapped[index];
         }
     }

     return output;
 }
