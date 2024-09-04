// Generators

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = [...generator()];
// const o = gen.next();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// for (let o of gen) {
//     console.log(o);
// }

console.log(gen)

let obj = {
    start: 10,
    end: 15,
    // [Symbol.iterator]:function* () {
    //     // let current = this.start
    //     for (let count = this.start; count<=this.end; count++){
    //         yield count;
    //     }
    // }

    //ES6 version syntax for better looking code
        *[Symbol.iterator] () {
        // let current = this.start
        for (let count = this.start; count<=this.end; count++){
            yield count;
        }
    }
    
}


// for (let i of obj) {
//     console.log(i) 
// }

console.log([...obj]);

function* gene() {
    console.log("hi");
}
function* gen1(){
    // const g = gen();
    // g.next();
    yield* gene();
}
const g1 = gen1();

g1.next(); 

//recursive function
function* fact(){
    //if 
    // exit
    yield* fact();
}
const f = fact();

f.next();