let deck = [5, 9, 7, 1, 8];
function getFirstCard(deck) {
  const [first, ...other] = deck;
  return first;
}
console.log(getFirstCard(deck));

deck = [3, 2, 10, 6, 7];
function getSecondCard(deck) {
  const [, second, ...other] = deck;
  return second;
}
console.log(getSecondCard(deck));

deck = [10, 7, 3, 8, 5];
function swapTopTwoCards(deck) {
  let [first, second, ...other] = deck;
  return ([first, second, ...other] = [second, first, ...other]);
}
console.log(swapTopTwoCards(deck));

deck = [2, 5, 4, 9, 3];
function discardTopCard(deck) {
  const [first, ...other] = deck;
  return [first, other];
}
console.log(discardTopCard(deck));

deck = [5, 4, 7, 10];
const FACE_CARDS = ["jack", "queen", "king"];
function insertFaceCards(deck) {
  const [first, ...other] = deck;
  return [first, ...FACE_CARDS, ...other];
}
console.log(insertFaceCards(deck));
