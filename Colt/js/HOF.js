// HOF

// ["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}


for (const num in arr) {
    if (Object.prototype.hasOwnProperty.call(arr, num)) {
        const element = arr[num];
        console.log(num);
    }
}

// Maps
// const map = new Map();

// map.set("name", "Rohini");
// map.set("name", "Mansha");
// map.set("name", "Anusha");

// for (const [key, value] of map) {
//     console.log(key, ':-', value)
// }

// const myObj = {
//     'game1': 'NFS',
//     'game2': 'GTA'
// }
// for (const [key,value] of myObj) {
//     console.log(key, "-", value);
// }

// console.log(map.get("name"));

// console.log(map.size);

// map.delete("name");

// console.log(map.has("name"));

// map.clear();

// console.log(map.size);

// map.set("name", "Rohini");

// console.log(map);

const obj = {
    name: "Rohini",
    age: 22,
    category: "ebony",

    // display: function() {
    //     console.log(`Name: ${this.name}`);
    //     console.log(`Age: ${this.age}`);
    //     console.log(`Category: ${this.category}`);
    // }
}

// obj.display();
for (const key in obj) {
    console.log(`${key} shortcut is for ${obj[key]}`);
}

const map = new Map();
map.set("name", "Rohini");
map.set("age", 25);
map.set("category", "ebony");
map.set("figure", "petite");

// for (const key in map){
//     console.log(key);
// }

const coding = ["A", "B","C"];

coding.forEach((value, index) => {
    console.log(value, index);
});

function printMe(item){
    console.log(item);
}

coding.forEach(printMe);

coding.forEach((item, index, array) => {
    console.log(item, index, array);
})

const newCoding = [
    {
        langName: "javasript",
        langFileName: "js"
    },
    {
        langName: "java",
        langFileName: "java"
    },
    {
        langName: "python",
        langFileName: "py"
    },
    {
        langName: "c##",
        langFileName: "c++"
    }
]

newCoding.forEach((item) => {
    console.log(item.langName);
    console.log(item.langName, item.langFileName);
});

// for of
for (const element of object) {
    
}


// for in

for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
         
    }
}