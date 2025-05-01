/**
 * Exercício 4:
 * Melhore a função de formatação de tempo eliminando os números mágicos.
 */

function formatarTempo(segundos) {
  const segundosDaHora = 3600;
  const segundosDoMinuto = 60;
  const horas = Math.floor(segundos / segundosDaHora);
  const minutos = Math.floor((segundos % segundosDaHora) / segundosDoMinuto);
  const segundosRestantes = segundos % segundosDoMinuto;

  const quantidadeDeCasas = 2;
  return `${horas.toString().padStart(quantidadeDeCasas, "0")}:${minutos
    .toString()
    .padStart(quantidadeDeCasas, "0")}:${segundosRestantes.toString().padStart(quantidadeDeCasas, "0")}`;
}