// import function
const { area,
    perimeter,
    diameter,
    circumference,
    circleArea,
    findSudut,
    dateDifference,
    countDays } = require('./Day01-function.js');

test('No 1: Rectangle area', () => {
    // write testing code
    expect(area(4, 3)).toBe(12);
});

test('No 2: Perimeter', () => {
    // write testing code
    expect(perimeter(1, 2)).toBe(6);
});

test('No 3a: Diameter', () => {
    // write testing code
    expect(diameter(2)).toBe(4);
});

test('No 3b: Circumference', () => {
    // write testing code
    expect(circumference(2)).toBe(12.566370614359172);
});

test('No. 3c: Circle area', () => {
    // write testing code
    expect(circleArea(2)).toBe(12.566370614359172);
});

test('No 4: Mencari sudut segitiga', () => {
    // write testing code
    expect(findSudut(103, 41)).toBe(36);
});

test('No 5: Date difference', () => {
    // write testing code
    expect(dateDifference(new Date("2022-11-21"), new Date("2022-11-24"))).toBe(3);
});

test('No 6: countDays', () => {
    // write testing code
    expect(countDays(400)).toBe("1, 1, 5");
});