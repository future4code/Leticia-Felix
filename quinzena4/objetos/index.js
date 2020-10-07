const oTitulo = document.getElementById("titulo-post");
const oAutor = document.getElementById("autor-post");
const oConteudo = document.getElementById("conteudo-post");

const arrayDePosts = [];
const novoBlogPost = {
        titulo: oTitulo.value,
        autor:oAutor.value,
        conteudo:oConteudo.value,
    }

// ADICIONA O NOVO POST AO ARRAY EXISTENTE E EXECUTA A FUNÇÃO QUE EXIBE O POST NA PÁGINA
function criarPost() {
    arrayDePosts.push(novoBlogPost);

//    console.log(arrayDePosts)
    exibirPosts()

    // LIMPA OS INPUTS
    oTitulo.value = ""
    oAutor.value = ""
    oConteudo.value = ""
}

// ADICIONA O NOVO POST AO CONTAINER DE POSTS
function exibirPosts(){
    const containerDePosts = document.getElementById("container-de-posts");
    containerDePosts.innerHTML += `<p>${oTitulo.value}</p>
                                   <p>${oAutor.value}</p>
                                   <p>${oConteudo.value}</p>`
}