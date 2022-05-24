/*
Esercizio Bonus: la coda dell’array
Creare un array con un numero a piacere di elementi.
Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell’array.
Attenzione #1: quanti elementi minimo dovrà contenere l’array?
Attenzione #2: il ciclo deve essere costruito per estrarre gli ultimi
elementi da qualsiasi array, anche se non conosciamo a priori quanti elementi contiene.
*/



const numeriRandom = [];
const ultimiNumeriRandom = [];


for(let i = 0; i < 10; i++) {
    numeriRandom.push(Math.floor(Math.random() * 100));
}
console.log(numeriRandom)

for (let i = 11; i > 11 - 5; i--) {
    ultimiNumeriRandom.unshift(numeriRandom[i])
}

console.log(ultimiNumeriRandom)

