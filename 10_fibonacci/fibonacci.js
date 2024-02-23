const fibonacci = function(num) {
    if(num < 0 || isNaN(num)) {
        return "OOPS";
    }

    const fibArr = [0];

    fibArr.fill(3, 0, num);

    fibArr[1] = 1;
    fibArr[2] = 1;

    for(let i = 3; i <= num; i++) {
        fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
    };

    return fibArr[num];

};

// Do not edit below this line
module.exports = fibonacci;
