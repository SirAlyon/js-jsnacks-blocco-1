let userNumbers = []
let sum = 0
let average
for (let i=0; i<10; i++){
    let userNumber = Number(prompt('Inserisci un numero:'))
    userNumbers.push(userNumber)
    sum += userNumber
}

average = sum / userNumbers.length

console.log(`La somma dei numeri che hai inserito è: ${sum}`);
console.log(`La media dei numeri che hai inserito è: ${average}`);
