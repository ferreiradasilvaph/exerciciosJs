// Exercicio 1

// Crie uma funçao que receba dois numeros e retorne a soma deles.

function soma(a,b) {
    return a + b ;
  }
  
  const resultadoDaSoma = soma(2, 3);
  
  console.log(resultadoDaSoma);
  
  // Exercicio 2
  
  // Escreva uma função que aceite uma string como entrada e retorne o número de caracteres na string.
  
  function acepptString(string) {
    return string.length;
  }
  const text = "Texto  1";
  const quantidadeCaracteres = acepptString(text);
  
  console.log(acepptString);
  
  // Exercicio 3
  
  // Crie um objeto que represente uma pessoa com propriedades como nome, idade e endereço.
  
  const propriedades = [ "Pedro" , 23 , "Av. Primeiro de Maio, 1386"];
  
  // Exercicio 4
  
  // Escreva uma função que aceite um evento de clique e exiba uma mensagem no console quando o botão for clicado.
  
  function acepptEvent(e){
      e.preventDefault();
  
      e.addEventListener("click", () => {
          console.log("Funcionou");
      })
  }
  
  // Exercicio 5 
  
  //   
  
  const numeros = [1, 2, 3, 4, 5, 6, 7]; // array de números.
  
  for (let index = 0; index < numeros.length; index++) {
      const soma = numeros[index];
  
      console.log(soma);
  }   
  
  // Exercicio 6
  
  // Impelemente uma classe "Produto" com propriedades como nome, preço e quantidade.
  
  class Produto {
      constructor(nome, preco, quantidade){
          this.nome = nome;
          this.preço = preco;
          this.quantidade = quantidade;
      }
  
      // Método para calcular o valor do produto 
   calcularProduto(){
      return this.preco * this.quantidade;
   }
  
  }
  
  // Exercicio 7 
  
  // Escreva uma função que aceite um array de números e retorne o maior número. 
  
  function maiorNumeroDoArray(array){
      if(array.length === 0){
          return "Array vazio"
      }
      const maiorNumero = array[0];
  
      for (let index = 1; index < array.length; index++) {
          if(array[index] > maiorNumero){
              maiorNumero = array[index];
          }
          
      }
      return maiorNumero;
  }
  const numeros2 = [10, 20, 30, 40, 50]
  const resultado = maiorNumeroDoArray(numeros2);
  
  console.log("O maior número é:" + resultado);
  
  
  // Exercicio 8 
  
  // Crie um evento de mouseover que altere a cor de fundo de um elemento hmtl quando o mouse passar sobre ele.
  
  const exemplo = document.getElementById("#exemplo");
  
  exemplo.addEventListener("mouseover", function(){
   exemplo.style.backgroundColor = "#000000c0";
   })
  
  // Exercicio 9 
  
  // Desenvolva uma função que receba um array de nomes e retorne um novo array com apenas os nomes que começam com a letra "A".
  
  const nomesComA = nomesComLetraA(nomes);
  
  const nomes = ["Ana", "Brenda", "Maria", "Julia", "Gabrielly", "Thais", "Danielly", "Laura", "Giovanna", "Daisa", "Analya", "Duda", "Rita", "Ketlhen", "Leticia", "Camille", "Lariane"];
  
  function nomesComLetraA (ListaDeNomes){
      const nomesComA = ListaDeNomes.filter(nome => nome.includes('a') || nome.includes('A'));
      return nomesComA;
  }
  
  // Exercicio 10
  
  // Implemente uma classe "Pessoa" com métodos para definir e obter o nome e a idade da pessoa.
  const pessoa = new Pessoa();
  
  pessoa.definirIdade(25);
  pessoa.definirNome("João");
  
  class Pessoa {
      constructor(){
          this.nome = "";
          this.idade = 0;
      }
      //Método para definir o nome
      definirNome(novoNome){
          this.nome = novoNome;
  }
      // Método para obter o nome
      obterNome(){
          return this.nome;
      }
      // Método para definir idade
      definirIdade(novaIdade){
          this.idade = novaIdade;
      }
      // Método para obter idade
      obterIdade(){
          return this.idade;
      }
  
  }
  console.log("Nome:", pessoa.obterNome());
  console.log("Idade:", pessoa.obterIdade());
  
  // Exercicio 11 
  
  // Crie um objeto json que represente informações sobre um carro, como marca, modelo e ano
  
  
      const carro = {
          "marca": "Toyota",
          "modelo": "Corolla",
          "ano": 2022
      }
  
  // Exercicio 12 
  
  // Escreva uma função que aceite um número e retorne "par" se for par e "impar" se for impar.
  
  function retornar(number){
  
      const num = 2;
  
      if (num % 2 === 0){
          return "par";
      }
      {
          if(num % 2 !== 0){
              return "impar";
          }
      }
  }
  
  // Exercicio 13 
  
  // Crie um botão que, quando clicado, adicione um item a uma lista em uma lista em uma página html.
  
  
  const botao = document.createElement("input");
  
  botao.addEventListener("click", (ev) => {
      ev.preventDefault();
  
      const novoItem = document.createElement("li");
      const lista = document.getElementById("lista");
  
      lista.appendChild(novoItem)
  })
  
  
  // Exercicio 14 
  
  // Desenvolva um loop que itere por um objeto JSON e exiba todas as chaves e valores no console.
  
  
  const objetoJson = {
      nome: "Pedro",
      cidade: "Ribeirão-Preto",
      altura: 1.90,
  }
  for (const key in objetoJson){
      if(objetoJson.hasOwnProperty(key)){
          console.log(`${key}: ${objetoJson[key]}`)
      }
  }
  
  // Exercicio 15 
  
  // Implemente uma classe "Calculadora" com métodos para adição, subtração, multiplicação e divisão.
  
  class Calcule {
      constructor(valorInicial){
          this.value = valorInicial;
      }
      some(value){
          this.value += value; 
      }
      sub(value){
          this.value -+ value;
      }
      multiplicar(value){
          this.value *= value;
      }
      divs(value){
          this.value /= value;
      }
  }
  
  const myCalcule = new Calcule(10);
  
  console.log(myCalcule.value);
  myCalcule.some(5);
  console.log(myCalcule.value);
  myCalcule.sub(10);
  console.log(myCalcule.value);
  myCalcule.multiplicar(10);
  console.log(myCalcule.value);
  myCalcule.divs(10);
  console.log(myCalcule.value);
  
  // Exercicio 16 
  
  // Escreva uma função que aceite um array de strings e retorne um novo array com as strings em ordem alfabetica.
  
  const strings = ["Bom dia", "Boa tarde", "Boa noite"]
  const arrayOrdenado = AccString(strings)
  function AccString(array){
      return array.sort();
  }
  console.log(arrayOrdenado);
  
  // Exercicio 17 
  
  // Crie um evento de teclado que detecte quando a tecla "Enter" é pressionada em um campo de entrada.
  
  const input = document.getElementById ("input")
  
  input.addEventListener("keydown" , function(evento){
      evento.preventDefault();
      if(evento.key === "Enter"){
          console.log("Tecla Enter pressionada no cmapo de entrada")
      }
  })
  
  // Exercicio 18 
  
  //  Desenvolva um loop que percorra um array e exiba apenas os números pares.
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  for (let i = 0; i < numbers.length; i++) {
      const element = numbers[i];
      if(element % 2 === 0){
          console.log(element)
      }
      
  }
  
  
  // Exercicio 19 
  
  // Implemente uma classe "livro" com propriedades como título, autor e número de páginas.
  
  class Livros {
      constructor(titulo, autor, paginas){
          this.titulo = titulo;
          this.autor = autor;
          this.paginas = paginas;
      }
  }
  
  // Exercicio 20
  
  // Crie uma função que aceite um array de objetos JSON e retorne um novo array apenas com objetos que atendam a uma condição específica
  
  const arrayObjetos = [
      {nome: "Produto A", preco: 19.99, quantidade : 5},
      {nome: "Produto B", preco: 29.99, quantidade : 10},
      {nome: "Produto C", preco: 14.99, quantidade : 8},
  ];
  
  function retornoArray(produtos){
      return produtos.map(produto => produto.nome );
  }
  
  const nomesDosProdutos = retornoArray(arrayObjetos);
  console.log(nomesDosProdutos);
  