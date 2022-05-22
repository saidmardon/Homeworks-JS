function Bishop(x1, y1, x2, y2){
      if (Math.abs(x1-x2)-(y1-y2)<=1){
           return "Yes";
      }
      return "No";
}
console.log(Bishop(1,1,5,5))
console.log(Bishop(3,2,2,2)) 

//https://informatics.msk.ru/mod/statements/view.php?id=276&chapterid=255#1
