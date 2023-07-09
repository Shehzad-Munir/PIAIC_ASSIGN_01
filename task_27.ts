/**
 * Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
  • If the alien is green, print a message that the player earned 5 points.
  • If the alien is yellow, print a message that the player earned 10 points.
  • If the alien is red, print a message that the player earned 15 points.
  • Write three versions of this program, making sure each message is printed for the appropriate color alien.
 */
// command to run this task ** tsc task_27.ts && node task_27.js **

let alien_color: string = "green";
//  IF BLOCK
console.log("--------- ALIEN COLOR IF Color is Red  ---------");
if (alien_color == "green") {
  console.log("player just earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("player just earned 10 points.");
} else if (alien_color == "red") {
  console.log("player just earned 15 points.");
} else {
  console.log("color not defined");
}

console.log("-------------------------------------------------");
alien_color = "yellow";
console.log("--------- ALIEN COLOR IF Color is Red  ---------");
if (alien_color == "green") {
  console.log("player just earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("player just earned 10 points.");
} else if (alien_color == "red") {
  console.log("player just earned 15 points.");
} else {
  console.log("color not defined");
}

console.log("-------------------------------------------------");
alien_color = "red";
console.log("--------- ALIEN COLOR IF Color is Red  ---------");
if (alien_color == "green") {
  console.log("player just earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("player just earned 10 points.");
} else if (alien_color == "red") {
  console.log("player just earned 15 points.");
} else {
  console.log("color not defined");
}

console.log("-------------------------------------------------");
