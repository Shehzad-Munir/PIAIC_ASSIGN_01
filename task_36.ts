/**
 * T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
 */
// command to run this task ** tsc task_36.ts && node task_36.js **

function make_shirt(size: string, text: string) {
  console.log("-------- Shirt Size --------");
  console.log(`Size: ${size}`);
  console.log(`Message: ${text}`);
}

make_shirt("L", "I Love Coding");
