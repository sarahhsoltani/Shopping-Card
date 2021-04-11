// get all button with class add-cart
let carts=document.querySelectorAll('.add-cart');

let products=[
    {
        name:"shirt",
        tag:"grey",
        price:15,
        inCart:"0"
    },
    {
        name:"cat",
        tag:"blue",
        price:30,
        inCart:"0"
    },
    {
        name:"dress",
        tag:"red",
        price:20,
        inCart:"0"
    }
]
// boucle pour 
for (let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
    })
}
// loalstorge to the cart when i onload the page
function onLoadCartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');
    if (productNumbers){
        document.querySelector('.linnk span').textContent=productNumbers;
    }
}
function cartNumbers(product){
    console.log('the product aded is',product)
    let productNumbers=localStorage.getItem('cartNumbers');
    productNumbers=parseInt(productNumbers);
    
    if (productNumbers){
        localStorage.setItem('cartNumbers',productNumbers+1);
        document.querySelector('.linnk span').textContent=productNumbers+1;
    }
    // si on a p d produit il faut mettr à 1 ainsi que panier
    else{
        // add to localstorge
    localStorage.setItem('cartNumbers',1)
    document.querySelector('.linnk span').textContent=1;
    }
    setItems(product);
}
    function setItems(product){
       console.log('object',product)
       product.inCart=1;
       let cartItems={
           [product.tag]:product
       }
       localStorage.setItem('productsInCart',JSON.stringify(cartItems));
    }
// il faut appeler vue qu'il est n'est attacher par listner comme l'autre
 onLoadCartNumbers()
