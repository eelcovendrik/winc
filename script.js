const age = 20;
const isFemale = true;
const driverStatus = "bob";
const firstName = "Kees";
const totalAmount = 26;

if (age > 18) {
    console.log("Deze persoon mag naar binnen");
} else {
    console.log("Helaas, je bent te jong. Je wordt vriendelijk verzocht buiten te blijven");
}

if (isFemale) {
    console.log("Je ticket is geldig voor Ladies Night");
} else {
    console.log("Je ticket is niet geldig voor Ladies Night");
}

if (driverStatus == "bob") {
    console.log("Deze persoon mag rijden");
} else {
    console.log("Deze persoon mag niet rijden");
}

if (age >= 18 && age <= 25 ) {
    console.log("Je krijgt 50% korting");
} else {
    console.log("Je krijgt helaas geen korting");
}

if (firstName == "Bram" || firstName == "Sarah") {
    console.log("Je krijgt een gratis biertje van ons");
} else {
    console.log("Helaas, je krijgt geen gratis bier van ons");
}

if (totalAmount > 100) {
    console.log("Je krijgt een gratis fles champagne");
} else if (totalAmount > 50) {
    console.log("Je krijgt een gratis porties nachos");
} else if (totalAmount > 25) {
    console.log("Je krijgt gratis bitterballen");
} else {
    console.log("Je krijgt geen niks");
}
