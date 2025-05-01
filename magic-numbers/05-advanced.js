/**
 * Exercício 5:
 * Refatore esta função de validação de cartão de crédito, eliminando todos os números mágicos.
 */

function validarCartaoCredito(numero) {
  const maiorComparacaoTamanho = 16;
  const medioComparacaoTamanho = 15;
  const menorComparacaoTamanho = 13;
  if (numero.length !== maiorComparacaoTamanho && numero.length !== medioComparacaoTamanho && numero.length !== menorComparacaoTamanho) {
    return false;
  }

  if (
    numero.startsWith("4") &&
    (numero.length === maiorComparacaoTamanho || numero.length === menorComparacaoTamanho)
  ) {
    return "Visa";
  } else if (numero.startsWith("5") && numero.length === maiorComparacaoTamanho) {

    const baseTamanho = 1;
    const limiteTamanho = 5;
    const segundoDigito = parseInt(numero.charAt(1));
    if (segundoDigito >= baseTamanho && segundoDigito <= limiteTamanho) {
      return "MasterCard";
    }
  } else if (
    (numero.startsWith("34") || numero.startsWith("37")) &&
    numero.length === medioComparacaoTamanho
  ) {
    return "American Express";
  }

  return false;
}
