function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
  	console.log(previous);
    console.log(current);
    return previous + current;
}

console.log(sum(1, 2, 3));

console.log(sum(1, 2, 3, 4));
