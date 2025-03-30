const counter = (function () {
    let count = 0;

    return function (n) {
        if (n !== undefined) {
            count = n;
        }
        return count++;
    };
})();

console.log(counter()) // 0
console.log(counter()) // 1
console.log(counter(100)) // 100
console.log(counter()) // 101
console.log(counter()) // 102
console.log(counter(500)) // 500
console.log(counter()) // 501
console.log(counter()) // 502
console.log(counter(0)) // 0
console.log(counter(0)) // 0
console.log(counter()) // 1



const counterFactory = (function () {
    let counter = 0;

    return {
        value(n) {
            if (n !== undefined) {
                counter = n
            }
            return counter;
        },
        increment() {
            counter++;
        },
        decrement() {
            counter--;
        },
    };

})();

console.log(counterFactory.value()); // 0
counterFactory.increment();
counterFactory.increment();
counterFactory.increment();
console.log(counterFactory.value()); // 3
counterFactory.decrement();
counterFactory.decrement();
console.log(counterFactory.value()); // 1
console.log(counterFactory.value(100)); // 100
counterFactory.decrement();
console.log(counterFactory.value()); // 99
console.log(counterFactory.value(200)); // 200
counterFactory.increment();
console.log(counterFactory.value()); // 201



const myPrint = (a, b, res) => `${a}^${b}=${res}`
const myPow = (a, b, myPrint) => {
    if (b === 0) return myPrint(a, b, 1);

    if (b < 0) return myPrint(a, b, 1 / myPow(a, -b, (_, __, r) => r));
    const result = a * myPow(a, b - 1, (_, __, r) => r);
    return myPrint(a, b, result);
};

console.log(myPow(3, 4, myPrint)); // 3^4=81
console.log(myPow(2, 3, myPrint)); // 2^3=8
console.log(myPow(2, 0, myPrint)); // 2^0=1
console.log(myPow(2, -2, myPrint)); // 2^-2=0.25



const list = [12, 23, 100, 34, 56, 9, 233]
const myMax = (arr) => {
    return Math.max.apply(null, arr)
}

console.log(myMax(list)); // 233



const myMul = (a, b) => {
    return a * b
};



const myDouble = (n) => {
    return myMul.bind(null, 2)(n);
};

console.log(myDouble(3)) // = myMul(2, 3) = 6
console.log(myDouble(4)) // = myMul(2, 4) = 8
console.log(myDouble(5)) // = myMul(2, 5) = 10



const myTriple = (n) => {
    return myMul.bind(null, 3)(n);
};

console.log(myTriple(3)) // = myMul(3, 3) = 9
console.log(myTriple(4)) // = myMul(3, 4) = 12
console.log(myTriple(5)) // = myMul(3, 5) = 15
