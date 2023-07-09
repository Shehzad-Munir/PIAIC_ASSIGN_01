/**
They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

 */
// command to run this task ** tsc task_21.ts && node task_21.js **
type storeObject = {
  mountains: string[];
  countries: string[];
  cities: string[];
  languages: string[];
};
const mountains: string[] = ["Mount Everest", "K2", "Mount Fuji"];
const countries: string[] = ["Russia", "China", "Pakistan"];
const cities: string[] = ["Karachi", "New York", "Madina"];
const languages: string[] = ["Urdu", "English", "Spanish"];
// store list in object
const allData: storeObject = {
  mountains,
  countries,
  cities,
  languages,
};
console.log(
  "------------- Object of List of mountains, countries, cities & languages  -------------\n"
);
console.log(allData);
