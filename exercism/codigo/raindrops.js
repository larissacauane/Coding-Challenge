function convert(number) {
  const pling = number % 3 === 0 ? "Pling" : "";
  const plang = number % 5 === 0 ? "Plang" : "";
  const plong = number % 7 === 0 ? "Plong" : "";
  if (number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0) {
    return String(number);
  }
  
  return pling + plang + plong;
}

console.log(convert(28));
console.log(convert(30));
console.log(convert(34));
