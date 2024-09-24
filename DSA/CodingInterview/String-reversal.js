// Given a string, return a new String with the reversed order of characters
//  e.g. reverseString('hello') should return 'olleh'

function reverseString(str){
    return str.split('').reverse().join('');

}
console.log(reverseString('Apple'));
// or
function reverse(str){
    const arr = str.split('');
    arr.reverse();

    return arr.join('');
}
console.log(reverse('Nadeem'));
// Manual Alternative
function revStr(str){
    let reversed = '';
    // for(let i = str.length - 1; i >= 0; i--){
    //     reversed += str[i];
    // }

    for(char of str){
        reversed = char + reversed;
    }

    return reversed;

}
console.log(revStr('Mansha'));


// Another method of solution: Complicated 

function reverse1(str){
    // debugger;
    return str.split('').reduce((reversed, character) => character + reversed, '');
}
reverse1('asdfg')
console.log(reverse1('1234315')); 