function numberPrime(num) {
  let count = 0;
  for (let i = 1; i <= num;i++) {
    if(num % i == 0) {
      count++;
    }
  }
  if (count > 2) {
    console.log("Tub Son Emas");
    return false;
  }
  else {
    console.log("Tub Son");
    return true
  }
}

numberPrime(6);