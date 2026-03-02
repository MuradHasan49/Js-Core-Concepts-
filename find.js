const students = [
    { name: 'Tormuj', age: 22 },
    { name: 'Zaved', age: 31 },
    { name: 'Naved', age: 23 }, 
    { name: 'Khaled', age: 20 },
    { name: 'Sajed', age: 34 },
    { name: 'Nahid', age: 22 },
    { name: 'Nasib', age: 41 },
]

let nStudent = students.find( f => f.name[0] === 'N')
console.log(nStudent)