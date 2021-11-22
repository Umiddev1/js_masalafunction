function num(x) {
  for (let i = 0; i <= x;i++) {
    if(i % 3 == 0 && i % 5 != 0) {
      console.log(i);
    }
  }
}
num(20);