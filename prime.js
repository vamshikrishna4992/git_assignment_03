function checkPrime(n){
let count = 0;
for(let i=1;i<=n;i++){
if(n%i==0){
count++;
}
}
if(count==2){
return true;
}else{
return false;
}
}

let answer=checkPrime(17)
if(answer==true){
console.log("Number is Prime")
}
else{
console.log("Number is not a Prime")
}