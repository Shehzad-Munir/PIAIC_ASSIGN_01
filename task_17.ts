/**
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
 */
// command to run this task ** tsc task_17.ts && node task_17.js **

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
console.log("-------  Due to some reason we could'nt invite you ------- \n");
while (guestLists.length > 2) {
  let removedGuest = guestLists.pop();
  console.log(`Apologies, ${removedGuest}  we Could'nt invite you.`);
}

console.log("\n ------- Final Invitation ------- \n");

guestLists.map((guest, index) => {
  console.log(`Dear ${guest}. you are invited to dinner. kindly join us!`);
});
console.log("\n ------- Final List ------- \n");
guestLists.splice(0, guestLists.length);

console.log("Final List: " + guestLists.length);
