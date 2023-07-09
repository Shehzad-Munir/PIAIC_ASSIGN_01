/**
Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
 */
// command to run this task ** tsc task_22.ts && node task_22.js **

const mountains: string[] = ["Mount Everest", "K2", "Mount Fuji"];
// Intentional Error

console.log(
  "------------- index 5 is not in mountains array so it should throw undfined  -------------\n"
);

// undefined
console.log(mountains[5]);
// solve undefined issue
if(mountains.length > 5)
{
console.log(mountains[5]);


}else{
console.log("index out of range");

}
