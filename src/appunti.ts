const MAGGIORE_ETA = 18;

// Con questa riga, chiedo all'utente il suo nome.
let nome = prompt("Come ti chiami?");  // Qui un altro commento.

// Con questa riga, stampo a video "Hello, world!".
alert("Hello, " + nome + "!");

let eta: number;
eta = Number(prompt("Quanti anni hai?"));

const isSemiVentenne = ((eta ≥ MAGGIORE_ETA) && (eta <30))

if (eta > MAGGIORE_ETA)
{
    alert("👍");
}

else if (eta == MAGGIORE_ETA)
{
    alert("🔝");
}
else
{
    alert("🔞");
}

// alert(2025 - eta);
 
const somma = 3 + 5;
const concatenazione = "Ciao, " + nome + "!";
const variabile = (eta == MAGGIORE_ETA);