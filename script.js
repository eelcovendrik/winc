function sumSquared1(number1,number2) {
   return ((number1 * number1) + (number2 * number2)) *
    ((number1 * number1) + (number2 * number2))
 };
 
 const result1 = sumSquared1(2,3);
 console.log(result1);
 
 const sumSquared2 = function(number1, number2) {   
     return ((number1 * number1) + (number2 * number2)) *
    ((number1 * number1) + (number2 * number2))
 }

 const result2 = sumSquared2(2,3);
 console.log(result2);

 const sumSquared3 = (number1, number2) => {   
    return ((number1 * number1) + (number2 * number2)) *
   ((number1 * number1) + (number2 * number2))
}

const result3 = sumSquared2(2,3);
console.log(result3);

 // // Function declaration
 // function sayHello1() {
 //     console.log('Hello 1');
 // }
 // sayHello1();
 
 // // Function expression
 // const sayHello2 = function() {
 //     console.log('Hello 2');
 // };
 // sayHello2();
 
 // //Arrow function (also a function expression)
 // const sayHello3 = () => {
 //     consule.log('Hello 3');
 // }
 // sayHello3();
 
 // const sayHello = () => {
 //     console.log("hello);
 //   };
 
 // const square = number => {
 //     return number * number;
 // };
 
 