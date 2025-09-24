function salutation(nom)
{
    return (`Bonjour ${nom}`);
}

function launch()
{
    let msg = salutation(prompt("Entrer votre nom"));
    console.log(msg);
}