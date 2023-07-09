/**
 *Guest List: If you could invite anyone, living or deceased, to dinner,
  who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
   Then use your list to print a message to each person, 
   inviting them to dinner.
 */
// command to run this task ** tsc task_14.ts && node task_14.js **

const guestLists: string[] = ["Hamza", "Muzammil", "Ameen", "Asif"];

guestLists.map((guest, index) => {
  console.log(`Dear ${guest}. you are invited to dinner. kindly join us!`);
});
