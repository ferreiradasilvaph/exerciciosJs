// Factory - padrão de projetos.

    // Criar-se-ha uma constante televisao, nesse caso, que recebe a função createMyTv.

    // nesse caso podemos retornar, dentro da função, um objeto (como o que ja está estruturado, na estrutura interna do arquivo "mlk2.js")
    
    // Criaremos um controle usando o let.
    
    // Dentro dessa função, temos um escopo, um contexto, onde a variavel let isOn está sendo usada, está sendo visível.
    
    // Podemos através disso reduzir os caracteres de código da sintaxe em questão.
    
    // Quando a propriedade recebe o mesmo valor de uma variável, podemos simplificar o código.
    
    // Dentro dos parenteses da função, podemos atribuir a propriedade color diretamente, podemos dizer ali mesmo o valor que sera atribuido a esta propriedade.
    
    // O color que foi informado nos parenteses da função possui a mesma condição que a variável let isOn, sendo assim, podemos simplificar o código da mesma forma que outrora fizemos.
    
    // O return "joga" todas essas informações para o mundo exterior.


    function createMyTv(color = "black"){
        let isOn = true; // controle. 
        return{
            color,
            isOn,
          // toggleOnOff: function(){}, () =>{}, toggleOnOff();
            toggleOnOff: function(){
                if(isOn){
                    console.log("desligue a tv")
                }else{
                    console.log("ligar tv")
                }
                isOn = !isOn;
            } ,
        }
    }

    // condições onde o código está sendo executado:
    const televisaoBlack = createMyTv();
    const televisaoWhite = createMyTv("white");
    console.log(televisaoBlack.color);
    console.log(televisaoWhite.color)

