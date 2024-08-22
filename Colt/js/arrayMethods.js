const coding = ["a", "b", "c", "d"];

const values = coding.forEach((item) => {
  return item;
});
console.log(values);

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNum.filter((num) => {
  return num > 4;
});

// const newNums = []
// num.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num);
//     }
// })

console.log(newNums);

const books = [
  { title: "The Great Gatsby", genre: "Novel", publish: 1925, edition: 1 },
  { title: "To Kill a Mockingbird", genre: "Novel", publish: 1960, edition: 1 },
  {
    title: "The Catcher in the Rye",
    genre: "Novel",
    publish: 1951,
    edition: 1,
  },
  { title: "1984", genre: "Science Fiction", publish: 1949, edition: 1 },
  {
    title: "The Picture of Dorian Gray",
    genre: "Philosophical Novel",
    publish: 1890,
    edition: 1,
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance Novel",
    publish: 1813,
    edition: 1,
  },
  {
    title: "The Lord of the Rings",
    genre: "Fantasy Novel",
    publish: 1954,
    edition: 1,
  },
  {
    title: "The Da Vinci Code",
    genre: "Mystery Novel",
    publish: 2003,
    edition: 1,
  },
  {
    title: "The Count of Monte Cristo",
    genre: "Adventure Novel",
    publish: 1844,
    edition: 1,
  },
  { title: "The Alchemist", genre: "Fable", publish: 1988, edition: 1 },
];

let userbooks = books.filter((bk) => bk.genre === "novel");

userbooks = books.filter((bk) => {
  return bk.publish >= 1940 && bk.genre === "Novel";
});

console.log(userbooks);

const myNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNumbs = myNumb.map((num) => {
  return num + 10;
});
console.log(newNumbs);

// for Each
const socials = ["T", "L", "F", "I"];

myNumb.forEach((num) => {
  if (num) {
    console.log(myNumb);
  }
});
console.log(newNumbs);

// Chaining
const newNumbs2 = myNumb
  .map((num) => num * 5)
  .map((num) => num + 1)
  .filter((num) => num >= 10);

console.log(newNumbs2);

// Reduce js

const newNumbs3 = myNumb
  .map((num) => num * 5)
  .map((num) => num + 1)
  .filter((num) => num >= 10)
  .reduce((total, num) => total + num);
console.log(newNumbs3);

// Making the shopping cart more functional
const cart = [
  { item: "apple", price: 0.99 },
  { item: "banana", price: 0.49 },
  { item: "orange", price: 0.69 },
];

// Using arrow function and destructuring assignment
const totalPrice = cart.reduce(
  (total, { price }) => console.log(`acc: ${total}, price: ${price}`),
  0
);
console.log(totalPrice);

const socialsObj = [
  {
    name: "Twitter",
    url: "https://twitter.com",
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
  },
];

socialsObj.forEach((item) => {
  console.log(`${item.url}`);
});
// Using map
const socialsUrls = socialsObj.map((item) => item.url);
console.log(socialsUrls);

//Filter method

const socialsUrls2 = socialsObj.filter((item) => item.name === "Twitter");
// .map((item) => item.url);
console.log(socialsUrls2);

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Technology", start: 1989, end: 2010 },
  { name: "Company Five", category: "Finance", start: 2009, end: 2014 },
  { name: "Company Six", category: "Retail", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
  { name: "Company Ten", category: "Finance", start: 1995, end: 2018 },
];

// Filter companies by category retail
const retailComponies = companies.filter(
  (company) => company.category === "Retail"
);

console.log(retailComponies);

// Filter companies by start year

const newCompanies = companies.filter(
  (company) => company.start >= 1980 && company.end <= 2005
);
console.log(newCompanies);

// Filter companies by lasted 10yrs or more

const lastedTen = companies.filter(
  (company) => company.end - company.start >= 10
);
lastedTen.forEach((company) => {
  console.log(
    `${company.name} lasted ${company.end - company.start} years. Category: ${
      company.category
    }. Started: ${company.start}, Ended: ${company.end}`
  );
});
console.log(lastedTen);

//Reduce()
// const total = companies.reduce((acc, company) => acc + (company.end - company.start),
//     0);
// console.log(total);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = numbers.reduce((acc, currVal) => {
  return acc + currVal;
}, 0);
console.log(sum);

//Using with for loop
const sum3 = () => {
  let acc = 0;
  for (const currVal of numbers) {
    acc += currVal;
  }
  return acc;
};
console.log(sum3());

//Cart
const cart2 = [
  { item: "apple", price: 0.99 },
  { item: "banana", price: 0.49 },
  { item: "orange", price: 0.69 },
];

// Using arrow function and destructuring assignment
const total = cart2.reduce((total, { price }) => {
  console.log(`acc: ${total}, price: ${price}`);
  return total + price;
}, 0);
console.log(total);
// Using for loop
const totalPrice2 = () => {
  let acc = 0;
  for (const { price } of cart) {
    acc += price;
  }
  return acc;
};
console.log(totalPrice2());

//challenges--------------------------------------------
//1

const people = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phone: "234-567-8901",
    age: 28,
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob.johnson@example.com",
    phone: "345-678-9012",
    age: 35,
  },
  {
    firstName: "Alice",
    lastName: "Williams",
    email: "alice.williams@example.com",
    phone: "456-789-0123",
    age: 32,
  },
  {
    firstName: "Charlie",
    lastName: "Brown",
    email: "charlie.brown@example.com",
    phone: "567-890-1234",
    age: 40,
  },
  {
    firstName: "Emma",
    lastName: "Davis",
    email: "emma.davis@example.com",
    phone: "678-901-2345",
    age: 27,
  },
  {
    firstName: "Frank",
    lastName: "Miller",
    email: "frank.miller@example.com",
    phone: "789-012-3456",
    age: 45,
  },
  {
    firstName: "Grace",
    lastName: "Wilson",
    email: "grace.wilson@example.com",
    phone: "890-123-4567",
    age: 33,
  },
  {
    firstName: "Henry",
    lastName: "Taylor",
    email: "henry.taylor@example.com",
    phone: "901-234-5678",
    age: 38,
  },
  {
    firstName: "Isabella",
    lastName: "Anderson",
    email: "isabella.anderson@example.com",
    phone: "012-345-6789",
    age: 29,
  },
];

// Filter the 'people' array to include only those 30 years old or younger
const youngPeople = people
  .filter((person) => person.age <= 30)
  // Transform each filtered person object into a new object
  .map((person) => ({
    // Combine firstName and lastName into a single 'name' property
    name: `${person.firstName} ${person.lastName}`,
    // Include the email property as is
    email: person.email,
  }));

// Output the resulting array of young people to the console
console.log(youngPeople);

//-------------------------------------------------------------------
//challenge2
// Filter the 'people' array to include only those with a phone number that starts with '8

// Transform each filtered person object into a new object
const peopleWithPhone = people
  .filter((person) => person.phone.startsWith("8"))
  // Combine firstName and lastName into a single 'name' property
  .map((person) => ({
    name: `${person.firstName} ${person.lastName}`,
    // Include the email property as is
    email: person.email,
  }));
// Output the resulting array of young people to the console
console.log(peopleWithPhone);
//-------------------------------------------------------------------
//challenge3
//Filter the 'people' array to include only those with an age between 30 and 40
const peopleWithAge = people
  .filter((person) => person.age >= 30 && person.age <= 40)
  // Transform each filtered person object into a new object
  .map((person) => ({
    // Combine firstName and lastName into a single 'name' property
    name: `${person.firstName} ${person.lastName}`,
    // Include the email property as is
    email: person.email,
  }));

// Output the resulting array of young people to the console
console.log(peopleWithAge);
//------------------------------------------------
const number1 = [2,-30,50,-12,-9,7];

const positiveSum = number1
  .filter((num) => num > 0)
  .reduce((acc, num) => acc + num, 0);
console.log(positiveSum);

const negativeSum = number1
  .filter((num) => num < 0)
  .reduce((acc, num) => acc + num, 0);
console.log(negativeSum);

const totlaSum = number1
.filter((num) => num + num)
.reduce((acc, num) => acc + num, 0);

console.log(totlaSum);

//challenge

const words = ['coder','programmer','developer']

const Words = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1, word.length);
});

console.log(Words)