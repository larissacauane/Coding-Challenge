function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let daysWithoutDiscount = numDays % 22;
  let totalDaysWithoutDiscount = dayRate(ratePerHour) * daysWithoutDiscount;
  let daysWithDiscountRate =
    dayRate(ratePerHour) * (numDays - daysWithoutDiscount);
  let totalDaysWithDiscount =
    daysWithDiscountRate - daysWithDiscountRate * discount;
  return Math.ceil(totalDaysWithDiscount + totalDaysWithoutDiscount);
}
