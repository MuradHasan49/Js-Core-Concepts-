const students = [
    { name: 'Tormuj', age: 22 },
    { name: 'Zaved', age: 31 },
    { name: 'Naved', age: 23 }, 
    { name: 'Khaled', age: 20 },
    { name: 'Sajed', age: 34 },
    { name: 'Nahid', age: 22 },
    { name: 'Nasib', age: 41 },
]

let data = students.map(e=> e.age % 2 === 0)
console.log(data)

const numbers = [1, 2, 3, 4, 5];

// const doubled = [];
// for(const num of numbers) {
//     doubled.push(num * 2);
// }

// const doubleIt = num => num * 2;
// const doubled = numbers.map(doubleIt);

const doubled = numbers.map(num => num * 2);
const squared = numbers.map(num => num * num);

const friends = ['zaved', 'naved', 'khaled', 'sajed'];
const firstLetters = friends.map(frd => frd[0]);

const products = [
    { name: 'laptop', price: 45000 },
    { name: 'phone', price: 15000 },
    { name: 'tablet', price: 25000 },
];

const prices = products.map(pd => pd.price * 2);

const names = products.map((pd, index, productsArray) => {
    const upperCaseName = pd.name.toUpperCase();
    // console.log(index, upperCaseName, productsArray);
    return upperCaseName;
})

const result = products.forEach(pd => console.log(pd.name));

console.log(result)