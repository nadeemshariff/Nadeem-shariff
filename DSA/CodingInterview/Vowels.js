// Find Vowels with test cases
function findVowels(str) {
    const vowels = "aeiou";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(findVowels("hello"))