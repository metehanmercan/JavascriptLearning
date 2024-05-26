/*
----------diyalog kutuları--------
!   alert
!   prompt ---- scanner sınıfına benzer  kullanıcıdan alınan değer string döner 
!   confirm 
*/

alert("dikkat");

let namee=prompt("isminizi giriniz");
let age=prompt("yaşınızı giriniz");  
console.log("isminiz : " +namee);
console.log("yaşınız : "+ age);


let sunuc=confirm("silmek istediğinize emin misiniz? ");
console.log(sunuc);
