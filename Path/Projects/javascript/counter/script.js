// Get references to HTML elements with specific IDs
const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const reset = document.getElementById("reset");
const count = document.getElementById("count");

// Initialize a variable to keep track of the count
let Count = 0;

// Add a click event listener to the increment button
increment.onclick = function() {
    Count++; // Increase the count by 1
    updateCounter(); // Update the displayed count
}

// Add a click event listener to the decrement button
decrement.onclick = function() {
    if (Count > 0) { // Check if count is greater than 0
        Count--; // Decrease the count by 1
        updateCounter(); // Update the displayed count
    }
}

// Add a click event listener to the reset button
reset.onclick = function() {
    Count = 0; // Set the count back to 0
    updateCounter(); // Update the displayed count
}

// Function to update the displayed count
function updateCounter() {
    count.textContent = Count; // Set the text content of the count element to the current Count value
}

// Initial call to display the starting count
updateCounter();
