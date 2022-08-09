function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
      break;

    case "Energizer":
      return 1.5;
      break;
    case "Green Garden":
      return 1.5;
      break;

    case "Tropical Island":
      return 3;
      break;

    case "All or Nothing":
      return 5;
      break;

    default:
      return 2.5;
      break;
  }
}

function limesToCut(wedgesNeeded, limes) {
  let i = 0;
  let wedgesCut = 0;
  while (wedgesCut < wedgesNeeded && i < limes.length) {
    wedgesCut += numOfWedges(limes[i]);
    i++;
  }
  return i;

  function numOfWedges(lime) {
    if (lime === "small") {
      return 6;
    } else if (lime === "medium") {
      return 8;
    } else {
      return 10;
    }
  }
}

function remainingOrders(timeLeft, orders) {
  let count = 0;
  while (count < orders.length && timeLeft > 0) {
    timeLeft -= timeForMakeJuice(orders[count]);
    count++;
  }
  return orders.slice(count);

  function timeForMakeJuice(juice) {
    if (juice === "Pure Strawberry Joy") {
      return 0.5;
    } else if (juice === "Energizer" || juice === "Green Garden") {
      return 1.5;
    } else if (juice === "Tropical Island") {
      return 3;
    } else if (juice === "All or Nothing") {
      return 5;
    } else {
      return 2.5;
    }
  }
}
