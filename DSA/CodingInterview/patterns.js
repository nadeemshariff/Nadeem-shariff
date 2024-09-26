// Patterns for Coding Interview

// Pattern 1
function pattern1(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}

// Pattern 2
function pattern2(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    for (let k = 1; k <= i; k++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}

// Solution
// *
// * *
// * * *
// * * * *
// * * * * *
function Patterns(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n - i - 1; j++) {
      str += " ";
    }
    for (let k = 0; k <= i; k++) {
      str += "* ";
    }
    console.log(str);
  }
}
Patterns(5); // Output:
// *
// * *
// * * *
// * * * *
// * * * * *

// function patterns1(n){
//     for (let i = 0; i < n; i ++){
//         let str = '';
//         for (let j = 0; j < n; j++){
//             if(j <= n){
//                 str += '#';
//                 }else{
//                     str += ' ';
//             }
//         }
//         console.log(str);
//     }
// }
// console.log(patterns1(5))

// Printing the number till 10

function printing(n){
    for (let i = 0; i < 10; i++){
        console.log(i);
    }
}
printing(10);
