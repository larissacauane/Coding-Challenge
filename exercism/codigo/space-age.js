const planetOrbitalPeriod = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 31557600,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

function age(planet, ageInSeconds) {
  let ageInYears;
  for (let key in planetOrbitalPeriod) {
    if (planet === "earth") {
      ageInYears = ageInSeconds / planetOrbitalPeriod.earth;
    } else {
      ageInYears =
        ageInSeconds / planetOrbitalPeriod.earth / planetOrbitalPeriod[planet];
    }
  }
  return ageInYears.toFixed(2);
}

console.log(age("earth", 1000000000));
console.log(age("mercury", 2134835688));
console.log(age("venus", 189839836));
console.log(age("mars", 2129871239));
console.log(age("jupiter", 901876382));
console.log(age("saturn", 2000000000));
console.log(age("uranus", 1210123456));
console.log(age("neptune", 1821023456));

// ============================================

// Outra solução utilizando o switch

// function age(planet, ageInSeconds) {
// let age = 0;
//   switch (planet) {
//     case "mercury":
//       age =
//         ageInSeconds / planetOrbitalPeriod.earth / planetOrbitalPeriod.mercury;
//       break;
//     case "venus":
//       age =
//         ageInSeconds / planetOrbitalPeriod.earth / planetOrbitalPeriod.venus;
//       break;
//     case "earth":
//       age = ageInSeconds / planetOrbitalPeriod.earth;
//       break;
//     case "mars":
//       age = ageInSeconds / planetOrbitalPeriod.earth / planetOrbitalPeriod.mars;
//       break;
//     case "jupiter":
//       age =
//         ageInSeconds / planetOrbitalPeriod.earth / planetOrbitalPeriod.jupiter;
//       break;
//     case "saturn":
//       age =
//         ageInSeconds / planetOrbitalPeriod.earth / planetOrbitalPeriod.saturn;
//       break;
//     case "uranus":
//       age =
//         ageInSeconds / planetOrbitalPeriod.earth / planetOrbitalPeriod.uranus;
//       break;
//     case "neptune":
//       age =
//         ageInSeconds / planetOrbitalPeriod.earth / planetOrbitalPeriod.neptune;
//   }

//   return  age.toFixed(2);
// }

// console.log(age("earth", 1000000000));
// console.log(age('mercury', 2134835688));
