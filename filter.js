let arry = [2, 34, 5, 6, 87, 5, 4, 3, 4, 5]
let a = arry.filter(f => f % 2 === 0)
console.log(a)

let friends = ['rakib','tamim','hasubul','shuvo','rohit']

let filterF = friends.filter(item => item[0] === 'r' )
console.log(filterF)


const students = [
    { name: 'Tormuj', age: 22 },
    { name: 'Zaved', age: 31 },
    { name: 'Naved', age: 23 }, 
    { name: 'Khaled', age: 20 },
    { name: 'Sajed', age: 34 },
    { name: 'Nahid', age: 22 },
    { name: 'Nasib', age: 41 },
]

let filterStudent = students.filter( i => i.age <= 25)
console.log(filterStudent)

