let product1 = {
    namee: "ACER Swift",
    category: "technology",
    price: 6219

}
let product2 = {
    namee: "ACER Nitro 5",
    category: "technology",
    price: 15475

}
let product3 = {
    namee: "ACER Gaming",
    category: "technology",
    price: 13999

}
let product4 = {
    namee: "LENOVO V15",
    category: "technology",
    price: 10999

}
let product5 = {
    namee: "LENOVO V14",
    category: "technology",
    price: 4399

}
let product6 = {
    namee: "LENOVO Ideapad",
    category: "technology",
    price: 4510

}

let products = [product1, product2, product3, product4, product5, product6];
let withFilterProduct=[];
let search=prompt("ürün ismi giriniz ");

addFilterProduct(search);
getProduct(withFilterProduct);

function addFilterProduct(search){
    products.forEach(function (product){
        if (product.namee.toUpperCase().includes(search.toUpperCase(),0)){
           withFilterProduct.push(product);
        }
    } );
}
function getProduct(products){
    products.forEach(function (product){
        console.log("--------------------------");
        console.log("|"+product.namee+"|"+product.category+"|"+product.price);
        console.log("--------------------------");
     });
}


 