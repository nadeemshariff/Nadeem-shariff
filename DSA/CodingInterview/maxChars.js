// Maximum Characters

function maxChars(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Create an object to store the frequency of each character
    const charFreq = {};
    for (const char of str) {
        charFreq[char] = (charFreq[char] || 0) + 1;
    }

    // Find the character with the highest frequency
    let maxChar = '';
    let maxFreq = 0;
    for (const char in charFreq) {
        if (charFreq[char] > maxFreq) {
            maxChar = char;
            maxFreq = charFreq[char];
        }
    }

    return maxChar;
}
console.log(maxChars('nsaknfakn'));

// 2nd method

function maxCharacter(){
    
}