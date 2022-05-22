function Queen(x1, y1, x2, y2) {
  if (Math.abs(x1-x2 == y1-y2) || (x1==x2 || y1==y2)) {
    return "Yes";
  } else{
      return "No";
  }
}
console.log(Queen(1, 1, 8, 1));
console.log(Queen(3, 2, 8, 3));
console.log(Queen(4, 4, 4, 2));
console.log(Queen(4, 4, 4, 7));


