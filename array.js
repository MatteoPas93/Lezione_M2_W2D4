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

const prices = [34, 5, 2];
const shippingCost = 50;
let utenteCheEffettuaLAcquisto = amy; //cambia il valore qui per provare se il tuo algoritmo funziona!

let utenti = [];

utenti.push(marco, paul, amy);

for (let i = 0; i < utenti.length; i++) {
  if (utenti[i].isAmbassador === true) {
    console.log(utenti[i].name + " " + utenti[i].lastName + "è un Ambassador");
  } else if (utenti[i].isAmbassador === false) {
    console.log(
      utenti[i].name + " " + utenti[i].lastName + "non è un Ambassador"
    );
  }
}

let utentiAmbassador = [];

for (let i = 0; i < utenti.length; i++) {
  if (utenti[i].isAmbassador === true) {
    utentiAmbassador.push(utenti[i])
  }
}

marco.totaleCarrello = prices[0] * 2 + prices[1] * 2 + prices[2];

if (marco.isAmbassador === true) {
  console.log(
    "Il conto del tuo carrello è di",
    marco.totaleCarrello,
    "ridotto a ",
    marco.totaleCarrello - (marco.totaleCarrello / 100) * 30,
    "con il tuo sconto Ambassador. Il tuo conto totale con i costi di spedizione è di",
    marco.totaleCarrello - (marco.totaleCarrello / 100) * 30 + shippingCost
  );
} else if (marco.totaleCarrello < 100) {
  console.log(
    "Il conto del tuo carrello è di",
    marco.totaleCarrello,
    "ridotto a ",
    marco.totaleCarrello - (marco.totaleCarrello / 100) * 30,
    "con il tuo sconto Ambassador."
  );
} else if (marco.totaleCarrello > 100) {
  console.log(
    "Il conto del tuo carrello è di",
    paul.totaleCarrello,
    "Congratulazioni, la tua spedizione è gratuita."
  );
}

paul.totaleCarrello = prices[0] * 3 + prices[2] * 3;

if (paul.isAmbassador === true) {
  console.log(
    "Il conto del tuo carrello è di",
    paul.totaleCarrello,
    "ridotto a ",
    paul.totaleCarrello - (paul.totaleCarrello / 100) * 30,
    "con il tuo sconto Ambassador."
  );
} else if (paul.totaleCarrello < 100) {
  console.log(
    "Il conto del tuo carrello è di ",
    paul.totaleCarrello + shippingCost,
    "compresi i",
    shippingCost,
    "di spedizione."
  );
} else if (paul.totaleCarrello > 100) {
  console.log(
    "Il conto del tuo carrello è di",
    +paul.totaleCarrello,
    "Congratulazioni, la tua spedizione è gratuita."
  );
}

amy.totaleCarrello = prices[0] + prices[1] * 4;

if (amy.isAmbassador === true) {
  console.log(
    "Il conto del tuo carrello è di",
    amy.totaleCarrello,
    "ridotto a ",
    amy.totaleCarrello - (amy.totaleCarrello / 100) * 30,
    "con il tuo sconto Ambassador."
  );
} else if (amy.totaleCarrello < 100) {
  console.log(
    "Il conto del tuo carrello è di",
    amy.totaleCarrello,
    "Il tuo conto totale con i costi di spedizione è di",
    amy.totaleCarrello + shippingCost
  );
} else if (amy.totaleCarrello > 100) {
  console.log("Congratulazioni, la tua spedizione è gratuita.");
}
