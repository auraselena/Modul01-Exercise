// no.1
var area = (p, l) => {
    return p * l;
}

// no.2
var perimeter = (p, l) => {
    return 2 * (p + l);
}

// no. 3
var pi = Math.PI;
var diameter = (r) => {
    return 2 * r;
}

var circumference = (r) => {
    return pi * 2 * r;
}

var circleArea = (r) => {
    return pi * Math.pow(r, 2);
}

// no.4
var findSudut = (sudutA, sudutB) => {
    return 180 - (sudutA + sudutB);
}

// no.5
var date = new Date();
// var latestDate = new Date("2022-11-21");
// var previousDate = new Date("1997-10-24");
var dateDifference = (dateA, dateB) => {
    return Math.floor((dateB - dateA) / (1000 * 60 * 60 * 24));
}
// var result = dateDifference(previousDate, latestDate);
// console.log(result);
// console.log(typeof(result));

// no. 6
var input = 400;
var countDays = (input) => {
    var tahun = Math.floor(input / 365);
    var daysLeft = input - (tahun * 365);
    var bulan = Math.floor(daysLeft / 30);
    var daysLeft = daysLeft - (bulan * 30);
    var hari = daysLeft;

    return `${tahun}, ${bulan}, ${hari}`;
}

var result = countDays(400);
console.log(result);

module.exports = {
    area,
    perimeter,
    diameter,
    circumference,
    circleArea,
    findSudut,
    dateDifference,
    countDays
};