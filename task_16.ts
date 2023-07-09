/**
 *More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
 */
// command to run this task ** tsc task_16.ts && node task_16.js **

const guestLists: string[] = ["Hamza", "Muzammil", "Ameen", "Asif"];
console.log("------------- Invited Guest -------------\n");
guestLists.map((guest, index) => {
  console.log(`Dear ${guest}. you are invited to dinner. kindly join us!`);
});
// Adding  to front
guestLists.unshift("Badar");
// Adding to middle
guestLists.splice(2, 0, "Muddasir");
// Adding to last
guestLists.push("Mubashir");
console.log("\n------- Attention -------");
console.log(
  "-------  We have  found a bigger table so we are extending the guest list ------- \n"
);
guestLists.map((guest, index) => {
  console.log(`Dear ${guest}. you are invited to dinner. kindly join us!`);
});
