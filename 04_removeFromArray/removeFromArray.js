const removeFromArray = function(origArray, ...removeArray) {
    for (let i = 0; i < removeArray.length; i++) {
        while (origArray.indexOf(removeArray[i]) >= 0) {
            origArray.splice(origArray.indexOf(removeArray[i]), 1);
        }
    }
    return origArray;
};

// Do not edit below this line
module.exports = removeFromArray;
