// no1. membuat map duplicate dengan for loop

// pseudocode duplicate map:
/**
 * Steps:
 * 1. bikin variabel yang ingin diproses
 * 2. bikin function map duplicate dengan 2 input: array dan callback function
 *    a. sediain array kosong untuk menampung hasil map
 *    b. di tiap iterasi, tiap elemen array asal diproses oleh callback function lalu di-push ke array hasil map
 *    c. return hasil
 * 3. bikin funtion callback
 * 4. output: array hasil map
 */

let numbers = [11, 22, 33, 1, 6, 9, 0, 101]; // step 1
let words = ["jajang", "bajuri", "udin", "togar", "komeng"];

function mapDupe(array, cb){ // step 2
    let mapArray = []; // step 2a
    for(i = 0; i < array.length; i++){
        mapArray.push(cb(array[i], i)); // step 2b
    }
    return mapArray;  // step 2c
}

function elementList(array, i = 0){ // step 3
    let list = `${i + 1}. ${array}`;
    
    return list;
}

function multiply(a){ // step 3 juga
    let result = a * 2;
    
    return result;
}

let showList = mapDupe(words, elementList);
let arrMultiply = mapDupe(numbers, multiply)
console.log(showList);  // step 4
console.log(arrMultiply);  // step 4


// no 2. membuat filter duplicate ===============================================================================

/**
 * 1. bikin function callback: mencari bilangan ganjil (input: number, output: true/false)
 * 2. bu=ikin function filter
 *    a. input: array, callback function
 *    b. bikin array kosong untuk menampung hasil filter
 *    c. dalam iterasi sebanyak elemen array, if output callback adalah true, push elemen array ke array kosong hasil filter
 * 3. output: array hasil filter
 */

function findOdd(num){
    if(num % 2 == 1){
        return true;
    }
}

function filterDupe(array, cb){
    let filtered = [];
    for(var i = 0; i < array.length; i++){
        if(cb(array[i]) == true){
            filtered.push(array[i]);
        }
    }
    return filtered;
}

let filteredResult = filterDupe(numbers, findOdd);
console.log(filteredResult);


// no3. membuat duplikat indexOf ================================================================================
// console.log(words.indexOf("bajuri")) == 1;

let gado2 = [1, 2, 3, "kata", 5, 43, 7];
// function callback: menentukan apakah suatu elemen itu string atau bukan
// function findIndexOf untuk mencari index string dalam array

function isString(element){
    if(typeof(element) == "string"){
        return true;
    }
}

function findIndexOf(array, cb){
    let index = "";
    
    for(var i = 0; i < array.length; i++){
        if(cb(array[i]) == true){
            index += i;
        }
    }
    return index;
}

let result = findIndexOf(gado2, isString);
console.log(result);