/* =========================== problem 1 ===========================
You will be given a function called “mindGame()” which will take a positive number as input.
Now your task: You have to multiply that number by 3, then add 10, then divide by 2, then subtract 5, and return the output.
*/
function mindGame(number) {
  // error validation start
  if (typeof number !== "number") {
    return "please enter a valid number";
  }
  // error validation end
  let multiplication = number * 3;
  let addition = multiplication + 10;
  let division = addition / 2;
  let subtraction = division - 5;
  // console.log(subtraction);
  return subtraction;
}
// let number = mindGame();
/* =========================== problem 2 ===========================
You will be given a function called “evenOdd()”. It will take a string as input.
Now you have to give the output based on the total number of characters in your task: String.
The output will be 'Even' or 'Odd'. */
function evenOdd(name) {
  // error validation start
  if (typeof name !== "string") {
    return "please enter a valid string";
  }
  // error validation end
  if (name.length % 2 === 0) {
    // console.log("even");
    return "even";
  } else {
    // console.log("odd");
    return "odd";
  }
}
// let name = evenOdd();
/* =========================== problem 3 ===========================
You will be given a function called “isLGSeven()”. It will take a number as input.
Now your task: you have to find the difference between the input value and 7. If this difference is smaller than 7, you must return the subtraction. Otherwise, you must return double the input.
This means twice the number you took as input. */
function isLGSeven(inputValue) {
  // error validation start
  if (typeof inputValue !== "number") {
    return "please enter valid numbers";
  }
  // error validation end
  let different = inputValue - 7;
  if (inputValue < 7) {
    // console.log(different);
    return different;
  } else if (inputValue >= 7) {
    inputValue = inputValue * 2;
    // console.log(inputValue);
    return inputValue;
  }
}
// isLGSeven();
// =========================== problem 4 ===========================
/* You will be given a function called “findingBadData()”. It will take an array as input. Any number of numbers will be in the array. The numbers can be negative numbers (less than zero).
It can also be a positive number (greater than or equal to zero). If any number is negative
We will call that "Bad Data". If a number is positive, we will call it "Good Data".
Now you have to find out how much bad data are there in your task: array and return that number. */
function findingBadData(numbers) {
  // error validation start
  if (Array.isArray(array) !== true) {
    return "please give me an valid array";
  }
  // error validation end
  let negatives = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      negatives.push(numbers[i]);
    }
  }
  let lengthOfNegatives = negatives.length;
  // console.log(lengthOfNegatives);
  return lengthOfNegatives;
}
// let array = [10, -20, 30, -40, 50, -60, -70, -80, 90];
// let numbers = findingBadData(array);
/* =========================== problem 5 ===========================
You will be given a function called “gemsToDiamond()”. It will take three numbers (the number of gems of your 3 friends) as input.
Power of gems per 1st friend = 21
Power of gems per 2nd friend = 32
Power of gems per 3rd friend = 43
[Gems capacity means how many diamonds a gem can be converted into. ]
Now your task: you have to figure out how many diamonds you will get in total by combining the gems of all your friends. If the number of total diamonds is over 1000, then you will get as many diamonds as are left after subtracting 2000 from the total diamond. */
function gemsToDiamond(gemsFirstFriend, gemsSecondFriend, gemsThirdFriend) {
  // error validation start
  if (
    typeof gemsFirstFriend !== "number" ||
    typeof gemsSecondFriend !== "number" ||
    typeof gemsThirdFriend !== "number"
  ) {
    return "please enter valid numbers";
  }
  // error validation end
  let firstFriend = gemsFirstFriend * 21;
  let secondFriend = gemsSecondFriend * 32;
  let thirdFriend = gemsThirdFriend * 43;
  let totalDiamond = firstFriend + secondFriend + thirdFriend;
  if (totalDiamond >= 2000) {
    totalDiamond = totalDiamond - 2000;
  }
  // console.log(totalDiamond);
  return totalDiamond;
}
// gemsToDiamond();
