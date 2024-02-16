const sumAll = function(num1, num2) {
    let total;

    // don't try to sum a range where one value is not a number
    if (num1 < 0 || num2 < 0 || !(isNumber(num1)) || !(isNumber(num2))) {
        return "ERROR";
    }

    let numStart;
    let numEnd;

    // find the smaller number and make it the lower limit
    // if (num1 = num2) {
    //     return num1;
    // }
    
    if(num1 <= num2) {
        numStart = +num1;
        numEnd = +num2;
    } else {
        numStart = +num2;
        numEnd = +num1;
    }

    // for (let i = numStart; i <= numEnd; i++) {
    //     total += i;
    // }

    total = 0;
    
    for (; numStart <= numEnd; numStart++) {
        total += numStart;
    }

    return total;
};

function isNumber(value) {
    return typeof value === 'number';
}

// Do not edit below this line
module.exports = sumAll;
