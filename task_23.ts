/**
 * Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
   let car = 'subaru';
   console.log("Is car == 'subaru'? I predict True.")
   console.log(car == 'subaru')
   * Look closely at your results, and make sure you understand why each line evaluates to True or False.
   * Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
 */
// command to run this task ** tsc task_23.ts && node task_23.js **
let car: string = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru");

console.log("Is car == 'Kia'? I predict False.");
console.log(car == "kia");

console.log("Is car != 'Kia'? I predict True.");
console.log(car != "kia");

console.log("Is car != 'subaru'? I predict False.");
console.log(car != "subaru");

console.log("Is car === 'subaru'? I predict True.");
console.log(car === "subaru");

console.log("Is car === 'Kia'? I predict False.");
console.log(car === "kia");

console.log("Is car !== 'Kia'? I predict True.");
console.log(car !== "kia");

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== "subaru");

console.log("Is car == 'ford'? I predict False.");
console.log(car !== "ford");

console.log("Is car !== 'subaru'? I predict True.");
console.log(car !== "subaru");
