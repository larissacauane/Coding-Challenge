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
  for (let i = 1; i <= order.length; i++) {
    if ( ticket == order.indexOf(order[i])) {
      return ticket;
    }
  }
  return 0;
}
console.log(winner(5));
