// currying

const sum = (a, b) => a + b;

const curriedSum = (a) => (b) => a + b;

const curried= curriedSum(1)(2);

console.log(curried);
// 3

const sum1 = function(a){
    return function(b){
        return a + b;
    }
}
const clo = sum1(5)(6);// stored in lexical environment
// const ans = clo(6);
// console.log(ans);
console.log(clo);

// Practical code
const PriceCalc = (price) => {
    return (discount) => {
        return price - (price * discount / 100);
    }
}
//getPrice()

const getPrice = PriceCalc(100);// calling the function partially called currying
console.log(getPrice(10));

const getDiscount = PriceCalc(10);

console.log(getDiscount(10)); 


//Iterator

const arr = [1, 2, 3, 4];

const iterator = arr[Symbol.iterator]();
console.log(iterator); 

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// let obj = {
//     start: 10,
//     end: 15
// }
// obj[Symbol.iterator] = function(){
//     let current = this.start
//     return {
//         next(){
//             if(obj.start <= obj.end){ // this represents obj
//                 return {value: obj.start++, done: false}
//             }
//             return {done: true}
//         }
//     }
//     // return itr;
// }

let obj = {
    start: 10,
    end: 15,
    [Symbol.iterator]: (){
        // let current = this.start
        return {
            next(){
                if(obj.start <= obj.end){ // this represents obj
                    return {value: obj.start++, done: false}
                }
                return {done: true}
            }
        }
        // return itr;
    }
    
}


for (let i of obj) {
    console.log(i) 
}