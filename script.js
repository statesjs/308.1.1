// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;

/*Check if all numbers are divisible by 5. Cache the result in a variable.

const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

*/

let checkN1 = n1 % 5 == 0;
let checkN2 = n2 % 5 == 0;
let checkN3 = n3 % 5 == 0;
let checkN4 = n4 % 5 == 0;

console.log(`n1's result for being divisible by 5 is ${checkN1}`);
console.log(`n2's result for being divisible by 5 is ${checkN2}`);
console.log(`n3's result for being divisible by 5 is ${checkN3}`);
console.log(`n4's result for being divisible by 5 is ${checkN4}`);

//Check if the first number is larger than the last. Cache the result in a variable.

let n1IsLarger = n1 > n4;

console.log(n1IsLarger);
console.log(`n1 being larger than n4 is ${n1IsLarger}`);

/*
Accomplish the following arithmetic chain:
Subtract the first number from the second number.
Multiply the result by the third number.
Find the remainder of dividing the result by the fourth number.
*/

let step1 = n2 - n1;
let step2 = step1 * n3;
let step3 = step2 % n4;
console.log(`The resulting number from subtracting n1(${n1}) from n2(${n2}) equals ${step1}. 
    The result (${step1}) multiplied by the third number (${n3}$) equals {step2}.
    The remainder of dividing that result (${step2}) by the fourth number (${n3}) equals ${step3}.`);

/*
Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) 
in other logic comparisons. Rename the variable as appropriate.
*/

const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;

//Part 2: Practical Math
/*
The distance of the trip, in total, is 1,500 miles.
Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.
You have a fuel budget of $175.
The average cost of fuel is $3 per gallon.


Set up a program to answer the following questions:
How many gallons of fuel will you need for the entire trip?
Will your budget be enough to cover the fuel expense?
How long will the trip take, in hours?
Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
Log the results of your calculations using string concatenation or template literals.
*/

//setting mph
const mph55 = 55;
const mph60 = 60;
const mph75 = 75;

//mpg per mph
const mpg55 = 30;
const mpg60 = 28;
const mpg75 = 23;

//static values
const fuelBudget = 175;
const fuelCost = 3;
const tripDistance = 1500;

//breakdown at 55mph
const at55Gallons = tripDistance / mpg55;
const at55Budget = at55Gallons * fuelCost;
const at55Remainder = fuelBudget - at55Budget;
const at55Time = tripDistance / mph55;
console.log(`At ${mph55} mph you get ${mpg55} mpg. The gallons required are ${at55Gallons} deduced by dividing the trip distance of ${tripDistance}
     by the mpg of ${mpg55}. The total budget is ${fuelBudget} while the real cost of the trip is ${at55Budget} leaving a remainder of ${at55Remainder}.
     The trip will take ${at55Time} hours, deduced by dividing the trip distance of ${tripDistance} by the mph of ${mph55}.`);

//breakdown at 60mph
const at60Gallons = tripDistance / mpg60;
const at60Budget = at60Gallons * fuelCost;
const at60Remainder = fuelBudget - at60Budget;
const at60Time = tripDistance / mph60;
console.log(`At ${mph60} mph you get ${mpg60} mpg. The gallons required are ${at60Gallons} deduced by dividing the trip distance of ${tripDistance}
     by the mpg of ${mpg60}. The total budget is ${fuelBudget} while the real cost of the trip is ${at60Budget} leaving a remainder of ${at60Remainder}.
     The trip will take ${at60Time} hours, deduced by dividing the trip distance of ${tripDistance} by the mph of ${mph60}.`);

//breakdown at 75mph
const at75Gallons = tripDistance / mpg75;
const at75Budget = at75Gallons * fuelCost;
const at75Remainder = fuelBudget - at75Budget;
const at75Time = tripDistance / mph55;
console.log(`At ${mph75} mph you get ${mpg75} mpg. The gallons required are ${at75Gallons} deduced by dividing the trip distance of ${tripDistance}
     by the mpg of ${mpg75}. The total budget is ${fuelBudget} while the real cost of the trip is ${at75Budget} leaving a remainder of ${at75Remainder}.
     The trip will take ${at75Time} hours, deduced by dividing the trip distance of ${tripDistance} by the mph of ${mph75}.`);

//final conclusion
console.log(`I think the best option is to go at ${mph60}mph, even though it will cost ${
  at55Remainder - at60Remainder
} dollars more, you will save
         ${
           at55Time - at60Time
         } hours, and honestly our time is worth more than ${
  (at55Remainder - at60Remainder) / (at55Time - at60Time)
} an hour.`);
