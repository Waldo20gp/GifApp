
function intToRoman(num){
    
    const numberString = num.toString().padStart(4,0);


    const centenas = {
        "4" :"CD",
        "5" : "D",
        "9" : "CM"
    }

    const decenas = {
        "4": "XL",
        "5": "L",
        "9": "XC"
    }
   
    const unidades = {
        "4":"IV",
        "5":"V",
        "9":"IX"
    }
    
    if(numberString.length<5){

        let numberInRoman = '';
        for (let index = 4; index > 0; index--) {
            
            switch (index) {
                case 4:
                    numberInRoman += concatCycleInator(numberString[0], 'M');
                    
                    break;
                case 3:
                    

                    if(numberString[1] == 5){numberInRoman += centenas[5]} 
                    
                    if(numberString[1] == 4){numberInRoman += centenas[4]}

                    if (numberString[1]==9){ numberInRoman += centenas[9]}

                    if(numberString[1] <4){numberInRoman += concatCycleInator(numberString[1],"C")}

                    if(numberString[1]>5 && numberString[1]<9){ numberInRoman += centenas[5] + concatCycleInator(numberString[1], "C")}

                    break;
                case 2:    
                    if(numberString[2] == 5){ numberInRoman += decenas[5]}
                    if(numberString[2] == 4){numberInRoman += decenas[4]}

                    if (numberString[2]==9){ numberInRoman += decenas[9] }

                    if(numberString[2] <4){numberInRoman += concatCycleInator(numberString[2],"X")}

                    if(numberString[2]>5 && numberString[2]<9){numberInRoman += decenas[5] + concatCycleInator(numberString[2], "X")}
                    break;
                case 1:    
                    if(numberString[3] == 5){ numberInRoman += unidades[5]} 
                    if(numberString[3] == 4){numberInRoman += unidades[4]}

                    if (numberString[3]==9){numberInRoman += unidades[9]}

                    if(numberString[3] <4){numberInRoman += concatCycleInator(numberString[3],"I")} 
                    
                    if(numberString[3]>5 && numberString[3]<9){numberInRoman += unidades[5] + concatCycleInator(numberString[3], "I")}     
            }
            
        }
        return numberInRoman;

    }else{
        console.log('El valor maximo es 3999')
    }

}


const concatCycleInator = (amountToConcat, letterToConcat)=>{
    let stringToReturn =''
    if (amountToConcat<4) {
        
        for (let index = 0; index < amountToConcat; index++) {
            stringToReturn = stringToReturn + letterToConcat;
            
        }
        return stringToReturn

    }else if(amountToConcat>5&&amountToConcat<9){
        for(let index = 5; index<amountToConcat;index++){
            stringToReturn = stringToReturn + letterToConcat;
        }
        return stringToReturn
    }
    else{
       return ""
    }

}



console.log(intToRoman(777))