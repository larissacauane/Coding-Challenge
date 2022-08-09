function createVisitor(name, age, ticketId) {
  return { name: name, age: age, ticketId: ticketId };
}

function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

function ticketStatus(tickets, ticketId) {
  if (tickets[ticketId] === undefined) {
    return "unknown ticket id";
  } else if (tickets[ticketId] === null) {
    return "not sold";
  } else {
    return `sold to ${tickets[ticketId]}`;
  }
}

function simpleTicketStatus(tickets, ticketId) {
  if (tickets[ticketId] === undefined || tickets[ticketId] === null) {
    return "invalid ticket !!!";
  } else {
    return tickets[ticketId];
  }
}

function gtcVersion(visitor) {
  return visitor.gtc?.version;
}
