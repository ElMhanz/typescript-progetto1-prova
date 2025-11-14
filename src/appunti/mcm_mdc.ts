let numero1 = Number(prompt("Inserisci il primo numero:"));
while (isNaN(numero1))
{
    numero1 = Number(prompt("Errore! Inserisci un numero valido:"));
}

let numero2 = Number(prompt("Inserisci il secondo numero:"));
while (isNaN(numero2))
{
    numero2 = Number(prompt("Errore! Inserisci un numero valido:"));
}

// ---- MCD ----
let a = numero1;
let b = numero2;

while (b !== 0)
{
    const resto = a % b;
    a = b;
    b = resto;
}

const mcd = a;

// ---- MCM ----
const mcm = (numero1 * numero2) / mcd;

console.log("MCD = " + mcd);
console.log("MCM = " + mcm);

