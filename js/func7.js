function numberPrime(x,y) {
  for (let i = x; i <= y;i++) {
    let count = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        count = 1;
        break;
      }
    }
    if(i > 1 && count == 0) {
      console.log(i);
    }
  }
}
numberPrime(1,10);