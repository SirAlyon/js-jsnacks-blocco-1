const userNumber = Number(prompt('Inserisci un numero da 4 cifre:'))


if (userNumber.toString().length !== 4){
    alert('Per favore inserisci un numero con precisamente 4 cifre!')
} else {
    console.log(userNumber);
}

const result = userNumber.toString()


let componentsArray = []
let sum = 0

for (let i=0; i<4; i++){
    let components = result.split('')
    componentsArray.push(components[i])
    sum += Number(components[i]) 
}

console.log(`La somma delle cifre che compongono ${userNumber} è: ${sum}`)


//Versione con substring ---> credo di non poter ciclare (o quantomeno non ne sono anocora in grado)

/* console.log(result.substring(1, 0))
console.log(result.substring(1, 2))
console.log(result.substring(2, 3))
console.log(result.substring(3, 4)) */

/* const finalResult = Number(result.substring(1, 0)) + Number(result.substring(1, 2)) + Number(result.substring(2, 3)) + Number(result.substring(3, 4))

console.log(finalResult) */
