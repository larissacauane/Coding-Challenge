// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
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

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */

export function limesToCut(wedgesNeeded, limes) {
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

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
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
