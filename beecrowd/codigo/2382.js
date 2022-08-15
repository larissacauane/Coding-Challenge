function calcEnvio(largura, altura, profundidade, raio) {
  let dimensoes = largura * largura + altura * altura + profundidade * profundidade;

  if (Math.sqrt(dimensoes) <= 2 * raio) {
    return "S";
  } else {
    return "N";
  }
}

console.log(calcEnvio(10, 20, 30, 30));
console.log(calcEnvio(10, 10, 10, 7));
console.log(calcEnvio(2, 4, 4, 3));

