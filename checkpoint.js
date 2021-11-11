
function microondas(receita, tempo){
    let receitaEscolida = receita
    let tempoInformado = tempo

    if (receitaEscolida == 1){
      console.log("O prato escolhido foi: Pipoca!")
      if (tempoInformado == 10 || (tempoInformado > 10 && tempoInformado <= 19)) {
          
      }
      else if(tempoInformado < 10){
          console.log("tempo insuficiente")
      }
      else if((tempoInformado >= 20 && tempoInformado <= 29)){
          console.log("Comida queimou")
      }
      else if(tempoInformado >= 30){
          console.log("Kabumm")
      }
      console.log("Prato pronto, bom apetite!!!")
        
    }

    else if(receitaEscolida ==  2){
        console.log("O prato escolhido foi: Macarrão!")
        if (tempoInformado == 8 || (tempoInformado > 8 && tempoInformado <= 15)) {
            
        }
        else if(tempoInformado < 8){
            console.log("tempo insuficiente")
        }
        else if((tempoInformado >= 16 && tempoInformado <= 23)){
            console.log("Comida queimou")
        }
        else if(tempoInformado >= 24){
            console.log("Kabumm")
        }
        console.log("Prato pronto, bom apetite!!!")
    }

    else if(receitaEscolida == 3){
        console.log("O prato escolhido foi: Carne!")
        if (tempoInformado == 15 || (tempoInformado > 15 && tempoInformado <= 29)) {
            
        }
        else if(tempoInformado < 15){
            console.log("tempo insuficiente")
        }
        else if((tempoInformado >= 30 && tempoInformado <= 44)){
            console.log("Comida queimou")
        }
        else if(tempoInformado >= 45){
            console.log("Kabumm")
        }
        console.log("Prato pronto, bom apetite!!!")
    }
   
    else if(receitaEscolida == 4){
        console.log("O prato escolhido foi: Feijão!")
        if (tempoInformado == 12 || (tempoInformado > 12 && tempoInformado <= 23)) {
            
        }
        else if(tempoInformado < 12){
            console.log("tempo insuficiente")
        }
        else if((tempoInformado >= 24 && tempoInformado <= 35)){
            console.log("Comida queimou")
        }
        else if(tempoInformado >= 36){
            console.log("Kabumm")
          }
        console.log("Prato pronto, bom apetite!!!")
      }
        
    else if(receitaEscolida == 5){
        console.log("O prato escolhido foi: Brigadeiro!")
        if (tempoInformado == 8 || (tempoInformado > 8 && tempoInformado <= 15)) {
        
        }
        else if(tempoInformado < 8){
            console.log("Tempo insuficiente")
            console.log("Prato pronto, bom apetite!!!")

        }
        else if((tempoInformado >= 16 && tempoInformado <= 23)){
            console.log("Comida queimou")
            console.log("Prato pronto, bom apetite!!!")
        }
        else if(tempoInformado >= 24){
            console.log("Kabumm")
            console.log("Prato pronto, bom apetite!!!")
        }
        console.log("Prato pronto, bom apetite!!!")
      }
        
    else {
        console.log("Prato inexistente")
    }

}


microondas(3,12)
