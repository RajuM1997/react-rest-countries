function add(num1, num2) {
  return num1 + num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}

// raduce
const numbs = [34, 56, 78, 92];
let sum = 0;
for (const num of numbs) {
  sum = sum + num;
}
const reducer = (preious, current) => preious + current;
numbs.reduce(reducer, 0);

export { add, multiply };
