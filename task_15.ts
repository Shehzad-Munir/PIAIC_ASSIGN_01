/**
 *Guest List: If you could invite anyone, living or deceased, to dinner,
  who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
   Then use your list to print a message to each person, 
   inviting them to dinner.
 *Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
 */
// command to run this task ** tsc task_15.ts && node task_15.js **

const guestLists: string[] = ["Hamza", "Muzammil", "Ameen", "Asif"];
console.log("------------- Invited Guest -------------");
guestLists.map((guest, index) => {
  console.log(`Dear ${guest}. you are invited to dinner. kindly join us!`);
});

// Cancelled Gues due to fever
let cancelledGuest: string[] = [];
cancelledGuest.push(guestLists[1]);
// Cancelled User
console.log("\n------------- Cancelled Guest -------------");
console.log(cancelledGuest[0] + " Could'nt make it to dinner due to sickness");

// New Invitation list
guestLists[1] = "Mudassir";
console.log("\n------------- New Guest List -------------");
guestLists.map((guest, index) => {
  console.log(`Dear ${guest}. you are invited to dinner. kindly join us!`);
});
