/*

  Gioco dei dadi
  Generare un numero random da 1 a 6, sia per il giocatore
  sia per il computer.
  Stabilire il vincitore, in base a chi fa il punteggio più alto.
  
  Bonus
  Invece di generare il numero random per l'utente, chiedilo
  con un prompt!

*/


const userName = prompt('Inserisci un username:');
const userDiceResult = getRandomNumber(1, 6);

const computerDiceResult = getRandomNumber(1, 6);




function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};