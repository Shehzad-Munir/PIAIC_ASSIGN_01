/**
 * More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
  • Tests for equality and inequality with strings
  • Tests using the lower case function
  • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
  • Tests using "and" and "or" operators
  • Test whether an item is in a array
  • Test whether an item is not in a array
 */
// command to run this task ** tsc task_24.ts && node task_24.js **

let string_value: string = "Subaru";
//  Tests for equality and inequality with strings
console.log(
  "--------- Tests for equality and inequality with strings ---------"
);
console.log("Equality of string");
console.log(string_value == "Subaru");
console.log("Equality of string");
console.log(string_value == "Kia");
console.log("Inequality of string");
console.log(string_value != "kia");
console.log("Inequality of string");
console.log(string_value != "Subaru");
console.log("-------------------------------------------------");

// Tests using the lower case function
console.log("--------- Tests using the lower case function ---------");
console.log("Equality of string  return false");
console.log(string_value.toLowerCase() == "Subaru");
console.log("Inequality of string return true");
console.log(string_value.toLowerCase() == "subaru");
console.log("-------------------------------------------------");

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const favorite_number: number = 26;
console.log(
  "--------- Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to ---------"
);
console.log("Equality of number  return True ");
console.log(favorite_number == 26);
console.log("Inequality of number return false");
console.log(favorite_number == 28);

console.log("Greater than 20   return True ");
console.log(favorite_number > 20);
console.log("Less then 20  return false");
console.log(favorite_number < 20);

console.log("Greater than or equal to 26   return True ");
console.log(favorite_number >= 26);
console.log("Less than or equal to 26  return false");
console.log(favorite_number <= 20);

console.log("-------------------------------------------------");

// Tests using the lower case function
console.log(`--------- Tests using "and" and "or" operators ---------`);
console.log("And Condtion on number  return true");
console.log(favorite_number > 20 && favorite_number < 26);
console.log("OR Condtion on number return true");
console.log(favorite_number > 28 || favorite_number < 20);
console.log("-------------------------------------------------");

const favoriteFruit: string[] = ["apple", "banana", "orange"];
// Tests using the lower case function
console.log(`--------- Test whether an item is in a array ---------`);
console.log("is apple in favoriteFruit array return true");
console.log(favoriteFruit?.includes("apple"));
console.log("-------------------------------------------------");

// Test whether an item is not in a array
console.log(`--------- Test whether an item is not in a array ---------`);
console.log("is mango in favoriteFruit array return false");
console.log(favoriteFruit?.includes("apple"));
console.log("-------------------------------------------------");
