//Qual o seu nome?
//Quantos anos você tem?
//Qual linguagem de programação você está estudando?
//No final, o sistema vai exibir a mensagem:
//"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"
//Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:
//Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.
//E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:
//1 > Muito bom! Continue estudando e você terá muito sucesso.
//2 > Ahh que pena... Já tentou aprender outras linguagens?

const nome = prompt('Qual o seu nome?');
const idade = prompt('Quantos anos você tem?');
const linguagem = prompt('Qual linguagem de programação você está estudando?');
const mensagem = `Olá, ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;
alert(mensagem);
const gosto = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO`)
if (gosto == 1) {
    alert('Muito bom! Continue estudando e você terá muito sucesso.')
} else {
alert('Ahh que pena... Já tentou aprender outras linguagens?')
}