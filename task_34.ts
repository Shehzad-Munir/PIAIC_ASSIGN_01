/**
 * Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
  • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
  • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
 */
// command to run this task ** tsc task_34.ts && node task_34.js **
const favoritePizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

console.log("--------- ORDINAL NUMBER ---------");
favoritePizzas.map((item, index) => {
  console.log(`I like ${item}`);
});
console.log(`
  I really love pizza. \n
  My favoroite pizza point in karachi, california  pizza. \n
  I want it to try different kind of pizza.`);
