 /////////////////////////////        LISTA DE EXERCÍCIOS          /////////////////////////////////////////////////

  

// ----------------------           EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO 
  
/* 
--------------------- --------------------- QUESTÃO 1)  

O código está convertendo um valor X, de dólar para real. A função pede através de um prompt que o usuário 
informe o valor da cotação do dólar e esse valor é armazenado numa constante chamada ‘cotacao’. O parâmetro 
da função (valorEmDolar) representa o valor a ser inserido para conversão. A função retorna o resultado da 
conversão do dólar para real (resultado da multiplicação dos valores de ‘valorEmDolar’ por ‘cotacao’). 
Então é criada uma nova constante que armazena o valor retornado pela função. No console o valor impresso 
será o valor retornado pela função. 

--------------------- --------------------- QUESTÃO 2)  

A função está calculando quanto de lucro retornaria um investimento de determinado valor a depender do tipo 
de investimento escolhido. Primeiro pede que seja inserido o tipo de investimento e o valor a ser investido. 
O valor que a função retorna é condicionado ao tipo de investimento escolhido, pois cada uma pega o valor 
de investimento inserido e multiplica pela taxa de rendimento.  Se o usuário não informar nenhum dos tipos 
de investimentos listados no switch, ele retorna um default de que o “tipo do investimento” informado é 
incorreto. Após essa etapa de condicionais, foram criadas duas constantes para armazenar o resultado de dois 
tipos de investimento. O primeiro chamado ‘novoMontante’ e segundo chamado ‘segundoMontante’ .  
Cada constante recebe a função com os valores dos parâmetros definidos.  
Então é feito o console.log que retorna os valores de cada uma.  

Seria impresso: 

‘165’ 

‘Tipo de investimento informado incorreto!’ 


--------------------- --------------------- QUESTÃO 3)  

Temos três arrays, sendo que apenas um deles tem valores. 

Em seguida temos um laço que pega os números do primeiro array, e para cada número ele tem uma condição. 
Se o número retornar 0 como resto da divisão por 2 (o que indicaria ser um número par), esse número seria armazenado na array1 através do push. Caso contrário, como o número seria ímpar, ele seria armazenado na array2. 

O console.log imprimiria: 

“Quantidade total de números 14” 

“6” 

“8”

*/ 
// --------------------- --------------------- QUESTÃO 4) 


// ---------------      EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO 


// --------------------- --------------------- QUESTÃO 1)
/*
Podemos percorrer arrays utilizando o “while”, o “for” e o “for...of”. 

Const arraydeExemplo = [2, 7, 14, 15, 22, 38] 

For( let numeros of arrayDeExemplo) { 

Console.log(numeros) 

} 

--------------------- --------------------- QUESTÃO 2) 

-----   a) false 

-----   b) false 

-----   c) true 

-----   d) true 

-----   e) true 

--------------------- --------------------- QUESTÃO 3) 

//???
*/
// --------------------- --------------------- QUESTÃO 4) 

function ladosDoTriangulo(a, b, c) {
    if(a === b, b === c){ 
        console.log('O triângulo é equilátero')
    } else if (a != b && b != c && c != a ){
        console.log('O triângulo é escaleno')
    } else {
         console.log('O triângulo é isósceles')
    }
}

ladosDoTriangulo(10, 10, 10)

//--------------------- --------------------- QUESTÃO 5) 

function dadosDoisNumeros(numero1,numero2){
    if(numero1 > numero2){
        console.log('O maior é:', numero1)
    } if(numero1 < numero2){
        console.log('O maior é:', numero2)
    } if(numero1 % numero2 > 0){
        console.log(numero1 + ' não é divisível por ' + numero2)
    } if(numero2 % numero1 === 0){
        console.log(numero2 + ' é divisível por ' + numero1)
    } else(numero2 - numero1 > 0)
        const diferencaNumeros = numero2 - numero1
        console.log('A diferença entre eles é '+ diferencaNumeros)   
}

dadosDoisNumeros(10,50)


// -------------         EXERCÍCIOS DE FUNÇÕES


//--------------------- --------------------- QUESTÃO 1)
// function segundoNumero(umArray){
//     const umArrayDeNumeros = [4, 9, 12, 15, 18, 20, 27, 32, 43, 53]
    
//     for(let numero of umArray) {
//         if(numero)
//     }
// }

//--------------------- --------------------- QUESTÃO 2)


const umAlerta = function() {
    console.log(alert('Hello Future4'));
}

umAlerta()

// -------------         EXERCÍCIOS DE OBJETOS


//--------------------- --------------------- QUESTÃO 1)
/* 

Arrays são uma forma de armazenar vários itens, em formato de lista. Podemos utilizar
arrays quando for necessário armazenar vários objetos na mesma variável.
Já os objetos são uma forma de armazenar detalhes maiores de cada variável, de forma organizada. 

*/ 

//--------------------- --------------------- QUESTÃO 2)

function criaRetangulo(lado1,lado2){
    const objeto = {
        largura: lado1,
        altura: lado2,
        perimetro: (2 *(lado1 + lado2)),
        area: (lado1 * lado2)
    }
    return objeto
}

console.log(criaRetangulo(5,6))

//--------------------- --------------------- QUESTÃO 3)

const filmeFavorito = {
    titulo: 'Vingadores: Ultimato',
    ano: 2019,
    diretor: 'Russo Brothers', 
    atores: ['Brie Larson','Chris Evans','Robert Downey Jr.','Scarlett Johansson'] 
}

console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores[1]}, ${filmeFavorito.atores[0]}, ${filmeFavorito.atores[2]} e ${filmeFavorito.atores[3]}.`)

//--------------------- --------------------- QUESTÃO 4)

const umaPessoa = {
    nome: 'Leticia',
    idade: 28,
    email: 'leticia@email.com',
    endereco: 'Rua C, n 7, Feira de Santana, Bahia'
}

function anonimizarPessoa(){
    const pessoaAnonima = {
        ...umaPessoa,
        nome: 'ANÔNIMO'
    }
    return pessoaAnonima
}

console.log(anonimizarPessoa())


// -------------         EXERCÍCIOS DE FUNÇÕES DE ARRAY


//--------------------- --------------------- QUESTÃO 1)

   const oArray =
    [
    	{ nome: "Pedro", idade: 20 },
    	{ nome: "João", idade: 10 },
    	{ nome: "Paula", idade: 12 },
    	{ nome: "Artur", idade: 89 } 
    ]
//     a) 

const callback1 = (elementoOArray, index, array) => {
    if (elementoOArray.idade >= 20) {
        return true 
    }
    return false
}

const apenasAdultos = oArray.filter(callback1)

console.log(apenasAdultos)

//     b)

const callback2 = (elementoOArray, index, array) => {
    if (elementoOArray.idade < 20) {
        return true 
    }
    return false
}

const apenasCriancas = oArray.filter(callback2)

console.log(apenasCriancas)


//--------------------- --------------------- QUESTÃO 2)

   // a)

    const array = [1, 2, 3, 4, 5, 6]

    const arrayVezesDois = array.map((elemento, index, array) => {
    return elemento * 2
})
    console.log(arrayVezesDois)


//    b) 
        const arrayVezesTres = array.map((elemento, index, array) => {
        return elemento * 3
    })
     console.log(arrayVezesTres)


//    c)
    const arrayDeStrings = array.map((elemento, index, array) => {
        if(elemento % 2 === 0){
            return `${elemento} é par`
        }else {
            return `${elemento} é impar`
        }
})
    console.log(arrayDeStrings)

 //--------------------- --------------------- QUESTÃO 3)
    const pessoas = [
        { nome: "Paula", idade: 12, altura: 1.8},
        { nome: "João", idade: 20, altura: 1.3},
        { nome: "Pedro", idade: 15, altura: 1.9},
        { nome: "Luciano", idade: 22, altura: 1.8},
        { nome: "Artur", idade: 10, altura: 1.2},
        { nome: "Soter", idade: 70, altura: 1.9}
    ]

   // a) 
   const callback3 = (pessoas, index, array) => {
    if (pessoas.idade > 14 && pessoas.idade < 60 === pessoas.altura > 1.5) {
        return true 
    }
    return false
}

    const temPermissao = pessoas.filter(callback3)

    console.log(temPermissao)

    //b)

   const callback4 = (pessoas, index, array) => {
    if (pessoas.idade > 14 && pessoas.idade < 60 === pessoas.altura > 1.5) {
        return false
    }
    return true
}

    const semPermissao = pessoas.filter(callback4)

    console.log(semPermissao)


 //--------------------- --------------------- QUESTÃO 4)

    // const consultas = [
    // 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
    // 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
    // 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
    // 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
    // ]

     
    //     if (consulta.cancelada === false) {
    //         console.log(`Olá, ${} ${consulta.nome}. Estamos enviando esta mensagem para lembrá-la da sua consulta no dia ${consulta.dataDaConsulta }. Por favor, acuse o recebimento deste e-mail.`)
    //     } else (consulta.genero === 'feminino' && consulta.cancelada === true){
    //         console.log(`Olá, ${Sr./Sra.} ${consulta.nome}. Infelizmente, sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`)
    //     } 


     //--------------------- --------------------- QUESTÃO 5)

//  5. Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa, 
// você precisa entender como eles guardam as contas dos clientes. Basicamente, eles salvam o nome do clientes, 
// o saldo total e uma lista contendo todas as compras realizadas pelo cliente. Veja abaixo:

    
    const contas = [
    	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
    ]
    

    // contas.map((elemento, index, array) => {
    //         .saldoTotal = 400
    //      })

    // console.log(contas)


    // function atualizarSaldo(){
    //     const  = {
    //         ...contas,
    //         saldoTotal: 
    //     }
    //     return 
    // }
    
    // console.log(atualizarSaldo())


