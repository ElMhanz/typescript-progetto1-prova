//*
// Scrivere un programma che stampi nella console del browser,
// i primi 10 numeri divisibili per 3 a partire
// dal numero chiesto in input all'utente
let input = Number(prompt("Scegli un multiplo di 3"));

// trovo il primo numero divisibile per 3

if (input % 3 !== 0)
{
    console.log("Il numero inserito non multiplo di 3, passo al successivo multiplo...");
    input += (3 - (input % 3)); // mi porta direttamente al numero multiplo di 3
}

let counter = 0;

while (counter < 10)
{
    console.log(input);
    input += 3;
    counter++;
}

console.log("Vuoi più numeri? Fuck you...");
