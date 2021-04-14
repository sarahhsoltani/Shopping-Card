// get all button with class add-cart
let carts=document.querySelectorAll('.add-cart');

let products=[
    {
        name:"shirt",
        tag:"360_443497_2UZIN_4165_001_100_0000_Light-Sac-paule-GGMarmont-Multicolor-petite-taille.jpg",
        price:15,
        inCart:0
    },
    {
        name:"cat",
        tag:"Pantalon_de_survetement_Primeblue_SST_Noir_GD2361_21_model.jpg",
        price:30,
        inCart:0
    },
    {
        name:"dress",
        tag:"Chaussure_Gazelle_Bleu_BB5478_01_standard.png",
        price:20,
        inCart:0
    }
]
// boucle pour 
for (let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i])
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
        // on va tester si le produit existe in local storge ou nn 
        let cartItems=localStorage.getItem("productsInCart")
        // il affiche un json
        console.log('my card items are',cartItems)
        // il faut convertir en un objet js nrml 
        cartItems=JSON.parse(cartItems)
    //     console.log('my card items are',cartItems)
    //    console.log('object',product)
    // on va tester si le prduit existe en ajoute au locl si nn va mettr son nombr +1
    if (cartItems != null){
        // on va tester sur le 2ém prod s'il est ajouté on update locl est le 1er prdc rest fixe
        if (cartItems[product.tag]== undefined){
            cartItems={
                ...cartItems,[product.tag]:product
            }
        }
        cartItems[product.tag].inCart+=1;
    }
    else{
        product.inCart=1;
        cartItems={
            [product.tag]:product
        }
    }
      
       localStorage.setItem('productsInCart',JSON.stringify(cartItems));
    }

    // Total of price
    function totalCost(product){
        let cartCost=localStorage.getItem("totalCost")
        console.log(`my total cost are`, totalCost)
        console.log(typeof cartCost)
        if(cartCost !=null){
            cartCost=parseInt(cartCost);
            localStorage.setItem('totalCost',cartCost+product.price)
        }
        else{
            localStorage.setItem('totalCost',product.price)
        }
    }
   
    // page cart
function displayCard(){
    let cardItems=localStorage.getItem('productsInCart');
    cardItems=JSON.parse(cardItems);
    console.log('in this card is',cardItems)
    let produtContainer=document.querySelector(".prod");
    let cartCost=localStorage.getItem("totalCost")
    if (cardItems && produtContainer){
        produtContainer.innerHTML=''; 
        Object.values(cardItems).map(item=>{
            produtContainer.innerHTML+=
            `<div class="d-flex justify-content-around align-items-center rmv">
            
            <div class="product"> <img src="./image/${item.tag}" class="w-10"></div>
            <div class="name"> <h4>${item.name}</h4></div>
            <div >
            <select
            class="form-select "
            aria-label="Default select example">
            <option selected>your size</option>
            <option value="1">Small</option>
            <option value="2">Over size</option>
            <option value="3">Medum</option>
            </select> </div>
            <div class="price"> <p>${item.price},00 Dt</p></div>
            <div class="quantity"><i class="fas fa-arrow-alt-circle-left"></i><span>${item.inCart}</span>
            <i class="fas fa-arrow-alt-circle-right"></i>
            </div>
            <div class="total"><p>${item.inCart*item.price},00 Dt</p></div>
            <div><button class="remove">removeee</button> </div>
            
            </div>
            <hr>
            `
            console.log("my image",item.tag)
           
        })

        produtContainer.innerHTML +=`
        <div class="totalContainer d-flex justify-content-around mt-5 "> 
        
        <div> <a class="back-home" href="index.html"><i class="fas fa-undo-alt"></i> Continue Shopping</a></div>
        <div class="totall"> <h5> Delevry : Free</h5>
        <h5> SubTotal : ${cartCost},00 Dt</h5>
        <a href="#" class="btn btn-brand px-5 mt-3">Checkout</a>
        </div>
       </div>
        `
    }
    
}
// -------------------------------------------
// Remove item
// const removeItem=document.getElementsByClassName('remove');
// console.log('removeItem :>> ', removeItem);
// for(var i=0;i<removeItem.length;i++){
//     let btnButton=removeItem[i];
//     console.log('nombre de card',btnButton);
//     btnButton.addEventListener('click',()=>{
//         console.log('sara soltani');
        // let cardItem=JSON.parse(localStorage.getItem('productsInCart'));
        // console.log("jjjjjjj",event.target.parentElement.parentElement.children[1].children[0].textContent);
        // cardItem.forEach(item=>{
        //     if (item.name != event.target.parentElement.parentElement.children[1].children[0].textContent){
        //         cartItems.push(item)
        //     }
        // });
    //     localStorage.setItem('productsInCart',JSON.stringify(cartItems));
        
    // window.location.reload()
//     })
   
// }
// -------------------------
let buttonActivator = () => {
    let cartCost=localStorage.getItem("totalCost")
    let removeButtons =  document.querySelectorAll(".remove")

removeButtons.forEach(el => {
    el.addEventListener("click", (e)=>{
         let row = e.target.parentNode.parentNode;
         document.querySelectorAll(".rmv")[0].remove(row)
         e.preventDefault();
    })

 })

} 

// il faut appeler vue qu'il est n'est attacher par listner comme l'autre //when i onload the page
 onLoadCartNumbers()
 displayCard()
 buttonActivator()