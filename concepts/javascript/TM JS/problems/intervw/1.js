let num = [1,2,5,0,0,9,5]

//make the non zeros to the left side and remove duplicates in a single pass
function moveNonZeros(arr) {
    let writeIndex = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[writeIndex] = arr[i]
            writeIndex++
        }
    }

    // Fill the rest with zeros
    for (let i = writeIndex; i < arr.length; i++) {
        arr[i] = 0
    }

    return arr
}

function removeDuplicates(arr) {
    let seen = new Set()
    let duplicates = []

    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            duplicates.push(arr[i])
        } else {
            seen.add(arr[i])
        }
    }

    return {
        result: arr,
        duplicates: duplicates
    }
}

// Execute the functions and log the result
const result = moveNonZeros(num)
const {result: finalResult, duplicates} = removeDuplicates(result)
console.log("Result:", finalResult)
console.log("Duplicates:", duplicates);

// write a function findLongestWord that takes a string as input and returns the longest word in the string.if there are multiple longest words, return first one encountered  and log the next in the separate line.


function findLongestWord(str) {
    let words = str.split(" ")
    let longestWord = ""
    let longestWordLength = 0

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWordLength) {
            longestWord = words[i]
            longestWordLength = words[i].length
        }
    }

    let result = [longestWord]
    let duplicates = words.filter(word => word.length === longestWordLength).slice(1)

    console.log(result[0])
    duplicates.forEach(duplicate => console.log(duplicate))

    return {
        longestWord: result[0],
        duplicates: duplicates
    }
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog"))
