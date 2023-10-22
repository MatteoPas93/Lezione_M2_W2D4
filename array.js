// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
  totaleCarrello: 0,
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
  totaleCarrello: 0,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
  totaleCarrello: 0,
};

const matteo = {
  name: "Matteo",
  lastName: "Pascucci",
  isAmbassador: true,
  totaleCarrello: 0,
};

const prices = [34, 5, 2];
const shippingCost = 50;
let utenteCheEffettuaLAcquisto = amy; //cambia il valore qui per provare se il tuo algoritmo funziona!

// Creo un array, al cui interno andrò a pushare gli utenti.

let utenti = [];

utenti.push(marco, paul, amy, matteo);

// Creo un ciclo per dividere gli utenti "ambassador" da quelli "non ambassador".

for (let i = 0; i < utenti.length; i++) {
  if (utenti[i].isAmbassador === true) {
    console.log(utenti[i].name + " " + utenti[i].lastName + " è un Ambassador");
  } else if (utenti[i].isAmbassador === false) {
    console.log(
      utenti[i].name + " " + utenti[i].lastName + " non è un Ambassador"
    );
  }
}

// Carrello degli utenti con i vari prodotti all'interno, differenti per ogni utente. In base ai costi dei prodotti e alla loro somma, l'algoritmo stampera differenti opzioni.
// Se il totale sarà superiore a 100, non sarà aggiunto il costo di spedizione.
// Se il totale sarà inferiore a 100, saranno aggiunti 50 di spedizione.
// Per i clienti ambassador, dopo aver effettuato uno sconto del 30%, se il totale sarà inferiore a 100 sarà aggiunto il costo di speizione.

utenti[0].totaleCarrello = prices[0] * 2 + prices[1] * 2 + prices[2];
utenti[1].totaleCarrello = prices[0] * 5 + prices[2] * 3;
utenti[2].totaleCarrello = prices[0] + prices[1] * 4;
utenti[3].totaleCarrello = prices[0] * 3 + prices[2] * 2;

if (utenti[0].isAmbassador === true) {
  console.log(
    "Il conto del tuo carrello è di",
    utenti[0].totaleCarrello,
    "ridotto a",
    utenti[0].totaleCarrello - (utenti[0].totaleCarrello / 100) * 30,
    "con il tuo sconto Ambassador. Il tuo conto totale con i costi di spedizione è di",
    utenti[0].totaleCarrello -
      (utenti[0].totaleCarrello / 100) * 30 +
      shippingCost
  );
} else if (utenti[0].totaleCarrello < 100) {
  console.log(
    "Il conto del tuo carrello è di",
    utenti[0].totaleCarrello,
    "ridotto a ",
    utenti[0].totaleCarrello - (utenti[0].totaleCarrello / 100) * 30,
    "con il tuo sconto Ambassador."
  );
} else if (utenti[0].totaleCarrello > 100) {
  console.log(
    "Il conto del tuo carrello è di",
    utenti[0].totaleCarrello,
    "Congratulazioni, la tua spedizione è gratuita."
  );
}

if (utenti[1].isAmbassador === true) {
  console.log(
    "Il conto del tuo carrello è di",
    utenti[1].totaleCarrello,
    "ridotto a ",
    utenti[1].totaleCarrello - (utenti[1].totaleCarrello / 100) * 30,
    "con il tuo sconto Ambassador."
  );
} else if (utenti[1].totaleCarrello < 100) {
  console.log(
    "Il conto del tuo carrello è di",
    utenti[1].totaleCarrello,
    "Il tuo conto totale con i costi di spedizione è di",
    utenti[1].totaleCarrello + shippingCost
  );
} else if (utenti[1].totaleCarrello > 100) {
  console.log(
    "Il conto del tuo carrello è di",
    utenti[1].totaleCarrello,
    "Congratulazioni, la tua spedizione è gratuita."
  );
}

if (utenti[2].isAmbassador === true) {
  console.log(
    "Il conto del tuo carrello è di",
    utenti[2].totaleCarrello,
    "ridotto a ",
    utenti[2].totaleCarrello - (utenti[2].totaleCarrello / 100) * 30,
    "con il tuo sconto Ambassador."
  );
} else if (utenti[2].totaleCarrello < 100) {
  console.log(
    "Il conto del tuo carrello è di",
    utenti[2].totaleCarrello,
    "Il tuo conto totale con i costi di spedizione è di",
    utenti[2].totaleCarrello + shippingCost
  );
} else if (utenti[2].totaleCarrello > 100) {
  console.log("Congratulazioni, la tua spedizione è gratuita.");
}

if (utenti[3].isAmbassador === true) {
  console.log(
    "Il conto del tuo carrello è di",
    utenti[3].totaleCarrello,
    "ridotto a ",
    utenti[3].totaleCarrello - (utenti[3].totaleCarrello / 100) * 30,
    "con il tuo sconto Ambassador. Il tuo conto totale con i costi di spedizione è di",
    utenti[3].totaleCarrello -
      (utenti[3].totaleCarrello / 100) * 30 +
      shippingCost
  );
} else if (utenti[3].totaleCarrello < 100) {
  console.log(
    "Il conto del tuo carrello è di",
    utenti[3].totaleCarrello,
    "ridotto a ",
    utenti[3].totaleCarrello - (utenti[3].totaleCarrello / 100) * 30,
    "con il tuo sconto Ambassador."
  );
} else if (utenti[3].totaleCarrello > 100) {
  console.log(
    "Il conto del tuo carrello è di",
    utenti[3].totaleCarrello,
    "Congratulazioni, la tua spedizione è gratuita."
  );
}

// Creo un secondo array contenente solamente gli utenti ambassador.

let utentiAmbassador = [];

for (let i = 0; i < utenti.length; i++)
  if (utenti[i].isAmbassador === true) {
    utentiAmbassador.push(utenti[i]);
  }
console.log(utentiAmbassador);
