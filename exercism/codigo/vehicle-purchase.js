function needsLicense(kind) {
  return kind === "car" || kind === "truck";
}

function chooseVehicle(option1, option2) {
  if (option1 < option2) {
    return `${option1} is clearly the better choice.`;
  } else {
    return `${option2} is clearly the better choice.`;
  }
}

let newPrice;
function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    newPrice = originalPrice * 0.8;
    return newPrice;
  } else if (age >= 3 && age <= 10) {
    newPrice = originalPrice * 0.7;
    return newPrice;
  } else {
    newPrice = originalPrice * 0.5;
    return newPrice;
  }
}
