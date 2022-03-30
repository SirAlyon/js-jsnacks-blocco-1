/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

const invited = ['Fabio', 'Alessio', 'Marco', 'Matteo', 'Luca', 'Martina']
const userName = prompt('scrivi il tuo nome')


if (userName.length == 0) {
    alert('Per favore inserisci almeno un carattere')
}

let boolean = false
for (i=0; i< invited.length; i++){

    if (userName === invited[i]){
        boolean = true
    } 
}

if (boolean){
    console.log('Acesso Consentito')
} else {
    console.log('Acesso Negato')
}
