// Find the instances of unreachable and redundant code - remove them!
// The sayHello function should continue to work for any reasonable input it's given.

const testName = "Aman";
const greeting = "hello";

function sayHello(greeting, name) {

  return `${greeting}, ${name}!`;
  
}



const greetingMessage = sayHello(greeting, testName);

console.log(greetingMessage); // 'hello, Aman!'


//Edit line 4 let testName = "Jerry"; to const testName = "Aman"; to avoid reassignment of a constant variable.
//Remove line 8 const greetingStr = greeting + ", " + name + "!"; as it is redundant and not used in the function.
//Remove line 10 console.log(greetingStr); as it is unreachable code and will never be executed.
//Remove line 13 testName = "Aman"; as it has became redundant 