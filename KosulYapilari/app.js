/*
let not=35;
if(not>50){
    console.log("geçtiniz notunuz : "+not)
}else{
    console.log("kaldınız notunuz : "+ not)
}



let age=Number(prompt("yaşınız :")); //! prompt bize girilen değeri string dönderdiği için bu number'a dönüştürdük 
let money=Number(prompt("bütçeniz :"));
if(age>=18 && money>=3000){
  alert("sınava katılabilirsiniz ");
}else{
    alert("sınava katılamazsınız "); 
}

// not ortalama hesaplama
let vize1=Number(prompt("vize 1 notunuzu giriniz: "));
let vize2=Number(prompt("vize 2 notunuzu giriniz: "));
let final=Number(prompt("final notunuzu giriniz: "));

let avarage=((vize1*30)/100 +(vize2*30)/100 + (final*40)/100 )
if(avarage<50){
alert("kaldınız ortalama: " +avarage)
}else{
    alert("geçtiniz ortalama  : "+avarage)
}  
*/

let dizel=24.53,benzin=22.25,lpg=11.1;
const yeniSatir="\r\n";
const yakitMetni="1-Dizel"+yeniSatir+"2-Benzin"+yeniSatir+"3-Lpg"+yeniSatir+"Lütfen yakıt tipini giriniz";
let fuel=Number(prompt(yakitMetni));

let money=Number(prompt("bakiyenizi giriniz"));
let litre=Number(prompt("kaç litre yakıt almak istiyorsunuz?"));


if(fuel==1){
  let total=dizel*litre;
 if(money>=total){
   alert("yakıt alma işlemi başarılı. "+yeniSatir+"Kalan bakiyeniz: "+(money-total));
 }else{
    alert("bakiyeniz yetersizdir "+yeniSatir+"eksik bakiye: "+(total-money));
 }
}else if(fuel==2){
let total=benzin*litre;
 if(money>=total){
    alert("yakıt alma işlemi başarılı. "+yeniSatir+"Kalan bakiyeniz: "+(money-total));
  }else{
    alert("bakiyeniz yetersizdir "+yeniSatir+"eksik bakiye: "+(total-money));
 }
}else if(fuel==3){
  let total=lpg*litre;
    if(money>=total){
        alert("yakıt alma işlemi başarılı. "+yeniSatir+"Kalan bakiyeniz: "+ (money-total));
      }else{
        alert("bakiyeniz yetersizdir "+yeniSatir+"eksik bakiye: "+(total-money));
     }
}else{
    alert("geçerli değer giriniz ")
}



