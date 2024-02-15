const repeatString = function(string, num) {
    // create an empty string to house the concatentation
    fullString = "";
    
    // can't repeat a negative number of times, so return ERROR
    if (num < 0) {
        return "ERROR";
    }
    
    // loop through concatenating the string on the end
    for (let i = 0; i < num; i++) {
        fullString += string;
    }
    return fullString;
};

// Do not edit below this line
module.exports = repeatString;
