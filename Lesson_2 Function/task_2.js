function Year (a){
     if(a%4==0 && a%400==0){
           return "Yes";
     }
     return "No"
}
console.log (Year(2000))

//https://informatics.msk.ru/mod/statements/view.php?id=276&chapterid=253#1