/**
 * No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
  • If the list is empty, print the message We need to find some users!
  • Remove all of the usernames from your array, and make sure the correct message is printed.
 */
// command to run this task ** tsc task_31.ts && node task_31.js **
let usernames: string[] = ["admin", "John", "Jane", "Tom", "Sarah"];

console.log("--------- USER GREETINGS ---------");

usernames.map((item, index) => {
  if (item === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${item}, thank you for logging in again.`);
  }
});
usernames = []; // Removing all usernames

if (usernames.length === 0) {
  console.log("We need to find some users!");
}
