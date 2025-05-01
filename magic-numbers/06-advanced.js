/**
 * Exercício 6:
 * Refatore este algoritmo de verificação de senha,
 * removendo todos os números mágicos e usando constantes significativas.
 */

function validarSenha(senha) {
  const limiteSenhaCurta = 8;
  if (senha.length < limiteSenhaCurta) {
    return {
      valida: false,
      mensagem: "Senha muito curta",
    };
  }

  let pontuacao = 0;
  
  const maiorPontuacaoSenha = 12;
  const menorPontuacaoSenha = 10;
  const menorAumentoPontuacao = 1;
  const medioAumentoPontuacao = 2;
  const maiorAumentoPontuacao = 3;
  if (senha.length >= maiorPontuacaoSenha) {
    pontuacao += medioAumentoPontuacao;
  } else if (senha.length >= menorPontuacaoSenha) {
    pontuacao += menorAumentoPontuacao;
  }

  if (/[A-Z]/.test(senha)) {
    pontuacao += medioAumentoPontuacao;
  }
  if (/[a-z]/.test(senha)) {
    pontuacao += medioAumentoPontuacao;
  }
  if (/[0-9]/.test(senha)) {
    pontuacao += medioAumentoPontuacao;
  }
  if (/[^A-Za-z0-9]/.test(senha)) {
    pontuacao += maiorAumentoPontuacao;
  }

  const pontuacaoFraca = 5;
  const pontuacaoMedia = 8;
  if (pontuacao < pontuacaoFraca) {
    return { valida: false, mensagem: "Senha fraca" };
  }
  if (pontuacao < pontuacaoMedia) {
    return { valida: true, mensagem: "Senha média" };
  }

  return {
    valida: true,
    mensagem: "Senha forte",
  };
}
