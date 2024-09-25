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

function findMaxChar(str) {
    // Step 1: Create an object to store the frequency of each character
    const charMap = {};

    // Step 2: Iterate through the string and update the frequency of each character
    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    // Step 3: Find the character with the maximum frequency
    let maxChar = '';
    let maxCount = 0;
    for (let char in charMap) {
        if (charMap[char] > maxCount) {
            maxCount = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

// Example usage:
const inputString = "javascript";
const maxChar = findMaxChar(inputString);
console.log(`The maximum occurring character is: ${maxChar}`);