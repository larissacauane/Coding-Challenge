const numTest = prompt("The number of partygoers: ");
let order = [];

function orderEntry() {
  for (let i = 1; i <= numTest; i++) {
    let entryOrder = prompt("Partygoears order entry: ");
    if (entryOrder == 0) {
      break;
    }
    order.push(entryOrder);
  }
}
orderEntry();

function winner(ticket) {
  const winnerTicket = order.find((elem) => elem == ticket);
  return winnerTicket;
}
console.log(winner(10));
