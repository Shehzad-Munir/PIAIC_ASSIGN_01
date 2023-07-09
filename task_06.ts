/**
 *
 * Stripping Names: Store a person’s name, and include some whitespace characters at the beginning
 * and end of the name. Make sure you use each character combination,
 * "\t" and "\n", at least once. Print the name once,
 * so the whitespace around the name is displayed.
 * Then print the name after striping the white spaces
 */
// command to run this task ** tsc task_06.ts && node task_06.js **
let person_name: string = "\t   Shehzad Munir\n";
// Name With whitespace:
console.log("Name Withe whitespace: " + person_name);

// Name Without whitespace:
console.log("Name Withe whitespace: " + person_name.trim());
