/**
 * Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
 */
// command to run this task ** tsc task_43.ts && node task_43.js **

function show_magicians(magician: string[]) {
  magician.map((item, index) => {
    console.log(`${item}.`);
  });
}
function make_great(magician: string[]) {
  const updated_list: string[] = [];
  for (let i = 0; i < magician.length; i++) {
    updated_list.push(`the Great ${magician[i]}`);
  }
  return updated_list;
}

const magicians: string[] = ["Merlin", "Gandalf", "Hermione", "Zatanna"];

// original names
show_magicians(magicians);

// modifying an array
const updated_magicians: string[] = make_great(magicians);

// updated_magicians
show_magicians(updated_magicians);

// origin name
show_magicians(magicians);
