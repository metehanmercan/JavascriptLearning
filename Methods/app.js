
// Parametresiz ve geri değer döndürmeyen metot tanımlamak

// ? function metot ismi (){}

function metot1() {
    console.log("hello world ");
}
metot1();

// parametreli metot javadan farkı olarak tip belirtilmez

function sum(sayi1, sayi2) {
    console.log(sayi1 + sayi2);
}
sum(1, 2);

function yazdir(name, lastName) {
    console.log(name + " " + lastName);
}
yazdir("Mete", "MERCAN");



let yas = Number(prompt("Yaşınızı giriniz :"));


function check(age) {
    if (age > 18) {
        console.log("ehliyetinizi alabilirsiniz ");
    } else {
        console.log("alamazsınız ");
    }
}
check(yas);