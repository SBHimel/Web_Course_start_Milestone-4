function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  const name = "Himel";
  callback(name);
}

processUser(greet); //Hello Himel

//Pass Different Functions (Flexible)

function sayHi(name) {
  console.log("Hi " + name);
}

function sayBye(name) {
  console.log("Bye " + name);
}

function runCallback(callback) {
  const name = "Himel";
  callback(name);
}

runCallback(sayHi);  // Hi Himel
runCallback(sayBye); // Bye Himel