/**
 * Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
 */
// command to run this task ** tsc task_44.ts && node task_44.js **

function make_sandwiches(...ingredients: string[]) {
  console.log("-------------- SANDWICH ORDER SUMMARY --------------");
  console.log("Ingredients");
  ingredients.map((item, index) => {
    console.log(`Item ${index + 1}: ${item}`);
  });
  console.log("-------------- -------------- --------------\n");
}
make_sandwiches("Bread", "Mayonise", "Beef");
make_sandwiches("Bread", "Mayonise", "Hot Dog", "Ketchup", "Tomato");
make_sandwiches(
  "Bread",
  "Mayonise",
  "Hot Dog",
  "Ketchup",
  "Tomato",
  "Avacado",
  "Onion"
);
