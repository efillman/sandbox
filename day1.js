//tests
// Write a function that takes a number as its argument and returns a string that represents that number's simplified fraction.
// Example: toFraction(0.5) === '1/2'
// Whole numbers and mixed fractions should be returned as irregular fractions
// Example: toFraction(3.0) === '3/1'
// Example: toFraction(2.5) === '5/2'

function toFraction(number) {
  // pseudo code
  //Step 1: Rewrite the decimal number as a fraction with 1 in the denominator
  let top = number;
  let bottom = 1;

  //Step 2: Multiply to remove x(1) decimal places. Here, you multiply top and bottom by 103 = 1000
	let decimalsNeeded = findDecimalPlaces(top);
  top = top * Math.pow(10, decimalsNeeded);
  bottom = bottom * Math.pow(10, decimalsNeeded);

  //Step 3: find greatest common factor (new function?)
  let GCF = findGreatestCommonFactor(top, bottom);

  //Step 4: divide numerator and demomintor with divisor
  top = top / GCF;
  bottom = bottom / GCF;

  //Step 5: output string of simplified fraction
  return `${top}/${bottom}`;

};
//.5, .55, 302.254
//return number of decimals in input variable
function findDecimalPlaces(x) {
	let num = x.toString().split(".")
	return num[1].length;
}

function findGreatestCommonFactor(top, bottom) {
  if (bottom < 0.0000001) {
    return top;
  } else {
    return findGreatestCommonFactor(bottom, Math.floor(top % bottom));
  }
}

//console.log(findDecimalPlaces(2.55));
console.log(toFraction(2.5));