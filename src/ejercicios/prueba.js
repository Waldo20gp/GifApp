'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'getOneBits' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER n as parameter.
 */

function getOneBits(n) {
    
    
    let totalNumOfBits = 1
    let exponente = 2;
    while(exponente<n){
        exponente = exponente ** totalNumOfBits;
        totalNumOfBits +=1;
    }
    let binaryNum = [];
    let arrayToReturn = [];
    let arrayWithPositions = [];
    let auxToCount1s = 0;
    let i = totalNumOfBits;
    while(n>0){
    
        if((2**i - n)<=0){
            binaryNum.unshift(1);
            n -= 2**i;
        }else if((2**i - n)>0){
            binaryNum.unshift(0)   
        }
        
    }
    console.log("bin",binaryNum)
   
    
    binaryNum = binaryNum.reverse();
    for(let i = 0; i<binaryNum.length; i++){ 
        if(binaryNum[i]==1){
            auxToCount1s += 1;
            arrayWithPositions.push(i+1);
        }
    }
    
    arrayToReturn = [auxToCount1s,...arrayWithPositions]
    
    
    return arrayToReturn
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const result = getOneBits(n);

    ws.write(result.join('\n') + '\n');

    ws.end(); 
}
