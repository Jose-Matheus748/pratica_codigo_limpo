/**
 * Exercício 1: 
 * Refatore o código abaixo substituindo os números mágicos por constantes com nomes significativos.
 */

function calcularDesconto(valor) {
  const metade = 0.05
  const umPorcento = 0.01
  if (valor > 100) {
    return valor * umPorcento;
  }
  return valor * metade;
}
