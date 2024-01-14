// Cara import 1
// const rumus = require("./rumus.js");

// console.log(rumus.PI);
// console.log(rumus.pengurangan(5, 2));
// console.log(rumus.penjumlahan(1, 1));
// console.log(rumus.luas(2, 3));


// Cara import 2
const {PI, pengurangan, penjumlahan, luas} = require("./rumus.js");

// console.log(PI);
console.log(luas(2, 3));
console.log(PI);
console.log(penjumlahan(1,3));
console.log(pengurangan(3,2));

