// kelime sayısı bulma

let metin = "Şuanda Yalova 'da Javascript eğitimi çekmekteyim.".toLowerCase();
let harf = prompt("harfi giriniz ");

let sonuc = bul(harf);
alert("harf sayısı :" + sonuc);

function bul(harf) {
    let toplam = 0;
    for (let i = 0; i < metin.length; i++) {
        if (metin.charAt(i) === harf) {
            toplam += 1;
        }
    }
    return toplam;
}
// mükemmel sayı bulma 
let sayi = Number(prompt("bir sayı giriniz : "));
let toplam=0;
isPerfect(sayi);
function isPerfect(sayi) {
    for (let i = 1; i <= sayi; i++) {
        if(sayi%i==0){
          toplam+=i;
        }
    }
   
    if(toplam==2*sayi){
        alert("sayi mükemmeldir: "+sayi);
    }else{
        alert ("sayi mükemmel değildir: "+sayi);
    }
}


