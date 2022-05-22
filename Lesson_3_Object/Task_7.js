const table = {
      custID: 11,
      CustName: "Salvador",
      CustAddress: "Main Street North",
      Family: {
            sister: "Jane",
            brother: "Golib",
            father: "Dad",
            mother: "Mom"
      },
      CustPhone: "+992900330687"
} 

const {custID, CustName, CustAddress, CustPhon, Family:{sister, brother, father, mother}} = table
console.log(table)
console.log(sister)
console.log(table.Family)