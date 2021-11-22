function myNum(x) {
  for(let i = 0; i <= x;i++) {
    if(x % i == 0) {
      console.log(i);
    }
  }
} 
myNum(30);