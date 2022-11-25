// Exercise 1: menampilkan highest lowest avg dari data student

class Student {
    constructor(name, email, age, score){
        this.name = name,
        this.email = email,
        this.age = Math.floor((new Date() - new Date(age) ) / (1000 * 60 * 60 * 24 * 365)),
        this.score = score
    }
}

// array of student
let studentData = [
    new Student("Eka Kurniawan", "eka@mail.com", "06-30-2001", 70),
    new Student("Dwi Murakami", "dwi@mail.com", "06-30-2002", 80),
    new Student("Trias Politica", "tri@mail.com", "06-30-2003", 90)
]

// console.log(studentData);

// function
let calculate = (array) => {
    let highestScore = array[0].score;
    for(var i = 0; i < array.length; i++){
        if(array[i].score > highestScore){
            highestScore = array[i].score;
        }
    }

    let lowestScore = array[0].score;
    for(var i = 0; i < array.length; i++){
        if(array[i].score < lowestScore){
            lowestScore = array[i].score;
        }
    }

    let totalScore = 0;
    for(var i = 0; i < array.length; i++){
        totalScore += array[i].score;
    }

    let scoreAverage = totalScore / array.length;

    // MENENTUKAN UMUR YANG DITAMPILKAN!!!!
    let oldest = array[0].age;
    let youngest = array[0].age;
    for( var i = 0; i < array.length; i++){
        if(array[i].age < youngest){
            youngest = array[i].age;
        } else if (array[i].age > oldest){
            oldest = array[i].age;
        }
    }

    let totalAge = 0;
    for(var i = 0; i < array.length; i++){
        totalAge += array[i].age;
    }

    let ageAverage = totalAge / array.length;

    let result = `Score\n
    Highest: ${highestScore}\n
    Lowest: ${lowestScore}\n
    Average: ${scoreAverage}\n\n
    Age\n
    Highest: ${oldest}\n
    Lowest: ${youngest}\n
    Average: ${ageAverage}`

    return result;
}

console.log(calculate(studentData));



// Exercise 2 ================================================================
// membuat transaksi

class Product {
    constructor(name, price, qty){
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
}

class Transaction {
    total = 0;
    item = [];

    addToCart(product){
        this.item.push(product);
    }

    cartView() {
        let cart = "My cart:\n";
        for(var i = 0; i < this.item.length; i++){
            cart += `${this.item[i].name} ${this.item[i].qty} pcs - ${this.item[i].price}\n`
        }
        console.log(cart);
    }

    checkOut() {
        let co = "Check Out: \n";
        for(var i = 0; i < this.item.length; i++){
            co += `${this.item[i].name}` + " " + this.item[i].qty * this.item[i].price +`\n`;
            this.total += this.item[i].qty * this.item[i].price;
        }
        co += `Total price: ${this.total}`;
        console.log(co);
    }

    payment(money) {
        let paymentMessage = "";
        let change = 0;
        if(money > this.total){
            change = money - this.total;
            paymentMessage += `Transaction successful.\nTotal price: ${this.total}\nChange: ${change}`;
        } else if (money = this.total){
            paymentMessage += `Transaction successful.\nTotal price: ${this.total}`;
        } else {
            paymentMessage += `Transaction failed.`;
        }
        console.log(paymentMessage);
    }
}

const products =[
    new Product("Biore UV Aqua Rich", 150000, 1),
    new Product("M&S Talcum Powder - Honeysuckle", 200000, 1),
    new Product("Somethinc Browcara - Dark Brown", 65000, 1),
    new Product("Maybelline Superstay - N07", 100000, 1)
];

let transaction = new Transaction();

// add to cart
for(i = 0; i < products.length; i++){
    transaction.addToCart(products[i]);
}
transaction.cartView();
transaction.checkOut();
transaction.payment(600000);