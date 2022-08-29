function calcDistance(people, distance) {
  if (people > 100 || people < 1 || distance > 1000 || distance < 1) {
    return `Sorry! The number of people and the distance has to be between 1 and 100`;
  }

  return (distance / (people + 2)).toFixed(2);
}

console.log(calcDistance(5, 7));
console.log(calcDistance(13, 1000));

console.log(calcDistance(-7, 1000));
console.log(calcDistance(13, 0));
