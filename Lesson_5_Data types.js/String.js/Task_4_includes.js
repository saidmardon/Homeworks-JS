let text = "Saymumin"
console.log(text.includes("Say")) //true
console.log(text.includes("say")) //false  потому что с маленкой буквы
console.log(text.includes("Say", 0)) //true
console.log(text.includes("Say", 1)) //false  должно начинатся с нулевой позиции

//если строка совпдает возвращает, true если нет то false

console.log(text.startsWith("ay")) //false  ищет в начале текста
console.log(text.endsWith("min")) //true  ищет в конце текста

