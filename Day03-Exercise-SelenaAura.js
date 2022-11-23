// // soal pemanasan
// let A = 65;
// for(i = 1; i <= A; i++){
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(`BizzBuzz => ${i}`);
//     } else if(i % 3 == 0) {
//         console.log(`Bizz => ${i}`);
//     } else if(i % 5 == 0){
//         console.log(`Buzz => ${i}`);
//     }
// }

// no 1' to display the multiplication table of a given integer
let A = 9;
for(i = 1; i <= A; i++){
    console.log(`${A} * ${i}`);
}


// no 2: check whether a string is a palindrome or not
var string = "kata";
var result = string.split('').reverse();
if (string.split('') == result.join()) {
    console.log(`${string} is palindrome`);
} else {
    console.log(`${string} is not palindrome`);
}


// no 3: convert centimeter to kilometer
var centimeter = 1000;
var kilometer = centimeter / 10000;
console.log(`Length:\n${centimeter} cm = ${kilometer} km`);


// no 4: format number into currency
var number = 1000;
console.log(`Rp. ${number.toLocaleString("id")},00`);


// no 5: remove the first occurence of a given "search string: from a string
var string = "Hello World!";
var search = "ell";
if (string.includes(search)) {
    console.log(string.replace(search, ""));
} else{
    console.log("The string doesn't include the word that you're looking for.");
}


// // no 6: capitalize the first letter of each word in a string that's containing 2 words
// var string = "hello world";
// var splitResult = string.split(' ');
// console.log(splitResult);
// // var upResult = splitResult.toUppercase();
// // console.log(upResult);


// no 7: reverse a string
var string = "string";
var reverseResult = string.split('').reverse();
var joinResult = reverseResult.join();
var replaceResult = joinResult.replaceAll(",", "")
console.log(`${string} can be reversed into ${replaceResult}`);
