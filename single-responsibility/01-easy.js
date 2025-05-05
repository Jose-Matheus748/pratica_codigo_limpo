/**
 * Exercício 1:
 * Refatore a função abaixo em múltiplas funções, cada uma com responsabilidade única.
 */
function validarDadosUsuario(usuario) {
  if (!usuario.nome || !usuario.email) {
    return { sucesso: false, mensagem: "Nome e email são obrigatórios" };
  }
}

function formatarDadosUsuario(usuario) {
  const nomeFormatado = usuario.nome
    .trim()
    .toLowerCase()
    .split(" ")
    .map((parte) => parte.charAt(0).toUpperCase() + parte.slice(1))
    .join(" ");

  const emailFormatado = usuario.email.trim().toLowerCase();
}

function persistenciaDadosUsuario(usuario) {
  console.log(`Salvando usuário: ${nomeFormatado}, ${emailFormatado}`);

  return {
    sucesso: true,
    usuario: { nome: nomeFormatado, email: emailFormatado },
  };  
}