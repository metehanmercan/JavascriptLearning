
//* çiftleri yaz
for(let i=1;i<11;i++){
   
    if(i%2==0){
        console.log(i)
    }
}
console.log("---------")

//* tekleri yaz
for(let i=1;i<11;i++){
   
    if(!(i%2==0)){
        console.log(i)
    }
}
console.log("-------------")
// 1 den 50 ye kadar olan sayıları  yaz ve topla
let sum=0;
for(let i=1;i<=50;i++){
    console.log(i);
    sum +=i;
}
console.log(sum);