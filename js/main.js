/**
 * Creare un oggetto che descriva uno studente 
 * con le seguenti proprietà: nome, cognome e età. 
 * Stampare attraverso il for..in tutte le proprietà.
   Creare un array di oggetti di studenti. 
   Ciclare su tutti gli studenti e stampare 
   per ognuno nome e cognome
   Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente all'array creato al punto 2 inserendo nell’ordine: nome, cognome e età.
 */

 // Descrizione studente
var studente = {
    nome: 'Massimiliano',
    cognome: 'Ambrogio',
    età: '20'
};

// Stampa le proprietà
for (var key in studente) {
    console.log(key + ' ' + studente[key]);
}

// Oggetti studenti 
// var oggetti = [zaino, libro, penna];
