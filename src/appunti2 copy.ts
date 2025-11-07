const NUMERO_MEDIA = 5;
const VALORE_NUMERICO1 = Number(prompt ("scegli un valore tra 1 e 10"));
const OPERAZIONE = (prompt("che segno desideri?"));
const VALORE_NUMERICO2 = Number(prompt ("scegli un valore tra 1 e 10"));
const VALORE_NUMERICO3 = Number(prompt ("scegli un valore tra 1 e 10"));
const VALORE_NUMERICO4 = Number(prompt ("scegli un valore tra 1 e 10"));
const VALORE_NUMERICO5 = Number(prompt ("scegli un valore tra 1 e 10"));

if (OPERAZIONE == "+")
{
    alert(VALORE_NUMERICO1 + VALORE_NUMERICO2 + VALORE_NUMERICO3 + VALORE_NUMERICO4 + VALORE_NUMERICO5 / NUMERO_MEDIA);
}

else if (OPERAZIONE == "*")
{
    alert(VALORE_NUMERICO1 * VALORE_NUMERICO2);
}

else if (OPERAZIONE == "-")
{
    alert(VALORE_NUMERICO1 - VALORE_NUMERICO2);
}

else if (OPERAZIONE == "/")
{
    alert(VALORE_NUMERICO1 / VALORE_NUMERICO2);
}
