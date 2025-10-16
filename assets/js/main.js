//console.log('it works');

/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
 */

//Tasks:

//1 Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//creo una variabile che si da un valore automaticamente che corrisponde ad un numero che varia da 1 a 100
const nunberOne = (Math.floor(Math.random() * 101))
const nunberTwo = (Math.floor(Math.random() * 101))
const nunberThree = (Math.floor(Math.random() * 101))
const nunberFour = (Math.floor(Math.random() * 101))
const nunberFive = (Math.floor(Math.random() * 101))
const nunbers = [nunberOne, nunberTwo, nunberThree, nunberFour, nunberFive]

//nell'html inserisco 5 contenitori dove far apparire quei valori random
console.log(nunberOne, nunberTwo, nunberThree, nunberFour, nunberFive);
const nunberOneContainer = document.querySelector('div.nunberOneContainer');
const nunberTwoContainer = document.querySelector('div.nunberTwoContainer');
const nunberThreeContainer = document.querySelector('div.nunberThreeContainer');
const nunberFourContainer = document.querySelector('div.nunberFourContainer');
const nunberFiveContainer = document.querySelector('div.nunberFiveContainer');

console.log(nunberOneContainer, nunberTwoContainer, nunberThreeContainer, nunberFourContainer, nunberFiveContainer)

nunberOneContainer.innerHTML += nunberOne;
nunberTwoContainer.innerHTML += nunberTwo;
nunberThreeContainer.innerHTML += nunberThree;
nunberFourContainer.innerHTML += nunberFour;
nunberFiveContainer.innerHTML += nunberFive;

//creo una funzione con set timeout che applica ai contenitori il display:none per farli sparire
//mi serve una variabile per far sparire il contenitore principale cosi da non inserire 2mila comandi

const container = document.querySelector('.container');
//console.log(container)

//2 Dopo 30 secondi i numeri scompaiono
setTimeout(() => {
    container.style.display = 'none';

}, 30000);

//appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente
//devo creare una variabile per contenere nodo del contenitore degli input
const inputContainer = document.querySelector('.inputContainer');
const responseContainer = document.querySelector('.responseContainer');

setTimeout(() => {
    inputContainer.style.display = 'block';

}, 30000);

//3 Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
//mi prendo il bottone e aggiungo un event listner per esso in cui confronto i numeri inseriti con i numeri immagazzinati nelle variabili
const inputOne = document.getElementById('verifyOne');
let userNunberOne
const inputTwo = document.getElementById('verifyTwo');
let userNunberTwo
const inputThree = document.getElementById('verifyThree');
let userNunberThree
const inputFour = document.getElementById('verifyFour');
let userNunberFour
const inputFive = document.getElementById('verifyFive');
let userNunberFive
const Button = document.querySelector('button');
const userNunbers = [];


/*ora raggionaniamo un attimo:devo fare un confronto tra questi numeri e gli altri, se creo 2 array e li processo in un ciclo for posso 
riuscire a confrontarli?*/

//creo un ciclo for per arrai dei numeri random creando un numero [i]

for (let i = 0; i < nunbers.length; i++) {
    const nunber = nunbers[i];
    console.log(nunber, inputOne.value)
    if (nunber == inputOne.value || nunber == inputTwo.value || nunber == inputThree.value || nunber == inputFour.value || nunber == inputFive.value) {
        userNunbers.push(nunber)

    }


}


//metto un condizionale che se numero [i] è uguale ad uno dei 5 input (nunber[i] === inputOne ||nunber[i] === inputTwoo ecc)
//e se invece uso includes?
//allora mettimelo dentro un altro array di verifica
//a quel punto dovrei avere 2 array:
//il primo con tutti i numeri
//il secondo con solo i numeri indovinati
//quindi con un .length posso dire quanto è grande l'arrai dei numeri indovinati ed aggiungere anche i numeri utilizzando l'arrai stesso.

/* devo fare in modo che il bottone  mi faccia funzionare il tutto quindi devo aggiungere un evento al suo click che risolva tutto quanto*/
Button.addEventListener('click', () => {
    userNunberOne = inputOne.value
    userNunberTwo = inputTwo.value
    userNunberThree = inputThree.value
    userNunberFour = inputFour.value
    userNunberFive = inputFive.value
    for (let i = 0; i < nunbers.length; i++) {
        const nunber = nunbers[i];
        console.log(nunber, inputOne.value)
        if (nunber == inputOne.value || nunber == inputTwo.value || nunber == inputThree.value || nunber == inputFour.value || nunber == inputFive.value) {
            userNunbers.push(nunber)

        }


    }
    responseContainer.style.display = 'block';
    responseContainer.innerHTML+= `<strong>hai indovinato ${userNunbers.length} numeri ${userNunbers.toString()} </strong>`

})