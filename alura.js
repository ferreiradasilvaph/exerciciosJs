// adicionando/criando itens à mochila :

const form = document.getElementById("novoItem"); // recebe o id do formulário.
const list = document.getElementById('lista'); // criação de uma constante que recebe um elemento html que usa um id 'lista'.
const itens = JSON.parse(localStorage.getItem("itens")) || [] // array que será inserido os objetos que serão criados com o input submit. 

itens.forEach( (elementos) => { // uma espécie de loop para percorrer os elementos do array 
criarElemento(elementos);
});

// dentro do form - formulário: 
form.addEventListener("submit", (evento) => { // adicionando uma função ao evento.

    evento.preventDefault(); // interrompe o comportamento padrao do evento.

    const nome = evento.target.elements['nome'];// variaveis para acessar os valores enviados.
    const quantidade = evento.target.elements['quantidade'];// variaveis para acessar os valores enviados.

    const existe = itens.find(e => e.nome === nome.value);
    console.log(existe)

    const itemAtual = { // objeto criado para adicionar os dados inseridos no input nome e quantidade. 
        "nome": nome.value,
        "quantidade": quantidade.value
    }
    if (existe){
        itemAtual.id = existe.id;
    }else{
        itemAtual.id = itens.length;

        criarElemento(itemAtual);
        console.log(itemAtual)
    
    }


    
    // .push serve para inserir elementos dentro de um array.

    // o array itens vai receber o objeto criado e em localStorage que só le strings/json, vai transformar o objeto em string para que possa ser lido.

    itens.push(itemAtual); // adiciona o objeto criado (itens criados a partir do input) ao array 'itens'.

    localStorage.setItem("itens", JSON.stringify(itens));

    // o localStorage só permite guardar strings, por isso o metodo stringify do json. (que transforma o objeto em string).
    // .stringfy transforma o objeto em string

    nome.value = ""; // informa que o valor que a constante está recebendo, até então, é null.
    quantidade.value = ""; // ||    ||     ||      ||      ||       ||      ||      ||.
});

function criarElemento(item){ 

    const newIten = document.createElement('li'); // criando um elemento html via js.
    newIten.classList.add("item"); // adicionando uma classe a constante em questão.

    const numberIten = document.createElement('strong'); // criando um elemento html via js. 
    numberIten.innerHTML = item.quantidade; // usa-se inner por que se trata de um elemento HTML.

    newIten.appendChild(numberIten); // insere os dados de elemento dentro de um outro.
    newIten.innerHTML += item.nome; // adiciona o parâmetro nome da função em questão.
    list.appendChild(newIten);// inserindo ao array todo elemento 'li' que for criado a partir dessa função.

}

// criando um elemento html com js.

/*
const novoItem = document.createEelement('li');
novoItem.classList.add('list)
*/

//  métodos próprios do localStorage para manipulação de dados:

/* localStorage.clear(), localStorage.setItem(), localStorage.removeItem(), localStorage.getItem(), localStorage.length(), localStorage.key(). 
*/

// 23/10/23

// localStorage.getItem() - método serve para acessar algum dado

