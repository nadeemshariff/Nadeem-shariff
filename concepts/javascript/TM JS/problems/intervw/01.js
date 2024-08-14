let arr = [1,5,2,6,3,8];

function reverseArray(arr) {
    let result = [];
    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        result[j] = arr[i];
        j++;
    }
    return result;
}

console.log(reverseArray(arr))
console.time(reverseArray(arr));