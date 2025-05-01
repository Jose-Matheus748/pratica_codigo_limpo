/**
 * Exercício 3: 
 * Refatore o algoritmo de cálculo de preço, 
 * substituindo todos os números mágicos por constantes significativas.
 */

function calcularPrecoFinal(preco, quantidade) {
  let desconto = 0;

  if (quantidade >= 10) {
    const descontoDezUnidades = 0.15;
    desconto = descontoDezUnidades;
  } else if (quantidade >= 5) {
    const descontoCincoUnidades = 0.1;
    desconto = descontoCincoUnidades;
  } else if (quantidade >= 3) {
    const descontoTresUnidades = 0.05;
    desconto = descontoTresUnidades;
  }

  const precoComDesconto = preco * (1 - desconto);

  if (precoComDesconto > 1000) {
    const descontoAcimaDeMil = 0.93
    return precoComDesconto * descontoAcimaDeMil;
  }

  return precoComDesconto;
}
