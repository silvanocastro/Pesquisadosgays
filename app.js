function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

let campoPesquisa  = document.getElementById ("campo-pesquisa").value

if (!campoPesquisa) {
    section.innerHTML = "NÃO FOI ENCONTRADO" 
    return
}

campoPesquisa = campoPesquisa.toLowerCase ()

console.log (campoPesquisa);


    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";


    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase ()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase ();
        if(titulo.includes(campoPesquisa) ||descricao.includes (campoPesquisa) || tags.includes(campoPesquisa))   
        // Cria um novo elemento HTML para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
    }

    if(!resultados) {
        resultados = "Esse cara é macho!"

    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}