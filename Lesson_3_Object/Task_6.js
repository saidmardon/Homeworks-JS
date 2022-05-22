const canStudentEnter = (clothes = false, tie = false, bag = false) => {
      if(clothes && tie && bag){
            alert("You can enter")
      } else {
            alert("You can not enter")
      }
}
canStudentEnter(
      confirm("Do you have clothes?"),
      confirm("Do you have tie?"),
      confirm("Do you have bag?")
)

//over

let ages = +prompt("How old are you?");
const date = new Date();
alert(`Age ${date.getFullYear() - ags}`);


//over


let age = +prompt("Just for 18 and up")

if(age>=18){
      alert("You can enter")
}
else {"You can not enter"} 