/**
 *Your Own Array: Think of your favorite mode of transportation, 
 such as a motorcycle or a car, and make a list that stores several examples. 
 Use your list to print a series of statements about these items, 
 such as “I would like to own a Honda motorcycle.
 */
// command to run this task ** tsc task_13.ts && node task_13.js **

const transportations: string[] = ["Bike", "Car", "Helicopter", "Ski Jet"];

transportations.map((transportation, index) => {
  console.log(`I would like to own a ${transportation}.`);
});
