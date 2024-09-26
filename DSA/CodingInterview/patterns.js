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

// Pyramids

function pyramids(n){
    for (let i = 1; i <= n; i++){
        let str = '';
        for (let j = 1; j <= i; j++){
            str += '*';
        }
        console.log(str);
    }
}
pyramids(5);

//

function Pyramid(n) {
  for (var i = 1; i <= n; i++) {
      var str = '';
      
      // Add leading spaces
      for (var j = 1; j <= n - i; j++) {
          str += ' ';
      }
      
      // Add stars
      for (var k = 1; k <= (2 * i - 1); k++) {
          str += '*';
      }
      
      console.log(str);
  }
}

// Example usage:
Pyramid(5);
function printPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
      let str = ' '.repeat(rows - i);
      let str2 = '*'.repeat(i * 2 - 1);
      console.log(str + str2 + str);
  }
}

// Example usage:
printPyramid(5);