const checkBiggerThan100 = function(number) {
if (number > 100) {
    return "true";
} return "false";
}

const result = checkBiggerThan100(500);
console.log(result);

const bouncerBot = function (maximumNumber, currentNumber, age) {
    if (currentNumber > maximumNumber) {
        return "it's too busy now, come back later"
    } else if (age < 18) {
        return "this is a club for adults";
    }
    else return "come in";
}

const answer = bouncerBot(70, 80, 17);
console.log(answer);

const averageCalculation = function (number1, number2, number3, number4, number5) {
    average = (number1 + number2 + number3 + number4 + number5) / 5;
    averageRound = Math.round(average);
    return averageRound;
}

const resultAverageCalc = averageCalculation(2, 2, 5, 2, 2);
console.log(resultAverageCalc);
