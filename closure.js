
function outerfunc(){
    let count = 0 ;
    return function(){
        count ++;
        return count
    }
}

let myFunc = outerfunc()

console.log(myFunc())
console.log(myFunc())
console.log(myFunc())


function testClosure(owner){
    let num = 0;
    return function(){
        num = num + 1 
        console.log('result is :', num ,'and owner is :',owner)
    }
}

let MuradFunction = testClosure('murad')
console.log(MuradFunction())
console.log(MuradFunction())
console.log(MuradFunction())
let shuvoFunction = testClosure('shuvo')
console.log(shuvoFunction())
console.log(shuvoFunction())