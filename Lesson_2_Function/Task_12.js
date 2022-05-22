function indexEven(n){
      let arr = [4, 5, 3, 4, 2, 3]
      let arr1 = arr.filter(function(elem, index){
            if(index%2==0){console.log(elem)} //index%2!=0 тоқҳоро мебарорад
      })
}
indexEven()

// 4 3 2