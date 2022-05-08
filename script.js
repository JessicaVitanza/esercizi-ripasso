const numberArray = [23, 13, 34, 56, 99, 101];

function findNumber56(array) {
    let number = array[0];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        if (element === 56) {
            number = element;
        }
    } 
    return number;
}

console.log('Find number "56": ' + findNumber56(numberArray));

function moreThan56(array) {
    
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        if (element > 56) {
            newArray.push(element);
        }
    } 
    return newArray;
}

console.log('More than 56: ' + moreThan56(numberArray));


function not56(array) {
    
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (element !== 56) {
            
            newArray.push(element);
        }
    }
    return newArray;
}

console.log('Find all number that are not 56: ' + not56(numberArray));


function onlyOdds(array) {
    
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (element % 2 === 1) {
            newArray.push(element);
        }
    }
    return newArray;
}

console.log('Find only odds number: ' + onlyOdds(numberArray));

//---------------------------------------------------------------------------//

// const numberPick = prompt("Choose a number");

// const pickNumber = numberPick

// if (pickNumber % 2 === 0 && pickNumber % 3 === 0) {
//     alert('Il numero è divisibile per 2 e per 3');

// } else if (pickNumber % 3 === 0) {
//     alert('Il numero è divisibile per 3');

// } else if (pickNumber % 2 === 0 ) {
//     aler('Il numero è divisibile per 2');

// } else if (pickNumber % 2 === 1 && pickNumber % 3 === 1) {
//     alert('il numero non è divisibile nè per 2 nè per 3');
// } else {

// }



//-------------------------------------------------------------------------

const number = prompt('Choose a number')

const numberCh = number

// RADICE QUADRATA

function squareRoot(element) {

   return Math.sqrt(element);
}

console.log("Radice quadrata: " + squareRoot(numberCh));



//RADICE CUBICA

 function cbrt(element) {

    return Math.cbrt(element);
 }

 console.log("Radice cubica: " + cbrt(numberCh));


 //FATTORIALE 

 const f = [];
 function factorial (n) {
   if (n == 0 || n == 1)
     return 1;
   if (f[n] > 0)
     return f[n];
   return f[n] = factorial(n-1) * n;
 }

 console.log("Numero fattoriale: " + factorial(numberCh))

 //QUADRATO

 function el(element) {
    return element ** 2
 }

 console.log("Al quadrato: " + el(numberCh))

 //CUBO

 function et(element) {
    return element ** 3
 }

 console.log("Al cubo: " + et(numberCh))