var person = prompt("Welkom wat is je naam?");

if (person != null) {
    console.log( "Hey " + person);
}

var number = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...")

number = parseInt(number)

randomNumber = Math.floor(Math.random() * 25)

while (number != randomNumber) {

  console.log("Dat is niet correct");
  var number = prompt("Probeer het nog een keer")
  number = parseInt(number)

}

console.log("Gefeliciteerd je hebt gewonnen");
console.log("Dag " + person + " tot de volgende keer");