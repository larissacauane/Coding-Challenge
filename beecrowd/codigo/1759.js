function hohoho(number) {
  let speak = "";
  if (number < 0) {
    return "Number must be greater than zero";
  }

  for (let i = 1; i <= number; i++) {
    speak += " Ho";
  }
  return speak + "!";
}

console.log(hohoho(5));
console.log(hohoho(-3));
