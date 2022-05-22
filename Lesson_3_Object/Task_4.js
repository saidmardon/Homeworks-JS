let person = {
      name: "Said",
      age: 20,
      "name 2": "Mardonov" // This rule for keys
}
console.log(person)
console.log(person.age) //first vesrison
console.log(person["name 2"])//second version when it has probel
console.log(typeof person)
console.log(typeof person.age)
console.log(person["age"])