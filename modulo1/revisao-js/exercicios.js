// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   const tamanhoArray = array.length

   return tamanhoArray
}

console.log('Exercício 1:', retornaTamanhoArray([3, 2, 1, 4, 7]))

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  const arrayInvertido = array.reverse()

  return arrayInvertido
}

console.log('Exercício 2:', retornaArrayInvertido([8, 23, 16, 10]))


// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  let arrayOrdenado = array.sort((a, b) => a - b);

  return arrayOrdenado
}

console.log('Exercício 3:', retornaArrayOrdenado([36,12,56,7,3]))



// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let numerosPares = array.filter((item) => item % 2 === 0).map((item) => {
    return item
  })

  return numerosPares;
}

console.log('Exercício 4:', retornaNumerosPares([1, 2, 3, 4, 5, 6]))

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}