/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
 */

/* Perchè non mi funziona ciclando?!?! */

/* const numbers1 = Number(prompt('Digita un numero:'))
const numbers2 = Number(prompt('Digita un numero:'))
const numbers3 = Number(prompt('Digita un numero:'))
const numbers4 = Number(prompt('Digita un numero:'))
const numbers5 = Number(prompt('Digita un numero:'))
const numbers6 = Number(prompt('Digita un numero:'))
const numbers7 = Number(prompt('Digita un numero:'))
const numbers8 = Number(prompt('Digita un numero:'))
const numbers9 = Number(prompt('Digita un numero:'))
const numbers10 = Number(prompt('Digita un numero:'))


result = numbers1 + numbers2 + numbers3 + numbers4 + numbers5 + numbers6 + numbers7 + numbers8 + numbers9 + numbers10
console.log(result) */

let numbers = []

for (i=0; i<=9; i++){
    numbers.push(prompt("Enter a number"));
}



let sum = 0

for (let i = 0; i < numbers.length; i++) {
    
    sum += numbers[i]
}

console.log(sum)