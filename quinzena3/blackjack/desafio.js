// MENSAGEM INICIAL
console.log("Bem-vindo ao jogo de BlackJack!")

if(confirm("Quer iniciar uma nova rodada?")) {
   confirm === true // CASO O USUÁRIO RESPONDA SIM (OK)
   console.log()
   // INÍCIO DA RODADA
      // CARTAS USUÁRIO
      const cartaUmUsuario = comprarCarta();
      const cartaDoisUsuario = comprarCarta();
      let somaPontuacaoUsuario = (cartaUmUsuario.valor) + (cartaDoisUsuario.valor)
      // IMPRESSÃO DAS CARTAS DO USUÁRIO E SOMA DOS VALORES
     // console.log("Usuário - cartas: " + cartaUmUsuario.texto + " " + cartaDoisUsuario.texto + " - pontuação " + somaPontuacaoUsuario)
      // CARTAS COMPUTADOR 
      const cartaUmComputador = comprarCarta();
      const cartaDoisComputador = comprarCarta();
      let somaPontuacaoComputador = (cartaUmComputador.valor) + (cartaDoisComputador.valor)
      // IMPRESSÃO DAS CARTAS DO COMPUTADOR E SOMA DOS VALORES
      //console.log("Computador - cartas: " + cartaUmComputador.texto + " " + cartaDoisComputador.texto + " - pontuação " + somaPontuacaoComputador)

      console.log(alert("Suas cartas são " + cartaUmUsuario + " " + cartaDoisUsuario + " . A carta revelada do computador é " + cartaUmComputador + ". Deseja comprar mais uma carta?"))




      //RESULTADO FINAL - COMPARAÇÃO DE RESULTADOS USUÁRIO X COMPUTADOR
      { 
      if (somaPontuacaoUsuario > somaPontuacaoComputador) {
         console.log("O usuário ganhou!")
      }else if (somaPontuacaoUsuario < somaPontuacaoComputador) {
         console.log("O computador ganhou!")
      }else if (somaPontuacaoUsuario === somaPontuacaoComputador) {
         console.log("Empate!") }
      }
   
}else { //CASO O USUÁRIO RESPONDA NÃO (CANCELAR)
   confirm === false
   console.log("O jogo acabou!")
}