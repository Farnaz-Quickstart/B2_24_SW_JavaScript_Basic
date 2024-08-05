// Enumerates all the data types you can use in JavaScript.
// Primitive data types (Numbers, Strings, Booleans, Undefined, Null, BigInt, Symbol)

let num = 3;
let str = 'abc';
let bool = true;
let undef = undefined;
let nullValue = null;
let bigNum = 5n;
let mySymbol = Symbol('test'); 

console.log (`Primitive datatype
  ${num} : ${typeof num} 
  ${str} : ${typeof str} 
  ${bool} : ${typeof bool}
  ${undef} : ${typeof undef}
  ${nullValue} : ${typeof nullValue}
  ${bigNum} : ${typeof bigNum}
  ${mySymbol.toString()} : ${typeof mySymbol}
  `)
// Composite data Types (Functions, Arrays, Objects, Maps, Sets)
let sum = (a, b) => a + b;
let dict = {name: 'John', age: 30};
let list = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let mySet = new Set([1, 2, 3, 3, 4]);
let myMap = new Map([[1, 'one'], [2, 'two']]); 

console.log (`Composite datatype
  ${sum.toString()} : ${typeof sum} 
  ${dict} : ${typeof dict}
  ${list} : ${typeof list} 
  ${mySet.toString()} : ${typeof mySet}
  ${myMap.toString()} : ${typeof myMap}
  `) 
