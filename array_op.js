const nums = [ 2,1,4,5,6,9];

for(let i=0; i<nums.length; i++){
    console.log(nums[i]);
}
console.log("-----");
for(let i of nums){
    console.log(i);
}

nums.forEach((n,i)=> {console.log(n,i)} ); //array with index
nums.forEach((n)=> {console.log(n)} );

//find sum of all elements of array
 console.log("----------");
 let sum=0;
nums.forEach((i)=> {sum+=i;} );
console.log("sum:", sum);

// create new array with cube of all elements
let myarr =[];
for(let i of nums){
    myarr.push(i**3);
};
console.log(myarr);
//const prices = ['$687.35', '$23.4', '$123.45', '$987.652']
//remove dollarsign and convert the array
//[687,23,123,987]
console.log(parseInt('$687.35'.slice(1))); //example


const prices = ['$687.35', '$23.4', '$123.45', '$987.652'];
console.log(prices);
const numprices=[];
prices.forEach((p) => {numprices.push(parseInt(p.slice(1)))});
console.log(numprices);
