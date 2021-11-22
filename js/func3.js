function numberPerfect(number)
{
let temp = 0;
   for(let i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
       console.log("Mukammal Son.");
        } 
     else
        {
       console.log("Mukammal Son emas.");
        }   
 } 
numberPerfect(28);