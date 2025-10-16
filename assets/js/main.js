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

//nell'html inserisco 5 contenitori dove far apparire quei valori random
console.log(nunberOne,nunberTwo,nunberThree,nunberFour,nunberFive );
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
setTimeout(() =>{
    container.style.display = 'none';

}, 30000);

//appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente


//3 Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

