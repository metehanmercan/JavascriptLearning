let a = 5;
let b = "10";


let c = Number(b); // number ile dönüştürme
console.log(a + c);

// parseint ve parsefloat ile dönüştürme 

let x = 8;
let y = parseInt("12"); //! eğer bu kısmı ondalıklı verirsen tam sayı kısmını alır sadece
let z = parseFloat("12.5");
console.log(x + y);
console.log(x + z);

// number veriden stringe dönüştürme 
let i = 55;
let j = String(i); // birinci yol 
let k = (60).toString(); // ikinci yol 

console.log(j + 10); //! cıktı: 5510 olur string iki ifadeyi yapıştırdı 
console.log(j + k);  //! cıktı: 5560 olur string iki ifadeyi yapıştırdı 



