function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`;
}

function buildBirthdaySign(age) {
  return `Happy Birthday! What a ${
    age >= 50 ? "mature" : "young"
  } fellow you are.`;
}

function buildSign(year, name) {
  return `Congratulations ${name}!
Class of ${year}`;
}

function costOf(sign, currency) {
  return `Your sign costs ${(sign.length * 2 + 20).toFixed(2)} ${currency}.`;
}
