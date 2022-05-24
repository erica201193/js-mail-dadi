/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
(non usare includes() o indexOf)
*/

let emailInserita = prompt("Inserisci la tua mail")


//creo la lista di mail che possono accedere

let listaEmail = [
    "pippo@gmail.com",
    "pluto@gmail.com",
    "paperino9@gmail.com",
    "minnie@gmail.com",
    "gianfranco26@gmail.com"];

//creo un ciclo

let emailValida;

for (let i = 0; i < listaEmail.length; i++) {

    if (listaEmail[i] === emailInserita) {
        emailValida = i;
    }
}

if (emailValida !== undefined) {
    alert("La mail che hai inserito (" + emailInserita + ") non è valida")
    console.log("email invalida")
} else {
    alert("Email valida! Tra poco avrai accesso al nostro gruppo segreto...")
    console.log("email valida")
}


