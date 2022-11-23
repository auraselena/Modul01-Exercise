// no.1: function to get the lowest, highest, and average value in the array
// with and without sort function

/**
 * Algoritma:
 * 1. input data berisi array
 * 2. hitung lowest, highest, and average
 * 3. return
 */

 var lowest; var highest; var average; var sum = 0;
 var data = [1000, 9800, 5000, 3769];
 var length = parseInt(data.length);
 function analyze(){
    lowest = Math.min(...data);
    highest = Math.max(...data);
    for(i = 1; i<= length; i++){
        if(i > length){
            continue
        } else{
            sum += data[i];
        }
    }
    average = sum / length;
 }

 analyze(); sort();
 console.log(
    `The lowest number in the array is: ${lowest},
    the highest number is ${highest},
    and the average value is ${average}.`);

 // with sort function
 function sort(){
    result = data.sort();

    return result;
 }

 console.log(sort());

 analyze(); sort();
 console.log(
    `The lowest number in the array is: ${lowest},
    the highest number is ${highest},
    and the average value is ${average}.`);
console.log(`Sort result: ${result}`)

// ------------------------------------------------------------------

// // no 2:
// /**
//  * Algoritma function:
//  * 1. Bikin array dari string
//  * 2. Sediakan variabel selena sebagai hasil split
//  * 3. Bikin untuk menggabungkan tiap kata dari array
//  *    dengan tanda koma sebagai penghubung, lalu and sebelum
//  *    kata terakhir
// */

var string = "Senyum salam sapa";
function takeAword(value){
    var result = [];
    var splitResult = value.split(" ");
    for(i = 0; i < splitResult.length; i++){
        if(i == splitResult.length - 1){
            result.push(` dan ${splitResult[i]}`)
        } else if (i == 0){
            result.push(splitResult[i])
        } else{
            result.push(`, ${splitResult[i]}`)
        }  
        }
    
    var string2 = result.join("")
    return string2;
}

takeAword(string);
console.log(takeAword(string));

// -------------------------------------------------------
// no 3. mengubah words dalam string menjadi array
/**
 * Algoritma:
 * 1. Sediakan string isi words
 * 2. Buat function untuk split string pas ketemu spasi
 */

var words = "Hello World ";
function splitString(value){
    var temp = "";
    var array = [];
    for(var i = 0; i < value.length; i++){
        if(value[i] !== " "){
            temp += value[i];
        } else{
            array.push(temp);
            temp = "";
        }
    }
    if(temp == true){
        array.push(temp);
    }
    return array;
}
var result = splitString(words);
console.log(result);


// ----------------------------------------------------------------------------------------------
// no 4. menjumlahkan 2 array
var a = [1, 2, 3, 4];
var b = [2, 3, 4, 5];
var result = [];

var addResult = (a, b) => {
    if(a.length == b.length){
        for(var i = 0; i < a.length; i++){
            var sum = a[i] + b[i];
            result.push(sum);
        }
    }
    return result;
}
var hasil = addResult(a, b);
console.log(hasil);

// -------------------------------------------------------------------------------------------------

// no 5. add element to THE END OF an array IF that element doesn't exist in that array
var array = ["haha", "hihi", "hehe", "huhu", "hoho"];
var input = "hiks"; var check = 0;

function checkArray(array) {
    array.forEach((element) => {
        if(input == element){
            check += 1;
        }
    });
    if(check == 0){
        array.push(input);
    }
    return array;
}
var result = checkArray(array);
console.log(result);


// -------------------------------------------------------------------------------------------------

// no 6. remove all odd numbers in an array and return a new array contains even numbers
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filteredResult = [];

var filterNumbers = (element) => {
    var oddNumbers = [];
    var evenNumbers = [];
    array.forEach((element) => {
       if(element % 2 == 0){
            evenNumbers.push(element);
        } else {
            oddNumbers.push(element);
        }
    })
    return evenNumbers;
}

console.log(filterNumbers(array));











