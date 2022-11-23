// // no.1: find intersection within 2 objects

// let objA = {
//     a : 1,
//     b : 2
// }

// let objB = {
//     a : 1,
//     c : 3
// }

// function getIntersection(objA, objB){
//     var result = {};
//     for(let key of Object.keys(objA)){
//         if(objA[key] == objB[key]){
//             result[key] = objA[key];
//         }
//     }
//     return result;
// }

// let intersection = getIntersection(objA, objB);
// console.log(intersection);


// no.2 merge two array of student data and remove duplicate data ==================================
let array1 = [
    {name: "Student 1", email: "student1@mail.com"},
    {name: "Student 2", email: "student2@mail.com"}
]

let array2 = [
    {name: "Student 1", email: "student1@mail.com"},
    {name: "Student 3", email: "student3@mail.com"}
]


function checkDupe(arr1, arr2){

    let arrayCombine = [...arr1, ...arr2];
    for(var i = 0; i < arrayCombine.length; i++){
            for(var j = 0; j < arrayCombine.length; j++){
                if(arrayCombine[i] == arrayCombine[j]){
                    // arrayCombine.splice(j, 1);
                }
            }
        }

    return arrayCombine;
}

var result = checkDupe(array1, array2);
console.log(result);


// const arrayCombine = [...array1, ...array2]; // --> array1 + array2 atau [...obj1, ...obj2, "haha"]

// const arrayReduce = Array.from( // buat ilangin duplikat
//   arrayCombine.reduce((map, obj) => map.set(obj.name, obj), new Map()).values()
// );
// console.log("Merged array:", arrayReduce);

// let result = checkDupe(array1, array2);
// console.log(result);
