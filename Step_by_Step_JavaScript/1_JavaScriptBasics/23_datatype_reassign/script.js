let varName

varName = "John";
console.log (`Type of ${varName} is ${typeof varName}`);

varName = 19.99;
varName = BigInt(123456789012345678901234567890);
varName = false;

varName = ["red", "green", "blue"];
varName = {
  name: "John",
  age: 30,
  isStudent: false,
};

console.log (`Type of ${JSON.stringify(varName)} is ${typeof(varName)}`)


