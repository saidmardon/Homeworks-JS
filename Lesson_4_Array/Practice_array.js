function Array() {
  let arr = [1, 5, 1, 5, 1]; //чанд рақам ҳаст ки аз ҳарду ҳамсояш калон бошад?
  let counter = 0;
  let arr1 = arr.filter(function (elem, index) {
    if (arr[index] > arr[index - 1] && arr[index] > arr[index + 1]) counter++;
  });
  console.log(counter);
}
Array();
//Lasts

function func() {
  let arr3 = [70, 80, 85, 90];
  let result = arr3.map(function (elem, index) {
    return elem + 5;
  });
  return result;
}
console.log(func());
//Lasts

function secondElement() {
      let arr = [1, -3, 4, -2, 1];
      let counter =0
      let array = arr.filter(function (elem, index) {
        if (
          (arr[index - 1]>0 && arr[index]>0 && arr[index+1]>0 )
           ||
          (arr[index]<0 && arr[index - 1]<0 && arr[index+1]<0 )
        ) {
        counter++
        }
      });
      if(counter>0){console.log("yes")}
      else {
          console.log("no")
      }
    }
secondElement();
