// no 5 exercise day01
const date = new Date();
let latestDate = new Date("2022-10-24");
// console.log(date1);
let previousDate = new Date("1997-10-24");
let dateDifference = latestDate - previousDate;
console.log(`Difference between those dates: ${dateDifference} days`);
console.log(typeof(previousDate));

// // no 1: konversi suhu dari celcius ke fahrenheit
// var temperature_in_celcius = 24;
// var result_in_fahrenheit = temperature_in_celcius * (9 / 5) + 32;
// console.log(`${temperature_in_celcius} Celcius = ${result_in_fahrenheit} Fahrenheit.`);

// // no 2: cek ganjil/genapnya bilangan
// let number = 1002;
// if (number % 2 == 0) {
//     console.log(`${number} is an even number.`);
// } else {
//     console.log(`${number} is an odd number.`);
// }

// // no 3: cek prima/enggaknya bilangan
// let number = 12, a = 0;
// for (let i = 1; i <= number; i++) {
//     var result = number / i;
//     if (result = 1) {
//         a++;
//     } else if(e=result = number) {
//         a++;
//     }
// }
// if (a == 2) {
//     console.log(`${number} is a prime number`);
// } else {
//     console.log(`${number} is not a prime number`);
// }

// // no 4: find the sum of the numbers, starts from 1 to N
// let N = 5;
// var result = 0;
// for (let i = 1; i <= N; i++){
//     result += i;
// }
// console.log(`Sum of 1 to ${N} =`, result);

// // no 5: mencari faktorial dari suatu angka
// let N = 5;
// var result = 1;
// for (let i = 1; i <= N; i++){
//     result *= i;
// }
// console.log(`Factorial of ${N} =`, result);

// // // no 6: print the first N fibonacci numbers
// // saya bingung kak kalau nggak pakai array............... T___T
// // tapi materi array javascript juga belum full saya selesaikan.. </3