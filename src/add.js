const add = (param1, param2) => {
  // Check if both parameters are numbers
  if (typeof param1 === "number" && typeof param2 === "number") {
    // Both are numbers, so add them
    return param1 + param2;
  }

  //Check is both parameters are strings
  if (typeof param1 === "string" && typeof param2 === "string") {
    // Both are strings, so concatenate them
    return param1 + param2;
  }

  // TODO: Write logic that accounts for parameters that are different data types
  if(isNaN(param1) || isNaN(param2)) {
    return `${param1}` + `${param2}`
  } else {
    return parseInt(param1) + parseInt(param2)
  }

  // If no specified condition is met, return a default value or an error message
  return "Invalid input";
};


const unitTestExampleOne = () => {
  // Test adding two numbers
  console.log("Test 1: Adding two numbers (2 and 3)");
  console.log(add(2, 3) === 5 ? "Passed" : "Failed");
};

const unitTestExampleTwo = () => {
  // Test adding two non-numeric strings
  console.log('Test 2: Adding two non-numeric strings ("Hello " and "world")');
  console.log(add("Hello ", "world") === "Hello world" ? "Passed" : "Failed");
};

const unitTestExampleThree = () => {
  console.log('Test 3: Adding two different data types ("hello" and 1)');
  console.log(add("hello", 1) === "hello1" ? "Passed" : "Failed")
  console.log(add("1", 1) === 2 ? "Passed" : "Failed")
}

unitTestExampleOne();
unitTestExampleTwo();
unitTestExampleThree();
