// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let arrayString1 = array1.join("");
  let arrayString2 = array2.join("");
  return Number(arrayString1) + Number(arrayString2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let luckyNum = String(value);
  let luckyNumArray = luckyNum.split("");
  let luckyNumReverse = luckyNumArray.reverse();
  let luckyNumJoin = luckyNumReverse.join("");
  if (luckyNumJoin == value) {
    return true;
  } else {
    return false;
  }
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input == undefined || input == null || input == "") {
    return "Required field";
  } else if (!Number(input) || input === 0) {
    return "Must be a number besides 0";
  } else {
    return "";
  }
}
