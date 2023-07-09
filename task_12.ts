/**
 *Greetings: Start with the array you used in Exercise 11, 
 but instead of just printing each person’s name, print a message to them. The text of each message should be the same, 
 but each message should be personalized with the person’s name.
 */
// command to run this task ** tsc task_12.ts && node task_12.js **

const friends: string[] = ["Hamza", "Muzammil", "Asif", "Ameen"];

friends.map((friend, index) => {
  console.log(`Hello, ${friend}! How are you doing today?`);
});
