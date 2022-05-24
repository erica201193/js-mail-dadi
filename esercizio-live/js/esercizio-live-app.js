

let lista = [];

let somma = 0;

for(let i = 1; i < 10; i++) {
    
    let numeriInseriti = prompt ("inserisci un numero");
    somma.push(parseInt(numeriInseriti));

    console.log(lista);
    
    somma = somma + parseInt(numeriInseriti);

    // stessa cosa di fare: somma += parseInt(numeriInseriti);

    console.log(somma)

}