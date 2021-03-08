// es:n2
/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

var sceltaUtente = prompt("inserisci pari o dispari");

if (sceltaUtente == "pari" || sceltaUtente == "dispari") {
  var sceltaNumero = parseInt(prompt("inserisci un numero da 1 a 5"));
  // genero numero random di cpu
  function cpuRandom(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
  var cpu = cpuRandom(1, 5);
  console.log(cpu);

  // sommo i due numeri
  var somma = sceltaNumero + cpu;
  alert("il numero è: " + somma);
  console.log(somma);

  // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
  function PariDispari(risultato) {
    if ( risultato % 2 == 0) {
      return "pari";
    } else {
      return "dispari";
    }
  }

  var risultato = PariDispari(somma);
  console.log(risultato);

  if (risultato == sceltaUtente) {
    alert("hai vinto");
  } else {
    alert("hai perso il cpu è piu fortunato di te!!!");
  }

}else {
  alert("inserisci pari o dispari");
}
