// Object literal 

// para criar um objeto em js precisa-se de um par de chaves, onde pode ser colocada qualquer propriedade ou qualquer valor.

// no exemplo a seguir criarei um objeto, uma televisao.

// os objetos possuem propriedades e funcionalidades.

// propriedade color para se referir a cor da mesma.

// para falar que a televisao está ligada, crio uma propriedade que me permite usar uma boolean (true)

// toggle do ingles trocar, troca de on e off. Usa-se function, arrow-function, ou shorthand para representar a funcionalidade.

// O caractere "!" é uma propriedade que altera o valor booleano que lhe foi atribuido outrora.

// Após a mensagem ligar ou desligar, precisa-se avisar ao código que é necessário mudar a opção do isOn. 

    const televisao = {
    color: "black",
    estaLigada: true, // a propriedade recebe o valor booleano para informar q está ligado

//    toggleOnOff: function(){}, () =>{}, toggleOnOff();


    toggleOnOff: function(){
        if(televisao.estaLigada){
            console.log("desligue a tv")
        }else{
            console.log("ligar tv")
        }
        televisao.estaLigada =! televisao.estaLigada;
    } 
    }

    console.log(televisao.color);
    televisao.toggleOnOff();
    televisao.toggleOnOff();


