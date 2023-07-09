/**
  Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
  • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
  • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
  • Write one version of this program that runs the if block and another that runs the else block.
 */
// command to run this task ** tsc task_26.ts && node task_26.js **

let alien_color: string = "green";
//  IF BLOCK
console.log("--------- ALIEN COLOR IF BLOCK  ---------");
if (alien_color == "green") {
  console.log("player just earned 5 points.");
} else {
  console.log("player just earned 10 points");
}

console.log("-------------------------------------------------");

//  ELSE BLOCK
console.log("--------- ALIEN COLOR ELSE BLOCK  ---------");
if (alien_color == "yellow") {
  console.log("player just earned 5 points.");
} else {
  console.log("player just earned 10 points");
}

console.log("-------------------------------------------------");
