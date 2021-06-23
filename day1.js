
// Write a function that takes a number as its argument and returns a string that represents that number's simplified fraction.
// Example: toFraction(0.5) === '1/2'
// Whole numbers and mixed fractions should be returned as irregular fractions
function toFraction(number) {

	//Step 1: Rewrite the decimal number as a fraction with 1 in the denominator
	//initialize variables
	let top = number;
  let bottom = 1;
	let isTopNegative = false;

	//check if number is negative
	if (number < 0) {
		isTopNegative = true;
		top = Math.abs(number);
	}

	//Step 2: Multiply to remove x(1) decimal places. Here, you multiply top and bottom by 103 = 1000
	//detrmine amount of decimals needed
	let decimalsNeeded = findDecimalPlaces(top);
  top = top * Math.pow(10, decimalsNeeded);
  bottom = bottom * Math.pow(10, decimalsNeeded);

  //Step 3: find greatest common factor (new function?)
  let GCF = findGreatestCommonFactor(top, bottom);

  //Step 4: divide numerator and demomintor with divisor
  top = top / GCF;
  bottom = bottom / GCF;

  //Step 5: output string of simplified fraction, check if it was negative
	if (isTopNegative) {
		return "-"+top+"/"+bottom+"";
	}
  return ""+top+"/"+bottom+"";

};

//return number of decimals in input variable
function findDecimalPlaces(x) {
	let num = x.toString().split(".")
	//if number passed was .0 javascript dropped the .0 so add 1 decimal place
	if (num[1] === undefined) {
		return 1;
	}
	return num[1].length;
}

/**
 *
 * @param {*} top
 * @param {*} bottom
 * @returns
 */
function findGreatestCommonFactor(top, bottom) {
  if (bottom < 0.0000001) {
    return top;
  } else {
    return findGreatestCommonFactor(bottom, Math.floor(top % bottom));
  }
}

//tests
console.log(toFraction(3.0));
console.log(toFraction(-2.5));
console.log(toFraction(5.7));