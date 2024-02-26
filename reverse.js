let num = 56324;
let reverse = 0;

while(num>0){

    console.log(num);

    let d = num%10;
    reverse = reverse*10+d;
    num = parseInt(num/10);

}
console.log(reverse);