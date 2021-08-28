const checkAge = function(age) {
    if (age >= 18) {
        return true;
    }
    return false;
};

const greetings = function(age) {
    adult = checkAge(age);
    console.log(adult)
    if (adult == true) {
        console.log('Hello there');
    } else console.log('Hey kiddo');
};

greetings(17);

const vatCalculation = function(baseprice,vatPercentage) {
    console.log(baseprice);
    console.log(vatPercentage);
    consumerprice =  (1+(vatPercentage/100)) * baseprice;
    return consumerprice;
};

const vatFunction = function(baseprice, vatPercentage) {
    result = vatCalculation(baseprice, vatPercentage);
    console.log(result)
};

vatFunction(200,0);

const basepriceCalculation = function(consumerprice,vatPercentage) {
    console.log('function1 ', consumerprice);
    console.log('function1 ', vatPercentage);
    baseprice =  consumerprice / (1+(vatPercentage/100));
    console.log('function ', baseprice)
    return baseprice;
};

const totalVatCalculation = function(consumerprice,vatPercentage) {
    console.log('fucntion2', consumerprice);
    console.log('function2', vatPercentage);
    totalVat = consumerprice - baseprice
    return totalVat;
};

const basepriceandvatcalculation = function(consumerprice, vatPercentage) {
    baseprice = basepriceCalculation(consumerprice, vatPercentage);
    totalVat = totalVatCalculation(consumerprice, vatPercentage)
    console.log(baseprice, totalVat)
};

basepriceandvatcalculation(200, 21);


// const scream = function() {
//    console.log("Aaaa!")
// }

// scream();

// const makeNoise = function(){
//    scream();
// };

// makeNoise();

// const add = function(numberA, numberB) {
//     return numberA + numberB;
// };

// const eight = add(3,5);
// console.log(eight);

// const doCalculation = function() {
//    const six = add(2,4);
//    console.log(six);
// };

// doCalculation();

// const makePostive = function(number) {
//     console.log('Entering makePositive..');
//     console.log(number);
//     const result = Math.abs(number);
//     console.log('Output: ', result)
//     return result;
// };

// const makeBigger = function(number) {
//     console.log('Entering makeBigger..');
//     console.log(number);
//     if (number < 10) {
//         return 10 + number;
//     }
//     return number;
// };

// const square = function(number) {
//     console.log('Entering square..');
//     console.log(number);
//     return number * number;
// };

// const doComplexCalculation = function(number) {
//     console.log('Entering doComplexCalculation..');
//     console.log(number);
//     const postiveNumber = makePostive(number);
//     const bigNumber = makeBigger(postiveNumber);
//     const squaredNumber = square(bigNumber);
//     return squaredNumber;
// };

// console.log(doComplexCalculation(-1));