console.log ("logical AND operator")
console.log ('false && false -->', false && false);
console.log ('false && true -->', false && true);
console.log ('true && false -->', true && false);
console.log ('true && true -->', true && true);

console.log ("logical OR operator")
console.log ('false || false -->', false || false);
console.log ('false || true -->', false || true);
console.log ('true || false -->', true || false);
console.log ('true || true -->', true || true);

console.log ("logical NOT operator")
console.log ('!false -->', !false);
console.log ('!true -->', !true);
console.log ('!!true -->',!!true);

console.log ('exclusive or operator')
let a = false
let b = false
console.log ('a xor b -->', a!=b)

let xor = (a,b) => (a!=b);
console.log ('a xor b -->', xor(a,b))
