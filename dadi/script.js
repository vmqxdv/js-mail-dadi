/*

  Gioco dei dadi
  Generare un numero random da 1 a 6, sia per il giocatore
  sia per il computer.
  Stabilire il vincitore, in base a chi fa il punteggio più alto.
  
  Bonus
  Invece di generare il numero random per l'utente, chiedilo
  con un prompt!

*/

const minRoll = 1;
const maxRoll = 6;

const userName = prompt('Inserisci un username:');
const userDiceResult = getRandomNumber(minRoll, maxRoll);

const computerDiceResult = getRandomNumber(minRoll, maxRoll);




function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};