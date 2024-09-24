// Integer Reverse 
// Given an Integer, return an integer that is the reverse ordering of numbers.
// e.g. reverse(123) should return 321

function reverse(x) {

    if (x < 0) {
        return -reverse(-x);
    }

    let res = 0;
    while (x > 0) {
        res = res * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return res;
}

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));

// 2nd method

function reverse2(n) {
    const rever = n.toString().split('').reverse().join('');
    // return rever > Math.pow(2, 31) - 1 ? 0 : rever
    return parseInt(rever) * Math.sign(n);

    // if (n < 0) {
    //     return -rever
    // } else {
    //     return rever
    // }
}


console.log(reverse2(123));
console.log(reverse2(-123));
console.log(reverse2(120));
console.log(reverse2(1534236469));