let students = ["said", "golib", "mansur", "najib", "yosin"];
function secondA(students) {
  let newArr = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i][1] == "a") {
      newArr.push(students[i]);
    }
  }

  return newArr;
}
console.log(secondA(students));

//4 Isloh kardan

let numbers = [1, 3, 4, 9, 8];

function isEven(element) {
  return element % 2 == 0;
}
let evenNumber = numbers.find(isEven);
console.log(evenNumber);

//4
