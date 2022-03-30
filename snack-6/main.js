
const userNumber = Number(prompt('Indica un numero:'))

/* const elevatedNumber = (Math.pow(userNumber, 3))

console.log(elevatedNumber) */

let numbersArray = []
let elevatedNumber
for (let i=0; i < userNumber; i++){
    let allUserNumbers = userNumber - [i]
    numbersArray.push(allUserNumbers)
    elevatedNumber = (Math.pow(allUserNumbers, 3))
    console.log(elevatedNumber);

}

console.log(numbersArray);