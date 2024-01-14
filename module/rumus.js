const PI = 3.14;

const penjumlahan = (a, b) => a + b;

const pengurangan = (a, b) => a - b;

const luas = (p, l) => p * l;

// Exports cara 1
// module.exports.PI = PI;
// module.exports.penjumlahan = penjumlahan;
// module.exports.pengurangan = pengurangan;
// module.exports.luas = luas;


// Exports cara 2
const math = {
    PI, penjumlahan, pengurangan, luas
};
module.exports = math;