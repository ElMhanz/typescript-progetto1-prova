let input = Number (prompt("inserisci il numero di partenza"));

const MOLTIPLICATORE = Number(prompt("inserisci il moltiplicatore"));
const max = Number(prompt("inserisci il numero massimo di numeri da generare"));

const resto = input % MOLTIPLICATORE;
if (resto == 0)
{
    input += (MOLTIPLICATORE - resto);
}

let count = 0;
while (count < max)
{
    console.log(input);

    count += 1;
    input += MOLTIPLICATORE;
}
