function makeAdder(x){
      function add(y){
            return y + x;
      }
      return add;
}
let plusOne = makeAdder(1)
console.log(plusOne(3)) //4

const students = ["said", "golib", "najib", "mansur", 22]
console.log(students[0])
console.log(students[0],students[3],students[4])

//said
//said mansur 22