function numberPerfect(x) {
  for (let i = 1; i<= x;i++) {
    let sum = 0;

    for (let j = 1; j < i;j++) {
      if(i % j == 0) {
        sum += j;
      }
    }
    if(sum == i) {
      console.log(i);
    }
  }
}
numberPerfect(1000);