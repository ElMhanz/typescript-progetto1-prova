let isValid = true;
let indice = 0;
let somma = 0;
let votiValidi = 0;

while ((isValid == true) && (indice < 5))
{
    const numero = Number(prompt("Inserisci il voto (1-10):"));

    if ((numero < 1) || (numero > 10) || isNaN(numero))
    {
        isValid = false;
        alert("Hai inserito un numero non valido.");
    }
    else
    {
        somma += numero;
        votiValidi = votiValidi + 1;
    }

    indice = indice + 1;
}

if (votiValidi > 0)
{
    const media = somma / votiValidi;
    alert("La media dei voti validi è: " + media);
}

else
{
    alert("Non hai inserito nessun voto valido.");
}
