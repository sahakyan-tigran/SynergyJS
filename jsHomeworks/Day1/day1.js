//finding max from 3numbers
function findMax(a, b, c) {
    let max = (a >= b) ? a : b;
    return (max >= c) ? max : c;
}

//finding surface for circle
function calcSurface(radius) {
    return radius * radius * 3.14;
}

//get decimal part of number
function getDecimal(num) {
    return (num + "").split('.')[0];
}

//get n-th fibonacci number
function fib(n) {
    if (n === 1) {
        return 0;
    }
    if (n === 2) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

//random integer in range [min,max]
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//pythagoreanFunction
function pythagoreanFunction(a, b) {
    return Math.sqrt(a * a + b * b);
}
