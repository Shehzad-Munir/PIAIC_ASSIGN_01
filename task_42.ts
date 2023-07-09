/**
 * Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
 */
// command to run this task ** tsc task_42.ts && node task_42.js **

function show_magicians(magician: string[]) {
  magician.map((item, index) => {
    console.log(`${item}.`);
  });
}
function make_great(magician: string[]) {
  for (let i = 0; i < magician.length; i++) {
    magician[i] = `the Great ${magician[i]}`;
  }
}

const magicians: string[] = ["Merlin", "Gandalf", "Hermione", "Zatanna"];

// original names
show_magicians(magicians);

// modifying an array
make_great(magicians);

// updated list
show_magicians(magicians);
