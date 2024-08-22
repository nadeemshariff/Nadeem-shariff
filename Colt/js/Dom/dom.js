//DOM
// DOM (Document Object Model)

// The DOM is a programming interface for HTML and XML documents.
// It represents the structure of a document as a tree-like hierarchy of objects.

// 1. Accessing DOM Elements
const element = document.getElementById('myId');
const elements = document.getElementsByClassName('myClass');
const elementsByTag = document.getElementsByTagName('div');
const elementByQuery = document.querySelector('.myClass');
const elementsByQuery = document.querySelectorAll('.myClass');

// 2. Modifying DOM Elements
element.innerHTML = 'New content';
element.textContent = 'New text content';
element.setAttribute('class', 'newClass');
element.style.color = 'red';

// 3. Creating and Appending Elements
const newElement = document.createElement('div');
newElement.textContent = 'New element';
document.body.appendChild(newElement);

// 4. Removing Elements
const parentElement = document.getElementById('parent');
const childElement = document.getElementById('child');
parentElement.removeChild(childElement);

// 5. Event Handling
element.addEventListener('click', function(event) {
    console.log('Element clicked!');
});

// 6. Traversing the DOM
const parent = element.parentNode;
const children = element.childNodes;
const nextSibling = element.nextSibling;
const previousSibling = element.previousSibling;

// 7. Manipulating Classes
element.classList.add('newClass');
element.classList.remove('oldClass');
element.classList.toggle('toggleClass');

// 8. Working with Attributes
const attributeValue = element.getAttribute('class');
element.setAttribute('id', 'newId');
element.removeAttribute('style');

// 9. Manipulating the Document
document.title = 'New Page Title';
const metaDescription = document.querySelector('meta[name="description"]');
metaDescription.setAttribute('content', 'New description');

// 10. DOM Fragments
const fragment = document.createDocumentFragment();
for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i + 1}`;
    fragment.appendChild(li);
}
document.getElementById('myList').appendChild(fragment);
