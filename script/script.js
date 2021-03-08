// es:n1
// creare una funzione per capire se la parola è palindroma!

var parola = toLowerCase(prompt("inserisci la parola da controllare"));

function palindromo(parola) {

  for (var i = parola.length; i >= 0; i--) {
    var parolaReverse += parola[i].toString();
    console.log(parolaReverse)
  }
}
