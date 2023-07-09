/**
 * City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
    "Lahore, Pakistan"
    Call your function with at least three city-country pairs, and print the value that’s returned.
 */
// command to run this task ** tsc task_39.ts && node task_39.js **

function describe_city(city: string, country: string = "Pakistan") {
  console.log("-------- City With Country Name --------");
  console.log(` \"${city}, ${country}\"`);
}

// function call with empty  parameters
describe_city("karachi");
// function call with only size  parameter
describe_city("Lahore");
// function call with both  parameters
describe_city("Istanbul", "Turkey");
