// syarat testing: masukkan semua ke dalam 1 function dulu
// file kodingan asli dipisah sama file yang mau di-testing
// debugging: pemeriksaan per baris saat penulisan program; manual testing
// sedangkan jest tes outputnya aja setelah penulisan programnya beres

let add = (numA, numB) => {
    return numA + numB;
}

let multiply = (numA, numB) => {
    return numA * numB;
}

module.exports = {
    add,
    multiply
};