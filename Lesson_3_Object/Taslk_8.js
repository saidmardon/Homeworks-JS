let person = {
      name: "Said",
      age: 20,
      marks: {
            math: 75,
            lang: {
                  englsih: 80,
                  russian: 90
            }
      }
}
let {lang} = person.marks //giving variable (деструктуризация)
console.log(lang)