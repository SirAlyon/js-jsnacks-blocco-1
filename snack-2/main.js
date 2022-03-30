

/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

const firstWord = prompt('Inserisci la prima parola:')
const secondWord = prompt('Inserisci la seconda parola:')


if (firstWord.length > secondWord.length){
    console.log(`La più corta: ${secondWord} La più lunga: ${firstWord}`);
} else if (firstWord.length < secondWord.length){
    console.log(`La più corta: ${firstWord} La più lunga: ${secondWord}`)
} else if (firstWord.length == secondWord.length){
    console.log(`Le due parole hanno la stessa lunghezza`)
} else if (firstWord === "" || secondWord === ""){
    alert('Per favore inserisci almeno un carattere')
}

