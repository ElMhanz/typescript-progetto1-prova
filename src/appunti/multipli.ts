let counter = 0;

while (counter < 10)
{
    counter += 1;

    if (counter % 5)
    {
        console.log("Counter" + counter + "non è multiplo di 5.");
    }
    else
    {
        console.log("Counter" + counter + " è multiplo di 5.");
    }
}

console.log("Fine ciclo...");
