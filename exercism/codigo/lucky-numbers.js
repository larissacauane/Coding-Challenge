function twoSum(array1, array2) {
  let arrayString1 = array1.join("");
  let arrayString2 = array2.join("");
  return Number(arrayString1) + Number(arrayString2);
}

function luckyNumber(value) {
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

function errorMessage(input) {
  if (input == undefined || input == null || input == "") {
    return "Required field";
  } else if (!Number(input) || input === 0) {
    return "Must be a number besides 0";
  } else {
    return "";
  }
}
