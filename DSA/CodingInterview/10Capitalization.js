// Sentence Captilazation

function capitalize(sentence) {
    return sentence
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}
console.log(capitalize("hello world")); // "Hello World"