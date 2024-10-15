function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}

console.log(pow(2, 3)); //  8
console.log(pow(5, 2)); // 25
console.log(pow(3, 0)); // 1
console.log(pow(2, 4)); //16
console.log(pow(-2, 3)); //-8
console.log(pow(-3, 2)); //9