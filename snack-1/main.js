/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */


const firstNumber = Number(prompt('Inserisci il primo numero:'));
const secondNumber = Number(prompt('Inserisci il secondo numero:'));

if (isNaN(firstNumber) || isNaN(secondNumber)){
    alert('Per favore inserisci solo valori numerici!')
}

if (firstNumber > secondNumber){
    console.log(`Il primo numero è più grande: ${firstNumber}`);
} else if (firstNumber < secondNumber){
    console.log(`Il secondo numero è più grande: ${secondNumber}`);
} else if (firstNumber == secondNumber){
    console.log(`I due numeri scelti sono uguali!`)
}