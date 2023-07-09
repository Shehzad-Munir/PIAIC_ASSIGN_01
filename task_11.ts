/**
 *Names: Store the names of a few of your friends in a array called names.
  Print each person’s name by accessing each element in the list, 
  one at a time.
 */
// command to run this task ** tsc task_11.ts && node task_11.js **

const friends: string[] = ["Hamza", "Muzammil", "Asif", "Ameen"];

friends.map((friend, index) => {
  console.log(friend);
});
