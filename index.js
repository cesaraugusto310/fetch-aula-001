const searchForm = document.querySelector('#search-form')

searchForm.addEventListener('submit' , (event) => {
    //previne o comportamento padrao de refresh do submit
    event.preventDefault()

    //captura o valor do input com id username
    const username = document.querySelector('#username').value

    //fazer uma chamada / ou uma requisição de API do GuitHub para buscar os dadsos de um usuário
    // o metodo que usaremos é o fetch API que retorna uma promise.

fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => response.json() )
    .then((dados) => { console.log(dados)})
    .catch((erro) => alert('Tivemos um problema' , erro))

})