function addnums(a,b){
     c=a+b;  // var only works in function
    console.log(c);
    return c;
}
const ans = addnums(25,750);

console.log(c);
console.log(ans); //it will not work if function is not returning anything 

const getAvg = function(a,b,c){
    return (a+b+c)/3;
}
const avg = getAvg(35,85,25);
console.log(avg);

//es6 

const factorial = (n) => {
    let fact = 1;
    for(let i=1; i<=n; i++){
        fact *= i;
    }
    return fact;
}
 console.log(factorial(5));