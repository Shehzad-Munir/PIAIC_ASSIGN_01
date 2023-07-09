/**
 * Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
 */
// command to run this task ** tsc task_38.ts && node task_38.js **

function describe_city(city: string, country: string = "Pakistan") {
  console.log("-------- City With Country Name --------");
  console.log(` \"${city} is in ${country}.\"`);
}

// function call with empty  parameters
describe_city("karachi");
// function call with only size  parameter
describe_city("Lahore");
// function call with both  parameters
describe_city("Istanbul", "Turkey");
