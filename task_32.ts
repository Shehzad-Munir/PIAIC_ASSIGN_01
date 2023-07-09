/**
 * Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
  • Make a list of five or more usernames called current_users.
  • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
  • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
  • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
 */
// command to run this task ** tsc task_32.ts && node task_32.js **
const current_users: string[] = ["admin", "John", "Jane", "Tom", "Sarah"];
const new_users: string[] = ["Eric", "John", "michael", "SARAH", "David"];

console.log("--------- USERNAME CHECK ---------");
current_users.map((item, index) => {
  const isExist = new_users.some(
    (user, index) => user.toLowerCase() == item.toLowerCase()
  );
  if (isExist) {
    console.log("Username is not available, please enter new username!");
  } else {
    console.log("Username is available");
  }
});
