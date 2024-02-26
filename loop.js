for( let i=0; i<10; i++){
    console.log(i);
}
console.log("-------");
const nums = [8,5,2,3,6,4];

for(let n of nums){
     console.log(n);
}
// find summ of all numbers from 100 to 300 which are divisible by 7 or 11
console.log("------");
for(i=100; i<=300; i++){
     if(i%7 === 0 && i%11 === 0){
          console.log(i);
         let sum += i;
     }
}
console.log("sum:" sum);