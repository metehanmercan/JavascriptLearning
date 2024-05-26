function hello(){
    var hi="herkese selam"
    console.log(hi);
}
hello();

if(true){
    let a=5;
    console.log(a);
} 

/*
* VERİ TİPLERİ
STRİNG-NUMBER-BOOLEAN-UNDEFINED-OBJECT-FUNCTION
  */ 

 let isim="mete";   //! string tipi 
 console.log(isim); 
 console.log(typeof isim)
 
 let sayi1=10.5;  // !  number tipi  double int gibi değil hepsi number 
 console.log(sayi1); 
 console.log(typeof sayi1)

 let sayi2=5;
 console.log(sayi2<10)  //! true dönecek  boolean

 let a;
 console.log(a); //! oluşturulmuş ama değer ataması yapılmamış undefined

 let user={
    username:"ali",
    age:24
 }
 console.log(user) //! {username: 'ali', age: 24}  object veri tipi 

