
const MEDIA = 5;
alert("benvenuto");
const VALORE_NUMERICO1 = Number(prompt ("scegli un valore tra 1 e 10"));
const VALORE_NUMERICO2 = Number(prompt ("scegli un valore tra 1 e 10"));
const VALORE_NUMERICO3 = Number(prompt ("scegli un valore tra 1 e 10"));
const VALORE_NUMERICO4 = Number(prompt ("scegli un valore tra 1 e 10"));
const VALORE_NUMERICO5 = Number(prompt ("scegli un valore tra 1 e 10"));

if (((VALORE_NUMERICO1 >= 1) && (VALORE_NUMERICO1 <= 10)) || ((VALORE_NUMERICO2 >= 1) &&
    (VALORE_NUMERICO2 <= 10)) || ((VALORE_NUMERICO3 >= 1) &&
        (VALORE_NUMERICO3 <= 10)) || ((VALORE_NUMERICO4 >= 1) &&
            (VALORE_NUMERICO4 <= 10)) || ((VALORE_NUMERICO5 >= 1) && (VALORE_NUMERICO5 <= 10)))
{
    alert((VALORE_NUMERICO1 + VALORE_NUMERICO2 + VALORE_NUMERICO3 + VALORE_NUMERICO4 + VALORE_NUMERICO5) / MEDIA);
}

else if (Number.isNaN(VALORE_NUMERICO1) || Number.isNaN(VALORE_NUMERICO2) ||
    Number.isNaN(VALORE_NUMERICO3) || Number.isNaN(VALORE_NUMERICO4) || Number.isNaN(VALORE_NUMERICO5))
{
    alert("System 32 Disinstalled");
}

