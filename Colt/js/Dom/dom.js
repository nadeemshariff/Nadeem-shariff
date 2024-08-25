// DOM
// Document Object Model (DOM)

// The DOM is an object-oriented representation of your page as a nested tree of nodes.
// Each node in the tree represents part of your document, such as an element, a string of text, or a comment.
// The DOM is used to represent the documents loaded in the browser, and can be manipulated to change the content of the page dynamically.

// The root of the DOM is the document object.
// The document object contains methods and properties that we can use to interact with the elements of the web page.
// For example, we can use the document object to get the title of the page:
console.log(document.title);
// Rohini

// We can also use the document object to change the title of the page:
document.title = "Anusha";
// Anusha

// We can get access to the body of the document using the body property of the document object:
const body = document.body;
// <body>...</body>

// We can get access to the head of the document using the head property of the document object:
const head = document.head;
// <head>...</head>

// We can get access to the elements of the page using methods like getElementById, getElementsByTagName and getElementsByClassName.
// For example, we can get the element with the id name:
const para = document.getElementById("name");
// <p id="name">This is a paragraph.</p>

// We can also get all the elements with the tag name p:
const paras = document.getElementsByTagName("p");
// HTMLCollection(3) [p#name, p, p]

// We can also get all the elements with the class name todo:
const todos = document.getElementsByClassName("todo");
// HTMLCollection(2) [p.todo, p.todo]

// We can also use querySelector and querySelectorAll methods to select elements.
// For example, we can get the element with the id name:
let parag = document.querySelector("#name");
// <p id="name">This is a paragraph.</p>

// We can also get all the elements with the class name todo:
const todo = document.querySelectorAll(".todo");
// NodeList(2) [p.todo, p.todo]

// We can also create new elements and add them to the page.
// For example, we can create a new paragraph element:
const newPara = document.createElement("p");
// <p></p>

// We can set the text content of the new element:
newPara.textContent = "This is a new paragraph.";
// This is a new paragraph.

// We can add the new element to the page:
body.appendChild(newPara);
// DOM (Document Object Model) Explanation

// The DOM is a programming interface for HTML and XML documents. It represents the structure of a document as a tree-like hierarchy of objects.

// Key points about the DOM:
// 1. It's a representation of the web page that can be manipulated with JavaScript
// 2. Each HTML element becomes a node in the DOM tree
// 3. The document object is the root of the DOM tree

// Example of DOM structure:
//  document
//    |
//    +-- html
//         |
//         +-- head
//         |    |
//         |    +-- title
//         |
//         +-- body
//              |
//              +-- h1
//              |
//              +-- p
//              |
//              +-- div
//                   |
//                   +-- p

// We can use JavaScript to:
// - Access elements
// - Modify element content
// - Change element styles
// - Create new elements
// - Remove elements
// - Respond to events (like clicks)

// The DOM provides methods and properties to interact with the document:
console.log(document.documentElement); // Represents the root <html> element
console.log(document.body.children);   // Lists all direct children of <body>

// We can traverse the DOM:
const firstParagraph = document.querySelector('p');
console.log(firstParagraph.parentNode);  // Parent of the paragraph
console.log(firstParagraph.nextSibling); // Next sibling of the paragraph

// We can modify the DOM:
const newElement = document.createElement('div');
newElement.textContent = 'This is a new div';
document.body.appendChild(newElement);

// The DOM also allows us to handle events:
document.addEventListener('click', function(event) {
    console.log('Document was clicked at position:', event.clientX, event.clientY);
});

// Understanding the DOM is crucial for dynamic web page manipulation with JavaScript.
// --------------------------------------------------------------------------------------------------------------

// Examples of DOM methods and their functionality
const heading = document.querySelector('h1');
heading.textContent = 'New heading!'; // Changes the text content of the h1 element

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => {
    paragraph.style.color = 'red'; // Changes the text color of all p elements
});

const button = document.createElement('button');
button.textContent = 'Click me!';
document.body.appendChild(button); // Adds a new button to the page

const list = document.createElement('ul');
document.body.appendChild(list); // Adds a new unordered list to the page

const listItems = ['Item 1', 'Item 2', 'Item 3'];
listItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem); // Adds a new list item to the list
});

const link = document.createElement('a');
link.textContent = 'Visit Google!';
link.href = 'https://www.google.com';
document.body.appendChild(link); // Adds a new link to the page
