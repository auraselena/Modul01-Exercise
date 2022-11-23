// format penamaan file testing: bisa namafile.test.js atau namafile.spec.js
// yang paling umum yang namafile.test.js
// file yang mau di-test diekspor dulu baru diimpor ke file testing ini

// import function
const { add, multiply } = require('./Day12');


// Format code: 1 testing menjalankan umumnya 1 fungsi
// test('title_testing', () => {
//     // write testing code
//     expect(fungsi_testing).keywordMatching()
// })

// keywordMatching()
// .toBe(value) : untuk ngetes apakah output yang diberikan sesuai dengan yang diharapkan
// tobe ini dipakai untuk tipe data primitif (string number, boolean)

// untuk data non primitif (array, object)
// keywordMatching()
// .toEqual(value)


// Running testing file di terminal
// jest --config=config.json namafile
test('Test add function', () => {
    // write testing code, correct
    expect(add(10, 5)).toBe(15);
    // wrong
    expect(add(10, 5)).toBe(6);
});

test('Test add function', () => {
    // write testing code
    expect(multiply(10, 5)).toBe(50);
});