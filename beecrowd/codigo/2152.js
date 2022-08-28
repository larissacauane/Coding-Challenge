function door(hours, minutes, occurrence) {
  let digitsH = hours.toString().length;
  let digitsM = minutes.toString().length;
  if (occurrence === 1) {
    return `${digitsH == 1 ? "0" + hours : hours}:${
      digitsM == 1 ? "0" + minutes : minutes
    } - A porta abriu!`;
  } else {
    return `${digitsH == 1 ? "0" + hours : hours}:${
      digitsM == 1 ? "0" + minutes : minutes
    } - A porta fechou!`;
  }
}

console.log(door(15, 30, 1));
console.log(door(23, 50, 0));
console.log(door(0, 5, 1));
