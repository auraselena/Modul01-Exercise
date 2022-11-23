// no 2 FizzBuzz
var n = 30;
function FizzBuzz(n) {
    for(i = 1; i <= n; i++){
        if (n % 3 == 0 && n % 5 == 0) {
            print = `FizzBuzz`
        } else if (n % 3 == 0) {
            print = `Fizz`
        } else if (n % 5 == 0) {
            print = `Buzz`
        } else {
            continue
        }
        return console.log(print);
    }
    
  }
  

// // no 3: calculate BMI
// function bmi(w, h) {
//     let result = w / h;
//     if (result > 39.9) {
//         return console.log("obesity");
//     } else if (result >= 30 && result <= 39.9) {
//         return console.log("very overweight");
//     } else if (result >= 25.0 && result <= 29.9) {
//         return console.log("overweight");
//     } else if (result >= 18.5 && result >= 24.9) {
//         return console.log("ideal");
//     } else {
//         return console.log("less weight");
//     }
//   }



//  no 5: gaboleh pake split. harus bikin function yang mofikasi cara kerjanya kayak split ok
let splitCloning = (text, separator){

}

console.log(splitCloning("Hello World Bro!", 'l'));
console.log(splitCloning("Hello World Bro!".split('l'));