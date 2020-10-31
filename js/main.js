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
var studente = {
    Nome: 'Luca',
    Cognome: 'Rossi',
    Età: '25'
};

// Stampa le proprietà
for (var key in studente) {
    console.log(key + ' ' + studente[key]);
}

// Oggetti di studenti 
var studenti = {
  nome: ['Mario', 'Luca', 'Martina'],
  cognome: ['Beruti', 'Vinci', 'Nobile'],
};

// Stampare per ogni studente nome e cognome
console.log(studenti.nome, studenti.cognome);
  
// Utente aggiunge nuovo oggetto all'array sopra
  var nomeStudente = (prompt('Inserisci nome').trim());
  var cognomeStudente = (prompt('Inserisci cognome').trim());
  var etaStudente = (prompt('Inserisci età').trim());

// Nuovo studente
console.log('Nome: ' + nomeStudente, 'Cognome: ' + cognomeStudente, 'Età: ' + etaStudente);

