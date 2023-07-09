/**
 * Name Cases: Store a person’s name in a variable, and then 
 * print that person’s name in lowercase, uppercase, and titlecase.
*/
// command to run this task ** tsc task_03.ts && node task_03.js **
const percon_name:string="Eric";

// lower case
console.log( percon_name.toLowerCase());
// uppercase
console.log( percon_name.toUpperCase());
// titlecase
console.log(`${percon_name.charAt(0).toUpperCase()}${percon_name.slice(1)}`);
