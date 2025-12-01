/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
PRINCIPALI DATATYPE IN JAVASCRIPT
- stringa --> è composta da uno o più caratteri (lettere, numeri, simboli, parole o frasi) scritti all'interno di due apici ("") e ad esso è associato un valore tetsuale [es. "nome", "26", "Imvia il form!", ecc.]
- numero --> è composto da numeri, non viene scritto all'interno degli apici e ad esso è associato un valore numerico [es. 0, 2, 100, -15, 1.28, ecc.]
- boolean --> può essere solo di due tipi: true o false. Non viene scritto all'interno degli apici e si utilizza per far "agire in modo diverso" il nostro codice a seconda delle condizione che si verifica.
 */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Giorgia";
console.log("name", myName);
console.log("type", typeof myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let number1 = 12;
let number2 = 20;
console.log("sum1", number1 + number2);

// oppure

let sum = number1 + number2;
console.log("sum2", sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Formicola";
console.log("surname", myName);

// oppure usando il costrutto const

/* 
    const myName = "Giorgia";
    myName = "Formicola";

    D1.js:56 Uncaught TypeError: Assignment to constant variable.
        at D1.js:56:8 
    */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log("difference1", 4 - x);

// oppure

let difference = 4 - x;
console.log("difference2", difference);

// oppure
let number3 = 4;
console.log("difference3", number3 - x);

// oppure
difference = number3 - x;
console.log("difference4", difference);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
console.log("equality", name1 === name2); // ritorna false

// oppure

console.log("inequality", name1 !== name2); // ritorna true

// però se
let name3 = name2.toLowerCase();

console.log("name2 in lowercase", name3);

console.log("equality", name1 === name3); // ritorna true

console.log("inequality", name1 !== name3); // ritorna false
