const btn=document.getElementsByClassName('add-cart');
const products=[];
// console.log('hhhhhhhhhhhh',btn);
for(let i=0;i<btn.length;i++){
let cartBtn=btn[i];
cartBtn.addEventListener('click',()=>{
console.log(event.target.parentElement.parentElement.children[2].children[0].textContent);
let product={
    image:event.target.parentElement.parentElement.children[0].children[0].src,
    name:event.target.parentElement.parentElement.children[1].children[0].textContent,
    price:event.target.parentElement.parentElement.children[2].children[0].textContent,
    totalPrice:parseInt(event.target.parentElement.parentElement.children[2].children[0].textContent),
    quantity:1
}
console.log("my product",product);
addItemToLOcal(product);
})

}
function addItemToLOcal(product){
    let cardItem=JSON.parse(localStorage.getItem('inCard'))
    if(cardItem===null){
        products.push(product)
        localStorage.setItem('inCard',JSON.stringify(products))
        
    }
    else{
        cardItem.forEach(item=>{
            if(product.name==item.name){
                product.quantity=item.quantity+=1;
                product.totalPrice=item.totalPrice+=product.totalPrice;
            }
            else{
                products.push(item)
            }
        })
        products.push(product)
    }
    localStorage.setItem('inCard',JSON.stringify(products))
    window.location.reload()
}
// Card Item
function displayCardItem(){
    let html="";
    let cardItem=JSON.parse(localStorage.getItem('inCard'));
    cardItem.forEach(item=>{
        html+= 
          `
        <div class="d-flex justify-content-around align-items-center rmv">    
        <div class="product"> <img src="${item.image}" class="w-10"></div>
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
        <div class="quantity"><i class="fas fa-arrow-alt-circle-left"></i><span>${item.quantity}</span>
        <i class="fas fa-arrow-alt-circle-right"></i>
        </div>
        <div class="total"><p>${item.totalPrice},00 Dt</p></div>
        <div  class="remove"><button>remove</button> </div>
        
        </div>
        <hr>
        `
    })
    
document.querySelector('.prod').innerHTML=html;

}
displayCardItem()
// -------------------------
// -------------------------
// Numbr of product in card
function cardNUmber (){
    let cardNmb=0;
    let cardItem=JSON.parse(localStorage.getItem('inCard'));
    cardItem.forEach(item=>{
        cardNmb=item.quantity+=cardNmb;
    })
const br=document.querySelector('.linnk span').textContent=cardNmb;
console.log('card numeeeeeer ', br);
}
cardNUmber ()

// Remove item
const removeItem=document.getElementsByClassName('remove');
for(var i=0;i<removeItem.length;i++){
    let btnButton=removeItem[i];
    console.log('nombre de card',btnButton);
    btnButton.addEventListener('click',()=>{
        let cardItem=JSON.parse(localStorage.getItem('inCard'));
        console.log("jjjjjjj",event.target.parentElement.parentElement.children[1].children[0].textContent);
        cardItem.forEach(item=>{
            if (item.name != event.target.parentElement.parentElement.children[1].children[0].textContent){
                products.push(item)
            }
        });
        localStorage.setItem('inCard',JSON.stringify(products))
    window.location.reload()
    })
   
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
//         let cardItem=JSON.parse(localStorage.getItem('productsInCart'));
//         console.log("jjjjjjj",event.target.parentElement.parentElement.children[1].children[0].textContent);
//         cardItem.forEach(item=>{
//             if (item.name != event.target.parentElement.parentElement.children[1].children[0].textContent){
//                 cartItems.push(item)
//             }
//         });
//         localStorage.setItem('productsInCart',JSON.stringify(cartItems));
        
//     window.location.reload()
//     })
   
// }
// ------------------------------------------------------------------------------------
//  const removeItem=document.getElementsByClassName('remove');
//  for(var i=0;i<removeItem.length;i++){
//      let btnButton=removeItem[i];
//      //console.log('nombre de card',btnButton);
//      btnButton.addEventListener('click',()=>{
        
//          let cardItem=JSON.parse(localStorage.getItem('inCard'));
//          //console.log("jjjjjjj",event.target.parentElement.parentElement.children[1].children[0].textContent);
//          cardItem.forEach(item=>{
//              let  row = event.target.parentNode.parentNode;
//              console.log('rrrrrrrrrrrr',event.target.parentNode.parentNode);
//              if (item.name != row){
//                  products.push(item)  
                 
//              }
//          });
//          localStorage.setItem('inCard',JSON.stringify(products))
//          window.location.reload()
//      })
    
//  }
// --------------------------------------------------------------------------------------



// let buttonActivator = () => {
    
//     let removeButtons =  document.querySelectorAll(".remove")

//       removeButtons.forEach(el => {
//       el.addEventListener("click", (e)=>{
        
//          let row = e.target.parentNode.parentNode;
//          document.querySelectorAll(".rmv")[0].remove(row)
      
//          console.log('rowwwwwwww :>> ', row);
//          e.preventDefault();

   
//         let productNumbers=localStorage.getItem('cartNumbers');
//         productNumbers=parseInt(productNumbers);
//         console.log('removeeeeeeeeeeeeeeeee',productNumbers-1);
//         document.querySelector('.linnk span').textContent=productNumbers-1;
//         let cartCost=localStorage.getItem("totalCost")
//         localStorage.setItem('totalCost',cartCost+product.price)
   
//     })

 
//  }) 


//  } 

//  buttonActivator()