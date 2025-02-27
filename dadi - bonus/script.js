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

let stopLoop = false;

let userWins = 0;
let computerWins = 0;
let tie = 0;

let totalMatchesNum = 0;

while (!stopLoop) {
  const userDiceResult = Number(prompt('Inserisci un numero da 1-6 per provare a battere il Computer:'));

  if (isNaN(userDiceResult) || userDiceResult < 1 || userDiceResult > 6) {
    alert(`"${userDiceResult}" non è un valore valido. Riprova.`);
    continue;
  };
  
  const computerDiceResult = getRandomNumber(minRoll, maxRoll);
  
  let winnerText;

  if (userDiceResult > computerDiceResult) {
    winnerText = `${userName} vince con un ${userDiceResult}!\n\nContro il ${computerDiceResult} di Computer.`;
    userWins += 1;
  } else if (computerDiceResult > userDiceResult) {
    winnerText = `Computer vince con un ${computerDiceResult}!\n\nContro il ${userDiceResult} di ${userName}.`;
    computerWins += 1;
  } else {
    winnerText = 'Pareggio!';
    tie += 1;
  };
  
  alert(winnerText);

  totalMatchesNum += 1;
  stopLoop = !confirm('Vuoi giocare ancora?');
};


const overallWinner = 
  userWins > computerWins ? userName :
  computerWins > userWins ? 'Computer' :
  'Pareggio';

alert(
  `Punteggio finale:\n\n${userName}: ${userWins}\nComputer: ${computerWins}\nPareggi: ${tie}\n\nNumero di match: ${totalMatchesNum}\n\nVincitore: ${overallWinner === 'Pareggio' ? 'Pareggio' : overallWinner}`
)


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};