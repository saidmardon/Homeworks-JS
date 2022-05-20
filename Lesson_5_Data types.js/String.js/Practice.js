const value1 = Symbol("hello")
const value2 = Symbol("hello")
console.log(value1 == value2)
//false

let name = "said"
console.log(name.split()) //[ 'said' ]
console.log(name.split("")) //[ 's', 'a', 'i', 'd' ]
console.log(name.slice(0,2)) //sa
console.log(name.toUpperCase()) //SAID

//Амперсант
let text = "Hello"
let text_1 = "Saymumin"
console.log(`${text} Saymumin`) //Hello Saymumin

function Add(a,b){
      return a+b;
}
console.log(`Sum of: ${Add(2,3)}`) //Sum of: 5

let text_2 = `Hello
World My name
is Saymumin`;
console.log(text_2)
//Hello
//World My name
//is Saymumin
