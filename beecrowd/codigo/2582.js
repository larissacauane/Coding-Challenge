const songs = {
  0: "PROXYCITY",
  1: "P.Y.N.G.",
  2: "DNSUEY!",
  3: "SERVERS",
  4: "HOST!",
  5: "CRIPTONIZE",
  6: "OFFLINE DAY",
  7: "SALT",
  8: "ANSWER!",
  9: "RAR?",
  10: " WIFI ANTENNAS",
};

function playSong(num1, num2) {
  return songs[num1 + num2];
}

console.log(playSong(3, 4));
console.log(playSong(0, 0));
console.log(playSong(1, 0));
