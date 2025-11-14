//* *
// chiedere all'utente un
// indice tra 0 e 4 (compresi)
// chiedere un nuovo valore da salvare.
// sostituire quel valore all'indice corretto
//  */

const array = [9, 2, 12, 5, 100];

const i = Number(prompt("Indice (0-4):"));
const v = Number(prompt("Nuovo valore:"));

array[i] = v;

console.log(array);

