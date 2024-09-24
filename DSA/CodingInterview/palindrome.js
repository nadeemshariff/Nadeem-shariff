// Palindrome
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Direct solution
function Ispalindrome(str){
    const reversed = str.split('').reverse().join('');

    return str === reversed;
}

console.log(Ispalindrome('racecar'));

// 1st method

function isPalind(str){
    str.split('').every((char, rev) => {
        return char === str[str.length - rev - 1];
        });

    return true
}

console.log(isPalind('racecar'));

function isPalindrome(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let len = s.length;
    for(let i = 0; i < len/2; i++){
        if(s[i] !== s[len - 1 - i]){
            return false;
        }
    }
    return true;
}
console.log(isPalindrome('nananana'));
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true

// 2nd method
function palindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Compare the string with its reverse
    return str === str.split('').reverse().join('');
}

console.log(palindrome('racecar')); // true
console.log(palindrome('hello')); // false
console.log(palindrome('A man, a plan, a canal: Panama')); // true
