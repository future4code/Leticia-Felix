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
  let numerosParesElevados = array.filter((item) => item % 2 === 0).map((item) => {
    return item * item
  })

  return numerosParesElevados;
}

console.log('Exercício 5:', retornaNumerosParesElevadosADois([1, 2, 3, 4, 5, 6]))

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  const maiorNumero = Math.max(...array)

  return maiorNumero
}

console.log('Exercício 6:', retornaMaiorNumero([1, 5, 3, 7, 5, 2]))

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
  const nomeDoFilme = filme.nome;
  const anoDoFilme = filme.ano;
  const diretorDoFilme = filme.diretor;
  const atoresDoFilme = filme.atores.join(', ');
  
   return `Venha assistir ao filme ${nomeDoFilme}, de ${anoDoFilme}, dirigido por ${diretorDoFilme} e estrelado por ${atoresDoFilme}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const pessoaAnonima = {
     ...pessoa,
     nome: "ANÔNIMO",
   }

   return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let pessoasAutorizadas = pessoas.filter((item) => (item.idade > 14 && item.idade < 60) && item.altura >= 1.5).map((item) => {
    return item
  })

  return pessoasAutorizadas;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasNaoAutorizadas = pessoas.filter((item) => item.idade <= 14 || item.idade >= 60 || item.altura <= 1.5).map((item) => {
    return item
  })

  return pessoasNaoAutorizadas;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  const arrayOrdenado = consultas.sort(function(x, y) {

    let a = x.nome,
        b = y.nome;
    return a == b ? 0 : a > b ? 1 : -1;
  })
  
   return arrayOrdenado
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}