// NOME REPO:  js-fizzbuzz
// DESCRIZIONE:
// Fizz Buzz test:
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// QUINDI OUTPUT sarà tipo:
// 1
// 2
// “Fizz”
// 4
// “Buzz”
// “Fizz”
// 7
// 8
// “Fizz”
// “Buzz”


// Scrivi un programma che stampi i numeri da 1 a 100,

for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
    document.getElementById("stamp").innerHTML += "<li>" + "FizzBuzz" + "</li>";

} else if (i % 5 == 0) {
  console.log("Buzz");
  document.getElementById("stamp").innerHTML += "<li>" + "Buzz" + "</li>";

} else if (i % 3 == 0) {
  console.log("Fizz");
  document.getElementById("stamp").innerHTML += "<li>" + "Fizz" + "</li>";

} else {
  console.log(i);
  document.getElementById("stamp").innerHTML += "<li>" + i + "</li>";
}
}

// OUTPUT
// document.getElementById('stamp').innerHTML =  i;







// if (i === true) {
//   console.log(i, "fizz");
// }
