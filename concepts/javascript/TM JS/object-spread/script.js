let x;

const todo = new Object();

todo.id = 1;
todo.title = "Learn JavaScript";
todo.completed = false;

x = todo;

const person = {
    address : {
        coords: {
            let: 42.943,
            lng: 87.9
        },
        city: "Mumbai"
    },
    name: "Nadeem",
    age: 22
}

x = person.address.coords.lat;

const obj1 = {a: 1, b: 2}
const obj2 = {c: 3, d: 4}
const obj3 = { ...obj1, ...obj2};

const obj4 = Object.assign({}, obj1, obj2);

const todos = [
    { id: 1, name: 'lorem'},
    { id: 2, name: 'ipsum'},
    { id: 3, name: 'dolor'}
]

x = todos[0].name;

x = {...todos[0]};

x = Object.assign({}, todos[0]);

x = Object.assign({}, todos[0], todos[1], todos[2]);

x = Object.keys(todo).length;

console.log(x)
