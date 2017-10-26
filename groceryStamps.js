/**
 * Title: Grocery Stamps
 *
 * Summary: Determine how many stamps a customer should get using custom rounding rule.
 *
 * Difficulty: Easy
 *
 * Tags: Math
 *
 * Specification:
 *
 * A grocery store is giving aware promotional stamps.
 * Customers get one stamp for every $10 they spend. If
 * a customer only spend $9.89 they will not get a
 * stamp but if they spend $9.90 they will get an extra
 * stamp. This means the store rounds up $9.90 to the next
 * $10 dollars but they do not round up $9.89.
 *
 * input: Amount in dollars the customer spent.
 *
 * output: Integer number of stamps customer should
 *         receive.
 *
 * Example:
 * 7.24 -> 0
 * 45.67 -> 4
 * 89.89 -> 8
 * 69.90 -> 7
 */
 function kungfoo(input) {
     var output;
     var count = 0;
     while(input >= 9.90){
         if(input >= 9.90 && input < 10){
             count++;
             break;
         }else if(input < 9.90){
             break;
         }else{
             count++;
             input -= 10;
         }
     }

     return count;
 }
