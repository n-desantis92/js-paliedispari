// es:n1
// creare una funzione per capire se la parola è palindroma!
// chiedo la parola da verificare e la porto tutta in lowercase!
var parola = prompt("inserisci la parola da controllare");

function palindromi(parolaArg) {

  var parolaReverse = "";

  for (var i = parolaArg.length - 1; i >= 0; i--) {
    parolaReverse += parolaArg[i];
    console.log(parolaReverse);
  }

  if (parolaReverse == parolaArg) {
    alert("è palindromo");
  } else {
    alert("non è palindromo");
  }
};

palindromi(parola);
palindromi("radar");

// oppure

// var parola = prompt("inserisci la parola da controllare");
//
// var i = 0;
// var j = parola.length -1;
// var uguali = true;
// while (uguali && i < j) {
//   if (parola[i] == parola[j]) {
//     uguali = true;
//   }else {
//     uguali = false;
//   }
//   i++;
//   j--;
// }
//
// if (uguali) {
//   alert("è palindromo");
// } else {
//    alert("non è palindromo");
// }
