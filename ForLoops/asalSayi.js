let a = 2;
let isDividing = 0;
for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
        isDividing++;
    }
}
if(isDividing>2 ){
    console.log("sayı asal değildir");
}else if(a==1){
    console.log("sayı asal değildir");
}else{
    console.log("sayı asaldır");
}