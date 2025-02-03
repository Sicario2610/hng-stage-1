// To check if it is a prime number
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

//To check if it is a perfect number
const isPerfect = (num) => {
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }
    return sum === num && num !== 1;
};

//To check if it is an Armstrong number
const isArmstrong = (num) => {
    const digits = num.toString().split('').map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
    return sum === num;
};

//To sum up the digits
const digitSum = (num) => num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);

// To fill the properties Array
const getProperties = (num) => {
    let properties = num % 2 === 0 ? ["even"] : ["odd"];
    if (isArmstrong(num)) properties.unshift("armstrong");
    return properties;
};

module.exports = { isPrime, isPerfect, digitSum, getProperties };
