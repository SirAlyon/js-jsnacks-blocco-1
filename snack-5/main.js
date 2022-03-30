/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
 */

let oddNumbers = []

for (let i=0; i<6; i++){
    let userNumbers = Number(prompt('Digita un numero:'))
    if (userNumbers % 2 == 0 && userNumbers !== 0){
        oddNumbers.push(userNumbers)
    }
}