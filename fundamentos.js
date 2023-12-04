// passo 1: importar o módulo 'http' - aula miguel vaz

/* const http = require('http');
// passo 2: criar um servidor http

const server =  http.createServer((req, res) => {
    // este callback é chamado sempre que uma solicitação http é recebida.
    // o servidor ira responder com "ola, mundo!" sempre que uma solicitação for feita.
});
*/

// método usado para abrir um navegador, utilizando a API `child_process`.

// utilizando a API `child_process` 
const { exep } = require('child_process');
const { stderr } = require('process');

// win 32 - API do windows; é a plataforma original para apps do windows em C e C++;
 const navegadorNome = 'chrome';

// Comando para abrir o navegador 
const comando = process.platform === 'win32'

? `start ${navegadorNome}`: process.platform === 'darwin'

// condicionais de operadores ternários. Se a condição for verdadeira, o valor após o caractere ? é usado

? `open -a "${navegadorNome}"`: `xdg-open "${navegadorNome}"`;

exep(comando, (error, stdout, stderr) => {
    if(error){
        console.error(`Erro ao abrir o navegador: ${error.message}`);
        return;
    }
    if(stderr){
         console.error(`Erro: ${stderr}`);
         return;
    }
    console.log(`${navegadorNome} foi aberto.`);
});
//  neste exemplo em questão, declara-se a variavel com o nome do browser que desejas abrir.