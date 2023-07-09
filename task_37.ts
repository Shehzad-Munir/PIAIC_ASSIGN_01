/**
 * Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
 */
// command to run this task ** tsc task_37.ts && node task_37.js **

function make_shirt(
  size: string = "large",
  text: string = "I love TypeScript"
) {
  console.log("-------- Shirt Size --------");
  console.log(`Size: ${size}`);
  console.log(`Message: ${text}`);
}

// function call with empty  parameters
make_shirt();
// function call with only size  parameter
make_shirt("medium");
// function call with both  parameters
make_shirt("small", "I Love Coding");
