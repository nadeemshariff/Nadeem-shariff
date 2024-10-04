// 1. User Authentication System
// Challenge: Create a function that simulates a user authentication system.
// It should check if the provided username and password match predefined credentials.

function authenticateUser(username, password) {
    const validUsername = "user123";
    const validPassword = "securePass!";

    if (username === validUsername && password === validPassword) {
        return "Authentication successful!";
    } else {
        return "Authentication failed. Please check your credentials.";
    }
}

console.log(authenticateUser("user123", "securePass!")); // Authentication successful!
console.log(authenticateUser("user123", "wrongPass")); // Authentication failed.

// Explanation: This function uses conditional statements to check if the provided
// username and password match the predefined valid credentials.

// 2. Shopping Cart Total Calculator
// Challenge: Create a function that calculates the total price of items in a shopping cart,
// applying a discount if the total exceeds a certain amount.

function calculateCartTotal(items) {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    
    if (total > 100) {
        return total * 0.9; // 10% discount
    } else {
        return total;
    }
}

const cart = [
    { name: "T-shirt", price: 20 },
    { name: "Jeans", price: 50 },
    { name: "Shoes", price: 80 }
];

console.log(calculateCartTotal(cart)); // 135 (10% discount applied)

// Explanation: This function uses the reduce method to sum up the prices of all items,
// then applies a discount if the total exceeds $100.

// 3. Password Strength Checker
// Challenge: Create a function that checks the strength of a password based on certain criteria.

function checkPasswordStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    switch (strength) {
        case 5: return "Very Strong";
        case 4: return "Strong";
        case 3: return "Moderate";
        default: return "Weak";
    }
}

console.log(checkPasswordStrength("Pass123!")); // Strong
console.log(checkPasswordStrength("password")); // Weak

// Explanation: This function uses regular expressions to check for different character types
// and a switch statement to determine the password strength based on the criteria met.

// 4. Product Filter
// Challenge: Create a function that filters products based on a minimum rating and maximum price.

function filterProducts(products, minRating, maxPrice) {
    return products.filter(product => 
        product.rating >= minRating && product.price <= maxPrice
    );
}

const products = [
    { name: "Laptop", price: 1000, rating: 4.5 },
    { name: "Phone", price: 500, rating: 4.0 },
    { name: "Tablet", price: 300, rating: 3.8 }
];

console.log(filterProducts(products, 4.0, 600));
// [{ name: "Phone", price: 500, rating: 4.0 }]

// Explanation: This function uses the filter method to create a new array with all products
// that meet both the minimum rating and maximum price criteria.

// 5. Date Formatter
// Challenge: Create a function that formats a date object into a custom string format.

function formatDate(date, format) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return format
        .replace('DD', day)
        .replace('MM', month)
        .replace('YYYY', year);
}

const today = new Date();
console.log(formatDate(today, 'DD/MM/YYYY')); // e.g., "23/06/2023"

// Explanation: This function uses string replacement to format the date according to
// the specified format string.

// 6. Sudoku Validator
// Challenge: Create a function that validates a completed Sudoku board.

function validateSudoku(board) {
    const isValid = (arr) => new Set(arr).size === 9 && !arr.includes(0);
    
    // Check rows
    for (let i = 0; i < 9; i++) {
        if (!isValid(board[i])) return false;
    }
    
    // Check columns
    for (let i = 0; i < 9; i++) {
        const column = board.map(row => row[i]);
        if (!isValid(column)) return false;
    }
    
    // Check 3x3 sub-grids
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            const subGrid = board.slice(i, i + 3).flatMap(row => row.slice(j, j + 3));
            if (!isValid(subGrid)) return false;
        }
    }
    
    return true;
}

// 7. Balanced Parentheses Checker
// Challenge: Create a function that checks if a string has balanced parentheses, brackets, and braces.

function isBalanced(str) {
    const stack = [];
    const openBrackets = '({[';
    const closeBrackets = ')}]';
    const bracketPairs = {')': '(', '}': '{', ']': '['};
    
    for (let char of str) {
        if (openBrackets.includes(char)) {
            stack.push(char);
        } else if (closeBrackets.includes(char)) {
            if (stack.pop() !== bracketPairs[char]) return false;
        }
    }
    
    return stack.length === 0;
}

// 8. LRU Cache Implementation
// Challenge: Implement a Least Recently Used (LRU) cache with a specified capacity.

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    
    get(key) {
        if (!this.cache.has(key)) return -1;
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }
    
    put(key, value) {
        if (this.cache.has(key)) this.cache.delete(key);
        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {
            const oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);
        }
    }
}

// 9. Implement a Trie (Prefix Tree)
// Challenge: Create a Trie data structure for efficient string searches.

class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }
    
    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEndOfWord;
    }
    
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return true;
    }
}

// 10. Implement a Min Heap
// Challenge: Create a Min Heap data structure with insert and extractMin operations.

class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }
    
    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }
    
    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }
    
    bubbleDown(index) {
        while (true) {
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            let smallest = index;
            
            if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild;
            }
            if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild;
            }
            
            if (smallest === index) break;
            
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

// 11. Implement a Graph and Depth-First Search
// Challenge: Create a Graph class and implement a depth-first search algorithm.

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    
    dfs(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        
        (function dfsHelper(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfsHelper(neighbor);
                }
            });
        })(start);
        
        return result;
    }
}

// 12. Implement Quick Sort
// Challenge: Implement the Quick Sort algorithm.

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left - 1;
    
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
}

// 13. Implement a Red-Black Tree
// Challenge: Create a self-balancing Red-Black Tree data structure.

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.color = 'RED';
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }
    
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            this.root.color = 'BLACK';
            return;
        }
        
        this.insertNode(this.root, newNode);
        this.fixViolation(newNode);
    }
    
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
                newNode.parent = node;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
                newNode.parent = node;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    
    fixViolation(node) {
        while (node !== this.root && node.parent.color === 'RED') {
            let uncle;
            if (node.parent === node.parent.parent.left) {
                uncle = node.parent.parent.right;
                if (uncle && uncle.color === 'RED') {
                    node.parent.color = 'BLACK';
                    uncle.color = 'BLACK';
                    node.parent.parent.color = 'RED';
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.right) {
                        node = node.parent;
                        this.rotateLeft(node);
                    }
                    node.parent.color = 'BLACK';
                    node.parent.parent.color = 'RED';
                    this.rotateRight(node.parent.parent);
                }
            } else {
                uncle = node.parent.parent.left;
                if (uncle && uncle.color === 'RED') {
                    node.parent.color = 'BLACK';
                    uncle.color = 'BLACK';
                    node.parent.parent.color = 'RED';
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.left) {
                        node = node.parent;
                        this.rotateRight(node);
                    }
                    node.parent.color = 'BLACK';
                    node.parent.parent.color = 'RED';
                    this.rotateLeft(node.parent.parent);
                }
            }
        }
        this.root.color = 'BLACK';
    }
    
    rotateLeft(node) {
        const rightChild = node.right;
        node.right = rightChild.left;
        if (rightChild.left !== null) {
            rightChild.left.parent = node;
        }
        rightChild.parent = node.parent;
        if (node.parent === null) {
            this.root = rightChild;
        } else if (node === node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }
        rightChild.left = node;
        node.parent = rightChild;
    }
    
    rotateRight(node) {
        const leftChild = node.left;
        node.left = leftChild.right;
        if (leftChild.right !== null) {
            leftChild.right.parent = node;
        }
        leftChild.parent = node.parent;
        if (node.parent === null) {
            this.root = leftChild;
        } else if (node === node.parent.right) {
            node.parent.right = leftChild;
        } else {
            node.parent.left = leftChild;
        }
        leftChild.right = node;
        node.parent = leftChild;
    }
}

// 14. Implement a B-Tree
// Challenge: Create a B-Tree data structure for efficient searching and insertion in large datasets.

class BTreeNode {
    constructor(leaf = false) {
        this.leaf = leaf;
        this.keys = [];
        this.children = [];
    }
}

class BTree {
    constructor(t) {
        this.root = new BTreeNode(true);
        this.t = t; // Minimum degree
    }
    
    insert(k) {
        let r = this.root;
        if (r.keys.length === (2 * this.t) - 1) {
            let s = new BTreeNode();
            this.root = s;
            s.children.push(r);
            this.splitChild(s, 0);
            this.insertNonFull(s, k);
        } else {
            this.insertNonFull(r, k);
        }
    }
    
    insertNonFull(x, k) {
        let i = x.keys.length - 1;
        if (x.leaf) {
            x.keys.push(null);
            while (i >= 0 && k < x.keys[i]) {
                x.keys[i + 1] = x.keys[i];
                i--;
            }
            x.keys[i + 1] = k;
        } else {
            while (i >= 0 && k < x.keys[i]) {
                i--;
            }
            i++;
            if (x.children[i].keys.length === (2 * this.t) - 1) {
                this.splitChild(x, i);
                if (k > x.keys[i]) {
                    i++;
                }
            }
            this.insertNonFull(x.children[i], k);
        }
    }
    
    splitChild(x, i) {
        let t = this.t;
        let y = x.children[i];
        let z = new BTreeNode(y.leaf);
        x.children.splice(i + 1, 0, z);
        x.keys.splice(i, 0, y.keys[t - 1]);
        z.keys = y.keys.splice(t, t - 1);
        if (!y.leaf) {
            z.children = y.children.splice(t, t);
        }
    }
    
    search(k, x = this.root) {
        let i = 0;
        while (i < x.keys.length && k > x.keys[i]) {
            i++;
        }
        if (i < x.keys.length && k === x.keys[i]) {
            return x;
        } else if (x.leaf) {
            return null;
        } else {
            return this.search(k, x.children[i]);
        }
    }
}

// 15. Implement a Skip List
// Challenge: Create a Skip List data structure for efficient searching and insertion.

class SkipListNode {
    constructor(value, level) {
        this.value = value;
        this.forward = new Array(level + 1).fill(null);
    }
}

class SkipList {
    constructor(maxLevel, p) {
        this.maxLevel = maxLevel;
        this.p = p;
        this.header = new SkipListNode(-1, maxLevel);
        this.level = 0;
    }
    
    randomLevel() {
        let lvl = 0;
        while (Math.random() < this.p && lvl < this.maxLevel) {
            lvl++;
        }
        return lvl;
    }
    
    insert(value) {
        let update = new Array(this.maxLevel + 1).fill(null);
        let current = this.header;
        
        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current;
        }
        
        let newLevel = this.randomLevel();
        if (newLevel > this.level) {
            for (let i = this.level + 1; i <= newLevel; i++) {
                update[i] = this.header;
            }
            this.level = newLevel;
        }
        
        let newNode = new SkipListNode(value, newLevel);
        for (let i = 0; i <= newLevel; i++) {
            newNode.forward[i] = update[i].forward[i];
            update[i].forward[i] = newNode;
        }
    }
    
    search(value) {
        let current = this.header;
        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
        }
        current = current.forward[0];
        if (current !== null && current.value === value) {
            return current;
        }
        return null;
    }
}

// 16. Implement a Bloom Filter
// Challenge: Create a Bloom Filter data structure for efficient set membership testing.

class BloomFilter {
    constructor(size, hashFunctions) {
        this.size = size;
        this.hashFunctions = hashFunctions;
        this.bitArray = new Array(size).fill(false);
    }
    
    add(item) {
        for (let hashFunc of this.hashFunctions) {
            const index = hashFunc(item) % this.size;
            this.bitArray[index] = true;
        }
    }
    
    test(item) {
        for (let hashFunc of this.hashFunctions) {
            const index = hashFunc(item) % this.size;
            if (!this.bitArray[index]) {
                return false;
            }
        }
        return true;
    }
}

// Example hash functions (you would use more sophisticated ones in practice)
function hash1(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
}

function hash2(str) {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) + hash) + str.charCodeAt(i);
    }
    return Math.abs(hash);
}

// 17. Implement a Segment Tree
// Challenge: Create a Segment Tree data structure for efficient range queries and updates.

class SegmentTree {
    constructor(arr) {
        this.arr = arr;
        this.tree = new Array(4 * arr.length).fill(0);
        this.build(0, 0, arr.length - 1);
    }
    
    build(node, start, end) {
        if (start === end) {
            this.tree[node] = this.arr[start];
        } else {
            const mid = Math.floor((start + end) / 2);
            this.build(2 * node + 1, start, mid);
            this.build(2 * node + 2, mid + 1, end);
            this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
        }
    }
    
    update(index, value) {
        this._update(0, 0, this.arr.length - 1, index, value);
    }
    
    _update(node, start, end, index, value) {
        if (start === end) {
            this.arr[index] = value;
            this.tree[node] = value;
        } else {
            const mid = Math.floor((start + end) / 2);
            if (start <= index && index <= mid) {
                this._update(2 * node + 1, start, mid, index, value);
            } else {
                this._update(2 * node + 2, mid + 1, end, index, value);
            }
            this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
        }
    }
    
    query(left, right) {
        return this._query(0, 0, this.arr.length - 1, left, right);
    }
    
    _query(node, start, end, left, right) {
        if (right < start || end < left) {
            return 0;
        }
        if (left <= start && end <= right) {
            return this.tree[node];
        }
        const mid = Math.floor((start + end) / 2);
        const leftSum = this._query(2 * node + 1, start, mid, left, right);
        const rightSum = this._query(2 * node + 2, mid + 1, end, left, right);
        return leftSum + rightSum;
    }
}

// 18. Implement a Fenwick Tree (Binary Indexed Tree)
// Challenge: Create a Fenwick Tree data structure for efficient prefix sum queries and updates.

class FenwickTree {
    constructor(n) {
        this.size = n;
        this.tree = new Array(n + 1).fill(0);
    }
    
    update(index, delta) {
        index++;
        while (index <= this.size) {
            this.tree[index] += delta;
            index += index & (-index);
        }
    }
    
    prefixSum(index) {
        index++;
        let sum = 0;
        while (index > 0) {
            sum += this.tree[index];
            index -= index & (-index);
        }
        return sum;
    }
    
    rangeSum(left, right) {
        return this.prefixSum(right) - this.prefixSum(left - 1);
    }
}

// 19. Implement a Suffix Array
// Challenge: Create a Suffix Array data structure for efficient string pattern matching.

function buildSuffixArray(s) {
    const n = s.length;
    const suffixes = new Array(n);
    
    for (let i = 0; i < n; i++) {
        suffixes[i] = {index: i, rank: [s.charCodeAt(i), i + 1 < n ? s.charCodeAt(i + 1) : -1]};
    }
    
    suffixes.sort((a, b) => {
        if (a.rank[0] !== b.rank[0]) return a.rank[0] - b.rank[0];
        return a.rank[1] - b.rank[1];
    });
    
    const ind = new Array(n);
    for (let k = 4; k < 2 * n; k *= 2) {
        let rank = 0;
        let prev_rank = suffixes[0].rank[0];
        suffixes[0].rank[0] = rank;
        ind[suffixes[0].index] = 0;
        
        for (let i = 1; i < n; i++) {
            if (suffixes[i].rank[0] === prev_rank && suffixes[i].rank[1] === suffixes[i - 1].rank[1]) {
                prev_rank = suffixes[i].rank[0];
                suffixes[i].rank[0] = rank;
            } else {
                prev_rank = suffixes[i].rank[0];
                suffixes[i].rank[0] = ++rank;
            }
            ind[suffixes[i].index] = i;
        }
        
        for (let i = 0; i < n; i++) {
            const nextindex = suffixes[i].index + k / 2;
            suffixes[i].rank[1] = nextindex < n ? suffixes[ind[nextindex]].rank[0] : -1;
        }
        
        suffixes.sort((a, b) => {
            if (a.rank[0] !== b.rank[0]) return a.rank[0] - b.rank[0];
            return a.rank[1] - b.rank[1];
        });
    }
    
    const suffixArr = new Array(n);
    for (let i = 0; i < n; i++) {
        suffixArr[i] = suffixes[i].index;
    }
    
    return suffixArr;
}

// 20. Implement a Persistent Data Structure
// Challenge: Create a Persistent Binary Search Tree that maintains previous versions after modifications.

class PersistentNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class PersistentBST {
    constructor() {
        this.roots = [null];
    }
    
    insert(value, version = this.roots.length - 1) {
        const newRoot = this._insert(this.roots[version], value);
        this.roots.push(newRoot);
        return this.roots.length - 1;
    }
    
    _insert(node, value) {
        if (node === null) {
            return new PersistentNode(value);
        }
        if (value < node.value) {
            return new PersistentNode(node.value, this._insert(node.left, value), node.right);
        } else {
            return new PersistentNode(node.value, node.left, this._insert(node.right, value));
        }
    }
    
    search(value, version = this.roots.length - 1) {
        return this._search(this.roots[version], value);
    }
    
    _search(node, value) {
        if (node === null) return false;
        if (node.value === value) return true;
        if (value < node.value) return this._search(node.left, value);
        return this._search(node.right, value);
    }
}

// 20. Tic-Tac-Toe Winner Check
// Challenge: Create a function that checks if there's a winner in a Tic-Tac-Toe game.

function checkTicTacToeWinner(board) {
    const winPatterns = [
        [0,1,2], [3,4,5], [6,7,8], // Rows
        [0,3,6], [1,4,7], [2,5,8], // Columns
        [0,4,8], [2,4,6]           // Diagonals
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    return null;
}

const board = ['X', 'O', 'X', 'O', 'X', 'O', '', '', 'X'];
console.log(checkTicTacToeWinner(board)); // 'X'

// Explanation: This function checks all possible winning patterns in a Tic-Tac-Toe game
// and returns the winning player ('X' or 'O') or null if there's no winner.


// 6. Async Task Queue
// Challenge: Implement an async task queue with concurrency limit

class AsyncTaskQueue {
    constructor(concurrency) {
        this.concurrency = concurrency;
        this.running = 0;
        this.queue = [];
    }

    async add(task) {
        return new Promise((resolve, reject) => {
            this.queue.push({ task, resolve, reject });
            this.run();
        });
    }

    async run() {
        if (this.running >= this.concurrency || this.queue.length === 0) return;

        this.running++;
        const { task, resolve, reject } = this.queue.shift();

        try {
            const result = await task();
            resolve(result);
        } catch (error) {
            reject(error);
        } finally {
            this.running--;
            this.run();
        }
    }
}

const queue = new AsyncTaskQueue(2);
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

queue.add(() => delay(1000).then(() => console.log('Task 1')));
queue.add(() => delay(500).then(() => console.log('Task 2')));
queue.add(() => delay(800).then(() => console.log('Task 3')));

// 7. LRU Cache Implementation
// Challenge: Implement a Least Recently Used (LRU) cache

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) return -1;
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            const oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);
        }
        this.cache.set(key, value);
    }
}

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));       // returns 1
cache.put(3, 3);                 // evicts key 2
console.log(cache.get(2));       // returns -1 (not found)

// 8. Implement a Trie (Prefix Tree)
// Challenge: Create a Trie data structure for efficient string searches

class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    }

    search(word) {
        let node = this.traverse(word);
        return node !== null && node.isEndOfWord;
    }

    startsWith(prefix) {
        return this.traverse(prefix) !== null;
    }

    traverse(str) {
        let current = this.root;
        for (let char of str) {
            if (!current.children[char]) return null;
            current = current.children[char];
        }
        return current;
    }
}

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // returns true
console.log(trie.search("app"));     // returns false
console.log(trie.startsWith("app")); // returns true

// 9. Implement a Basic Compiler
// Challenge: Create a simple compiler that translates a basic language to JavaScript

function compile(code) {
    const lines = code.split('\n');
    let jsCode = '';

    for (let line of lines) {
        if (line.startsWith('PRINT')) {
            jsCode += `console.log(${line.slice(6)});\n`;
        } else if (line.startsWith('VAR')) {
            const [_, name, value] = line.split(' ');
            jsCode += `let ${name} = ${value};\n`;
        } else if (line.startsWith('ADD')) {
            const [_, target, a, b] = line.split(' ');
            jsCode += `${target} = ${a} + ${b};\n`;
        }
    }

    return jsCode;
}

const sourceCode = `
VAR x 5
VAR y 10
ADD z x y
PRINT z
`;

console.log(compile(sourceCode));

// 10. Implement a Basic Virtual DOM
// Challenge: Create a simple virtual DOM implementation

class VNode {
    constructor(tagName, props, children) {
        this.tagName = tagName;
        this.props = props;
        this.children = children;
    }
}

function createElement(tagName, props, ...children) {
    return new VNode(tagName, props, children);
}

function render(vnode) {
    if (typeof vnode === 'string') {
        return document.createTextNode(vnode);
    }

    const element = document.createElement(vnode.tagName);

    for (const [key, value] of Object.entries(vnode.props || {})) {
        element.setAttribute(key, value);
    }

    for (const child of vnode.children) {
        element.appendChild(render(child));
    }

    return element;
}

const vdom = createElement('div', { class: 'container' },
    createElement('h1', {}, 'Hello, Virtual DOM'),
    createElement('p', {}, 'This is a paragraph.')
);

console.log(render(vdom));

// 11. Implement a Basic Redux-like State Management
// Challenge: Create a simple state management system similar to Redux

function createStore(reducer) {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };

    dispatch({});

    return { getState, dispatch, subscribe };
}

// Usage example
const initialState = { count: 0 };

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });

// 12. Implement a Basic GraphQL Server
// Challenge: Create a simple GraphQL server

const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
    user(id: Int!): User
  }

  type User {
    id: Int
    name: String
  }
`);

const root = {
    hello: () => 'Hello world!',
    user: ({ id }) => {
        const users = [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Doe' },
        ];
        return users.find(user => user.id === id);
    },
};

const query = `
  {
    hello
    user(id: 1) {
      name
    }
  }
`;

graphql(schema, query, root).then((response) => {
    console.log(JSON.stringify(response, null, 2));
});

// 13. Implement a Basic Neural Network
// Challenge: Create a simple neural network with forward propagation

class NeuralNetwork {
    constructor(inputNodes, hiddenNodes, outputNodes) {
        this.inputNodes = inputNodes;
        this.hiddenNodes = hiddenNodes;
        this.outputNodes = outputNodes;

        this.weightsIH = this.randomMatrix(this.hiddenNodes, this.inputNodes);
        this.weightsHO = this.randomMatrix(this.outputNodes, this.hiddenNodes);

        this.biasH = this.randomMatrix(this.hiddenNodes, 1);
        this.biasO = this.randomMatrix(this.outputNodes, 1);
    }

    randomMatrix(rows, cols) {
        return Array(rows).fill().map(() => Array(cols).fill().map(() => Math.random() * 2 - 1));
    }

    sigmoid(x) {
        return 1 / (1 + Math.exp(-x));
    }

    feedForward(inputArray) {
        let inputs = inputArray.map(x => [x]);
        
        let hidden = this.matrixMultiply(this.weightsIH, inputs);
        hidden = this.matrixAdd(hidden, this.biasH);
        hidden = hidden.map(row => row.map(this.sigmoid));

        let output = this.matrixMultiply(this.weightsHO, hidden);
        output = this.matrixAdd(output, this.biasO);
        output = output.map(row => row.map(this.sigmoid));

        return output.map(row => row[0]);
    }

    matrixMultiply(a, b) {
        return a.map(row => 
            Array(b[0].length).fill().map((_, i) => 
                row.reduce((sum, cell, j) => sum + cell * b[j][i], 0)
            )
        );
    }

    matrixAdd(a, b) {
        return a.map((row, i) => row.map((cell, j) => cell + b[i][j]));
    }
}

const nn = new NeuralNetwork(2, 2, 1);
console.log(nn.feedForward([1, 0]));

// 14. Implement a Basic Blockchain
// Challenge: Create a simple blockchain implementation

class Block {
    constructor(timestamp, data, previousHash = '') {
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash() {
        return require('crypto')
            .createHash('sha256')
            .update(this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce)
            .digest('hex');
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("Block mined: " + this.hash);
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
    }

    createGenesisBlock() {
        return new Block("01/01/2023", "Genesis block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}

let coin = new Blockchain();
console.log('Mining block 1...');
coin.addBlock(new Block("10/07/2023", { amount: 4 }));
console.log('Mining block 2...');
coin.addBlock(new Block("12/07/2023", { amount: 10 }));
console.log('Is blockchain valid? ' + coin.isChainValid());

// 15. Implement a Basic Interpreter
// Challenge: Create a simple interpreter for a custom language

function interpret(code) {
    const variables = {};
    const lines = code.split('\n');

    function evaluateExpression(expr) {
        if (!isNaN(expr)) return Number(expr);
        if (expr in variables) return variables[expr];
        const [left, op, right] = expr.split(' ');
        const leftVal = evaluateExpression(left);
        const rightVal = evaluateExpression(right);
        switch (op) {
            case '+': return leftVal + rightVal;
            case '-': return leftVal - rightVal;
            case '*': return leftVal * rightVal;
            case '/': return leftVal / rightVal;
            default: throw new Error(`Unknown operator: ${op}`);
        }
    }

    for (let line of lines) {
        const [command, ...args] = line.split(' ');
        switch (command) {
            case 'SET':
                variables[args[0]] = evaluateExpression(args.slice(2).join(' '));
                break;
            case 'PRINT':
                console.log(evaluateExpression(args.join(' ')));
                break;
            case 'IF':
                const condition = evaluateExpression(args.slice(0, 3).join(' '));
                if (condition) {
                    interpret(args.slice(4).join(' '));
                }
                break;
            default:
                throw new Error(`Unknown command: ${command}`);
        }
    }
}

const program = `
SET x 5
SET y 10
PRINT x + y
IF x < y PRINT x is less than y
`;

interpret(program);
