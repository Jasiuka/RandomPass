const PassInput = document.querySelector('.input');
const btnGenerate = document.querySelector('.btn');
let numbersBool = false;
let symbolsBool = false;
const checkboxNum = document.querySelector('.checkbox-num');
const checkboxSym = document.querySelector('.checkbox-sym');
const btnLength = document.querySelector('.btn-length');
const length = document.querySelector('.input-length');
const btnCopy = document.querySelector('btn-copy');
let lengthPass = 10;


const lettersLower = 'q w e r t y u i o p a s d f g h j k l z x c v b n m'
const symbols = `[ ] ( ) . : > < ! * { } - + / $ ^ # &`
const lettersUpper = lettersLower.toUpperCase();
const numbersArr = [1,2,3,4,5,6,7,8,9,0];


const letters = lettersLower.split(' ').concat(lettersUpper.split(' '));
const symbolsArr = symbols.split(' ')
let password = [];

// const randomPass = function(length=10, symbols = false, numbers = false) {
//     if(symbols === false && numbers === false) {
        
//         for (let i = 0; i<length ; i++ ) {
//             password.push(letters[Math.trunc(Math.random()*52)])
//         }
//     }
//     if(symbols === true && numbers === false) {
//         const letAndSym = letters.concat(symbolsArr);
        
//         for (let i = 0; i<length ; i++ ) {
//             password.push(letAndSym[Math.trunc(Math.random()*71)])
//         }
//     }
//     if(symbols === true && numbers === true) {
//         const letSymAndNum = letters.concat(symbolsArr).concat(numbersArr)
//         for (let i = 0; i<length ; i++ ) {
//             password.push(letSymAndNum[Math.trunc(Math.random()*81)])
//         }
        
//     }
//     console.log(password.join(''));
//     PassInput.value = password.join('');
// }   

// randomPass(10);

// randomPass(10, true, false);
const numberBoolTurn = function() {
    if(numbersBool === false) {
         numbersBool = true
    } else numbersBool = false
}

const symbolBoolTurn = function() {
    if(symbolsBool === false) {
         symbolsBool = true
    } else symbolsBool = false
}

const copyPass = function() {
    PassInput.select();
    PassInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(PassInput.value)
    alert(`Password copied: ${PassInput.value}`)
}

// BUTTONS
btnLength.addEventListener('click', function() {
    if(length.value > 24) alert('Password length above the maximum!');
    if(length.value < 7) alert('Password length below the minimum!');
    lengthPass = length.value;
})

// PASS GENERATION CODE
btnGenerate.addEventListener('click', function() {
    console.log(`Numbers: ${numbersBool}`);
    console.log(`Symbols: ${symbolsBool}`);
    if(symbolsBool === false && numbersBool === false) {
        
        for (let i = 0; i<lengthPass ; i++ ) {
            password.push(letters[Math.trunc(Math.random()*52)])
        }
    }
    if(symbolsBool === true && numbersBool === false) {
        const letAndSym = letters.concat(symbolsArr);
        console.log(letAndSym);
        
        for (let i = 0; i<lengthPass ; i++ ) {
            password.push(letAndSym[Math.trunc(Math.random()*71)])
        }
    }
    if(symbolsBool === true && numbersBool === true) {
        const letSymAndNum = letters.concat(symbolsArr).concat(numbersArr)
        console.log(letSymAndNum);
        for (let i = 0; i<lengthPass ; i++ ) {
            password.push(letSymAndNum[Math.trunc(Math.random()*81)])
        }
        
    }
    if(symbolsBool === false && numbersBool === true) {
        const letAndNum = letters.concat(numbersArr)
        console.log(letAndNum);
        for (let i = 0; i<lengthPass ; i++ ) {
            password.push(letAndNum[Math.trunc(Math.random()*62)])
        }
        
    }
    console.log(password.length)
    console.log(password.join(''));
    PassInput.value = password.join('');
    password = [];

})


