const person = {
      name: 'said',
      age: 35,
      country: {
            city: "Dangara",
            hobby: "Football",
            job: function(){
                  return this.city;
            }
      }   
}
console.log(person.country.job())