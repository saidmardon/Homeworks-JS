function makeAdder(x){
      function add(y){
            return y + x;
      }
      return add;
}
let plusOne = makeAdder(1)
console.log(plusOne(3))