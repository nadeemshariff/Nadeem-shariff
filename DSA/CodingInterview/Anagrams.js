//  Anagrams
// Given two strings, write a function to determine if they are anagrams of each other
function anagrams (strA, strB){
    const charMapA = buildCharMap(strA);
    const charMapB = buildCharMap(strB);

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false;
    }

    for (const char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
            return false;
        }
    }

    return true;

    // // Another solution
    // if (strA.length !== strB.length) {
    //     return false;
    // }

    // const charMapA = buildCharMap(strA);
    // const charMapB = buildCharMap(strB);

    // for (const char in charMapA) {
    //     if (charMapA[char] !== charMapB[char]) {
    //         return false;
    //     }
    // }

    // return true;


}

    // Helper Functions are created for compartamenised code 
function buildCharMap(str){
    const charMap ={};
    
    for (const char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

console.log(anagrams('rail safety', 'fairy tales'));
console.log(anagrams('listen', 'silent'));
console.log(anagrams('Hello there', 'Bye there')); 