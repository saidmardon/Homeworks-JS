const students = ["said", "golib", "mansur", "najib", "yosin"]
console.log(students.slice(1, 3)) // golib, mansur
console.log(students.slice(0)) //said, golib, mansur, najib, yosin
console.log(students.slice(- 1)) //yosin
console.log(students.slice(- 2)) //najib, yosin



let arr = ["t", "e", "s", "t"];
console.log(arr.slice(1, 3)); // e,s (копирует с 1 до 3)
console.log(arr.slice(-2));  // s,t (копирует с -2 до конца)
//