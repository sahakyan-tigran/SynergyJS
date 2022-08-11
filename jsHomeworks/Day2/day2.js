//clone array
function cloneArray(arr) {
    let clone = [];
    for (let i = 0; i < arr.length; i++) {
        clone.push(arr[i]);
    }
    return clone;
}

//sum and product arrays
function calcSumProduct(arr) {
    let sum = 0, product = 1;
    arr.forEach(element => {
        sum += element;
        product *= element
    });
    console.log(`sum = ${sum} ,product = ${product}`);
}

//first n elements of array
function firstNElements(n, arr) {
    if (n > arr.length) {
        n = arr.length;
    }
    for (let i = 0; i < n; i++) {
        console.log(arr[i]);
    }
}

//split string into words
function splitString(str) {
    return str.split(" ");
}

//array or not
function isArray(input) {
    return (toString.call(input) === "[object Array]");
}

//get function name
function a() {
    console.log(arguments.callee.name);
}

//is weekend or not
function isWeekend(date) {
    let day = new Date(date);
    return day.getDay() === 0 || day.getDay() === 6;
}

//camelize str
function camelize(str) {
    let str1 = str.split("-");
    let result = "";
    for (let i = 0; i < str1.length; i++) {
        let a = str1[i];
        result += a.charAt(0).toUpperCase() + a.slice(1);
    }
    return result;
}

//getSums arr
function getSums(arr) {
    let newArr = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= i; j++) {
            sum += arr[j];
        }
        newArr.push(sum);
        sum = 0;
    }
    return newArr;
}

//JS reduce
function myReduce(array, callback, initializer) {
    let accumulator = (initializer === undefined) ? 0 : initializer;

    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]);
    }
    return accumulator;
}

//merge two arrays and remove duplicates
function merge(arr1, arr2) {
    let c = arr1.concat(arr2);
    return c.filter((item, pos) => c.indexOf(item) === pos)
}

//deep copy
function deepClone(obj) {
    let deepClonedObj = [];
    for (let objKey in obj) {
        if (obj[objKey] instanceof Object) {
            deepClonedObj[objKey] = deepClone(obj[objKey]);
        } else {
            deepClonedObj[objKey] = obj[objKey];
        }
    }
    return deepClonedObj;
}

//are equal
function equals(obj1, obj2) {
    for (let obj1Key in obj1) {
        if (obj1[obj1Key] instanceof Object) {
            if (!equals(obj1[obj1Key], obj2[obj1Key])) {
                return false;
            }
        } else {
            if (obj1[obj1Key] !== obj2[obj1Key]) {
                return false;
            }
        }
    }
    return true;
}

