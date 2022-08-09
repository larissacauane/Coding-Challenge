 function frontDoorResponse(line) {
  return line[0];
}

 function frontDoorPassword(word) {
  let lower = word.toLowerCase();
  let letter = word.charAt(0);
  let first = letter;
  let upper = first.toUpperCase();
  let remain = lower.slice(1);
  return upper + remain;
}

 function backDoorResponse(line) {
  let newLine = line.trim();
  let lastLetter = newLine.slice(-1);
  return lastLetter;
}

 function backDoorPassword(word) {
  let wordCapitalized = frontDoorPassword(word);
  return wordCapitalized + ", please";
}
