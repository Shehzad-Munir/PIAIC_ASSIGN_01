/**
 * Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
 */
// command to run this task ** tsc task_45.ts && node task_45.js **

function create_car(
  manufacturer: string,
  model: string,
  ...additionalInfo: { [key: string]: any }[]
) {
  const car: { [key: string]: any } = {
    manufacturer: manufacturer,
    modelName: model,
  };
  for (const info of additionalInfo) {
    const key = Object.keys(info)[0];
    const value = Object.values(info)[0];
    car[key] = value;
  }
  return car;
}
console.log(
  create_car("Kia", "Sportage", { color: "Black" }, { AC: "Available" })
);
console.log(
  create_car(
    "Toyota",
    "C-HR",
    { color: "Black" },
    { AC: "Available" },
    { Camera: "Available" }
  )
);
