function checkPrime(num){
  let factor=0
   for(let i=0;i<=num;i++){
     if(num%i==0){
       factor++
     }
   }
  if(factor==2){
    return true;
  }else{
    return false;
  }
}
let answer=checkPrime(12);
if(answer == true){
  console.log("Num is Prime")
}else{
  console.log("Num is not prime")
}