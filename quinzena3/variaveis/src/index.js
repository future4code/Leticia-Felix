// ATIVIDADE
//**Exercícios de interpretação de código**
// 1.O que será impresso no console:
//   10

// 2. .O que será impresso no console:
//   10 10 10

//Exercícios de escrita de código
//1.

const nome = " "
let idade = ""

console.log(typeof(nome, idade))

//Foi impresso UNDEFINED por não ter sido atribuído um valor para a variável.

const nome = prompt("Qual o seu nome?")
console.log(nome)
let idade = prompt("Qual sua idade?")
console.log(idade)

// Foi impresso STRING, e notei que mesmo o valor da idade sendo um número ele também foi impresso como string.

console.log("Olá", nome ,"você tem", idade ,"anos")

// 2.

let musica = prompt("Qual a sua música preferida?")
console.log(musica)
let livro = prompt("Qual o seu livro favorito?")
console.log(livro)
let filme = prompt("Qual o seu filme favorito?")
console.log(filme)
let serie = prompt("Qual a sua série favorita?")
console.log(serie)
let favorito = prompt("Você prefere séries ou filmes?")
console.log(nome)

// 3. 

let comidasFavoritas = ["pizza", "ceviche", "bolo", "quesadillas", "hamburguer"]
console.log(comidasFavoritas)

console.log("Essas são as minhas comidas preferidas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

// 4.

let pergunta = ["Você gosta de ver filmes?", "Você não gosta de ver séries?", "Você gosta de ler?"]
let resposta = ["Sim", "Não"]

console.log(pergunta[0], resposta[0])
console.log(pergunta[1], resposta[1])
console.log(pergunta[2], resposta[0])


