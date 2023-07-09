/**
 * Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
 */
// command to run this task ** tsc task_41.ts && node task_41.js **

function show_magicians(magician: string[]) {
  magician.map((item, index) => {
    console.log(`${item}.`);
  });
}

const magicians: string[] = ["Merlin", "Gandalf", "Hermione", "Zatanna"];

show_magicians(magicians);
