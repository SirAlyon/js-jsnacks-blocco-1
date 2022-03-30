/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */


const firstNumber = Number(prompt('Inserisci il primo numero:'));
const secondNumber = Number(prompt('Inserisci il secondo numero:'));

if (firstNumber > secondNumber){
    console.log(`Il primo numero è più grande: ${firstNumber}`);
} else if (firstNumber < secondNumber){
    console.log(`Il secondo numero è più grande: ${secondNumber}`);
} else {
    console.log(`I due numeri scelti sono uguali!`)
}