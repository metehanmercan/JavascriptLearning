// string sınıfının metotları 

  let kurs="Modern Web Geliştirme Kursu";

// charAt index nusuna göre karakteri döner 
console.log(kurs.charAt(0));

// concat iki ve daha fazla  stringi birleştirir 
console.log(kurs.concat(" Başla"));

// indexOf verilen karakterin indexini döner
console.log(kurs.indexOf("de"));

// lastIndexOf verilen kelimenin ilk indexini döner
console.log(kurs.lastIndexOf("Kursu"));

// tuUpperCase büyük harfe çevirir
//toLowerCase küçükb harfe çevirir

// trim baştaki ve sondaki boşlukları siler 

// slice iki index içindeki ifadeyi döner 
console.log(kurs.slice(7,10)); 

//substing iki index içindeki ifadeyi döner 
console.log(kurs.slice(0,6)); 

// replace ifadenin yerine  yeni değer atar
console.log(kurs.replace("Modern","Güncel"));

 // split  verilen karaktere göre dizi yapar ifadeleri 
 console.log(kurs.split(" "));

 //valuOf primitive yapar
 console.log(kurs.valueOf());
