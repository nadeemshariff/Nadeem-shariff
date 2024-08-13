
const container = document.getElementById('container');
const undoBtn = document.getElementById('undoBtn');
const redoBtn= document.getElementById('redoBtn');
const resetBtn= document.getElementById('resetBtn');

let dots = [];
let removedDots = [];


// Adding event listener to the dots element
container.addEventListener('click', (e) => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.left = `${e.clientX - container.offsetLeft}px`;
    dot.style.top = `${e.clientY - container.offsetTop}px`;
    container.appendChild(dot);
    dots.push(dot);
    updateButtons();
});

//Adding undo functionality 
undoBtn.addEventListener('click', () => {
    if(dots.length > 0){
        const removedDot = dots.pop();
        container.removeChild(removedDot);
        removedDots.push(removedDot);
        updateButtons();
    }
});

// Adding redo functionality
redoBtn.addEventListener('click', () => {
    if(removedDots.length > 0){
        const redoDot = removedDots.pop();
        container.appendChild(redoDot);
        dots.push(redoDot);
        updateButtons();
    }
});

// Adding reset function
resetBtn.addEventListener('click', () => {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    dots = [];
    removedDots = [];
    updateButtons();
});

function updateButtons(){
    undoBtn.disabled = dots.length === 0;
    redoBtn.disabled = removedDots.length === 0;
    resetBtn.disabled = dots.length === 0;

    // Here these will get disabled before any click
} 
