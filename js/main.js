/**
 * 1. Creare un oggetto che descriva uno studente 
 * con le seguenti proprietà: nome, cognome e età. 
 * Stampare attraverso il for..in tutte le proprietà.
   2. Creare un array di oggetti di studenti. 
   Ciclare su tutti gli studenti e stampare 
   per ognuno nome e cognome
   3. Dare la possibilità all’utente attraverso 3 prompt 
   di aggiungere un nuovo oggetto studente all'array 
   creato al punto 2 inserendo nell’ordine: nome, cognome e età.
 */

// Descrizione studente
// var studente = {
//     nome: 'Luca',
//     cognome: 'Rossi',
//     eta: 25
// };

// Stampa le proprietà
// for (var key in studente) {
//     console.log(key + ' ' + studente[key]);
// }

// Oggetti di studenti 
var studenti = [
  {
    nome: 'Simone',
    cognome: 'Vinci',
    eta: 19
  },
  {
    nome: 'Mario',
    cognome: 'Beruti',
    eta: 38 
  },
  {
    nome: 'Martina',
    cognome: 'Nobile',
    eta: 44
  }
];

// for (var i = 0; i < studenti.length; i++) {
//   var studente = studenti[i];

//   // Stampare per ogni studente nome e cognome
//   console.log('Studente ' + (i + 1));
//   console.log('Nome', studente.nome );
//   console.log('Cognome', studente.cognome);
//   console.log('------------');
// }
  
// Utente aggiunge nuovo oggetto all'array sopra
  var nuovoNome = prompt('Inserisci il nome del nuovo studente').trim();
  var nuovoCognome = prompt('Inserisci il cognome del nuovo studente').trim();
  var nuovoEta = parseInt(prompt('Inserisci età del nuovo studente').trim());

// Nuovo studente
studenti.push({
  nome: nuovoNome,
  cognome: nuovoCognome,
  eta: nuovoEta
});

console.log(studenti);
console.table(studenti);
