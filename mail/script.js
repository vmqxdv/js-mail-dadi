/*
 
  Mail
  
  - Crea una lista di email di invitati ad una festa.
  - Chiedi all’utente la sua email, controlla che sia 
  nella lista di chi può accedere, stampa un 
  messaggio appropriato sull’esito del controllo, 
  utilizzando un ciclo for.
  
  Non è consentito usare nessun metodo proprio degli 
  array (come includes, per esempio).
  Si può fare? Certo che si basta ragionare un po’.
  Nota:
  Non è necessario provvedere alla validazione delle email

 */


const validEmails = [
  'valerioquintilio@gmail.com',
  'albertocadorin@hotmail.it',
  'marcorocco@yahoo.com',
  'michelangelomusco@libero.it',
  'valeriodibiagio@gmail.com',
];


let inputEmail;
let isValidEmail = false;

while (!isValidEmail) {
  inputEmail = prompt('Inserisci la tua email per l\'identificazione');

  isValidEmail = validEmails.indexOf(inputEmail) >= 0;

  if (!isValidEmail) {
    alert(`"${inputEmail}" non è presente nella lista degli invitati. Riprova.`);
  };
};

alert('Email corretta!');