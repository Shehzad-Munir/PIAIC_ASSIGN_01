/**
 * Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
  • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
 */
// command to run this task ** tsc task_35.ts && node task_35.js **
const favoriteAnimal: string[] = ["Dog", "Cat", "Parrot"];

console.log("--------- FAVORITE ANIMAL ---------");
favoriteAnimal.map((item, index) => {
  console.log(`A ${item} would make a great pet`);
});
console.log(`
  These Animal can make excellent pets for the right people.  \n
  but caring for these animal is not an easy task.`);
