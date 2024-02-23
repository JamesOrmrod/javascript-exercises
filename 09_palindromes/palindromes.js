const palindromes = function (str) {
    str = str.toLowerCase();
    const chars = str.split("");
    const cleanedChars = chars.filter(isLetter);
    
    if (cleanedChars.length % 2 === 0) {
        let firstHalf = cleanedChars
                            .slice(0, cleanedChars.length / 2)
                            .join();

        let secondHalf = cleanedChars
                            .slice(cleanedChars.length / 2)
                            .reverse()
                            .join();

        return firstHalf === secondHalf;

    } else {
        let firstHalf = cleanedChars
                            .slice(0, (cleanedChars.length - 1) / 2)
                            .join();

        let secondHalf = cleanedChars
                            .slice((cleanedChars.length + 1) / 2)
                            .reverse()
                            .join();

        return firstHalf === secondHalf;
    }
};

function isLetter(char) {
    return (/[a-zA-Z0-9]/).test(char);
}

// Do not edit below this line
module.exports = palindromes;
