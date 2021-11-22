function myNum(x) {
  let a = 0;
  for(let i = 0; i <= x;i++) {
    if(x % i == 0) {
      a += i;
    }
  }
  console.log(a);
} 
myNum(15);