// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGOS
// 1. 
//      ("a. ", FALSE)
//      ("b. ", FALSE)
//      ("c. ", TRUE)
//      ("e. ", BOOLEAN)

// 2. 
//      ("a.", UNDEFINED)
//      ("b.", NULL)
//      ("c.", 11)
//      ("d.", 3)
//      ("e.", [3, 19, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
//      ("f.", 9)

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// 1.
//   a. const idade = Number(prompt("Qual a sua idade?"))
//   b. const idadeAmigo = Number(prompt("Qual a a idade do seu melhor amigo ou melhor amiga?"))
//   c. const diferenca = idade >= idadeAmigo
//      console.log("Sua idade é maior do que a do seu melhor amigo?", diferenca)
//   d. const resultado = Number(idade - idadeAmigo)
//      console.log= Number(resultado)

// 2.
//   a. let numeroPar = prompt("Por favor, insira um número par")
//   b. console.log (numeroPar%2);
//   c. Existe um padrão sim, imprime sempre 0.
//   d. Se inserir um número impar o resultado é sempre 1.


// 3.
//   a. let listaDeTarefas = [];
//   b. let perguntaUm = prompt("Diga uma tarefa que você precise realizar no seu dia")
//      let perguntaDois = prompt("Diga mais uma tarefa que você precise realizar no seu dia")
//      let perguntaTres = prompt("Diga a terceira tarefa que você precisa realizar no seu dia")
//      listaDeTarefas.push(perguntaUm)
//      listaDeTarefas.push(perguntaDois)
//      listaDeTarefas.push(perguntaTres)
//   c. console.log(listaDeTarefas)
//   d. let indice = prompt("Qual das três tarefas você já fez? Onde elas são representadas na ordem por 0,1 ou 2.")
//   e. listaDeTarefas.splice(indice)
//   f. console.log(listaDeTarefas)

// 4.
//   
//  Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:
//     O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

const nome = prompt("Qual o seu nome?")
const email = prompt("Qual o seu email?")
console.log("O email " + email + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nome + "!")