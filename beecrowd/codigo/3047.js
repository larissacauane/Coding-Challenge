function findOldSon(son1, son2, son3) {
  if (son1 > son2 && son1 > son3) {
    return son1;
  } else if (son2 > son1 && son2 > son3) {
    return son2;
  } else {
    return son3;
  }
}

function oldSonAge(mom, son1, son2) {
  const oldSon = mom - son1 - son2;

  if (
    mom >= 40 &&
    mom <= 110 &&
    son1 >= 1 &&
    son1 < mom &&
    son2 >= 1 &&
    son2 < mom &&
    son1 !== son2
  ) {
    return findOldSon(oldSon, son1, son2);
  } else {
    return "Invalid age";
  }
}

console.log(oldSonAge(52, 14, 18));
console.log(oldSonAge(47, 21, 9));
