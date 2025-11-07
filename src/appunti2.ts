const VALORE_NUMERICO1 = Number(prompt ("scegli valore 1"));
const OPERAZIONE = (prompt("che segno desideri?"));
const VALORE_NUMERICO2 = Number(prompt ("scegli valore 2"));

if (OPERAZIONE == "+")
{
    alert(VALORE_NUMERICO1 + VALORE_NUMERICO2);
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
