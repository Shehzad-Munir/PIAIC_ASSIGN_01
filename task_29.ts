/**
 * Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
  • Make a array of your three favorite fruits and call it favorite_fruits.
  • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
 */
// command to run this task ** tsc task_29.ts && node task_29.js **

let favorite_fruits: string = ["banana", "apple", "mango"];
//  IF BLOCK
console.log("--------- Favorite Fruit  ---------");
if (favorite_fruits.includes("banana")) {
  console.log("banana is my favorite fruit");
} else if (favorite_fruits.includes("apple")) {
  console.log("apple is my favorite fruit");
} else if (favorite_fruits.includes("mango")) {
  console.log("mango is my favorite fruit");
} else {
  console.log("fruit doest not exist on list.");
}
