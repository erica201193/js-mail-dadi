/*

Gioco dei dadi
Generare più  numeri random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
C’è forse un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?
*/






const numeriGiocatore = [];

const numeriComputer = [];

let sommaNumeriGiocatore = 0;

let sommaNumeriPc = 0;



for(let i = 1; i <= 6; i++) {
    let randomNumberUser = Math.floor((Math.random() * 6) + 1);
    let randomNumberComputer = Math.floor((Math.random() * 6) + 1);

    numeriGiocatore.push(randomNumberUser);
    numeriComputer.push(randomNumberComputer);

    sommaNumeriGiocatore += randomNumberUser;
    sommaNumeriPc += randomNumberComputer;
}

console.log(numeriGiocatore, numeriComputer)

if (sommaNumeriPc > sommaNumeriGiocatore) {
    alert (`L'AI dominerà il mondo! (Umano: ${sommaNumeriGiocatore} punti - Ai: ${sommaNumeriPc} punti)`)
}

if (sommaNumeriPc < sommaNumeriGiocatore) {
    alert (`Ti è andata di lusso! (Umano: ${sommaNumeriGiocatore} punti - Ai: ${sommaNumeriPc} punti)`)
}