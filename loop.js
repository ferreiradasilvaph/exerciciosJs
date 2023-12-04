// Explicando Loop: estrutura que permite executar um bloco de código rapidamente até que uma condição seja atendida. For, while, do...while.

// Loop for: usado para saber quantas vezes deseja repetir um bloco de código.

 for (let i = 0; i < 5; i++) {
    console.log("numero"+ 1);    
}

// Neste caso, o loop "for" vai imprimir no console os numeros de 0 até 4, ao invés de contar o próximo número, após o número 4, que seria o número 5, ele para.</

// Loop while: usado para repetir um bloco de código enquanto uma condição específica for verdadeira.

let contador = 0;
 while (contador < 5) {  console.log("Contador: " +  contador);contador++;
}

// Este loop while fará o mesmo que o loop do exemplo de cima.

// Loop do...while: semelhante ao while, mas sempre executará o bloco de código pelo ao menos uma vez, mesmo se a condição for falsa no inicio.

 let x = 0;
do {console.log("X: " + x);x++;} while (x < 5);
 
// Este loop támbem fará o mesmo dos loops antes citados.
  
// Iterando um loop a um objeto json: usando estruturas de controle de fluxo, como o "for in" ou o "for of", afim de percorrer as propriedades do objeto ou usar métodos como "object.keys()" e "object.values()", para obter os valores do objeto json. Exemplos desta abordagem:

// Usando for in para iterar nas propriedades de um objeto json: 

 const objetoJSON = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo"
};

for (let propriedade in objetoJSON) {
  if (objetoJSON.hasOwnProperty(propriedade)) {
    console.log(propriedade + ": " + objetoJSON[propriedade]);
  }
}
// no exemplo acima, o loop for in percorre todas as propriedades do objeto json e imprime na tela o nome da propriedade e seu valor.