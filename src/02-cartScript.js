import { productLog } from "./productsLog.js";

document.querySelectorAll('.cartButton').forEach((buttonItem)=>{
    buttonItem.addEventListener("click",()=>{
        
        let action = buttonItem.dataset.action;
        const cartPannel = document.querySelector('.cartPannel');
        
        if(action==="open"){
            cartPannel.classList.toggle("right-[-100%]");
            cartPannel.classList.toggle("right-0");
        }
    })
});



//creating addToCart products Array

let cartProducts = JSON.parse(localStorage.getItem('cartProductsRecord')) || [];

//INDEX.HTML order button eventListener 
//INDEX.HTML order button eventListener 
let showMyProducts =  document.querySelector('.showMyProducts');
if(showMyProducts){
    
    showMyProducts.addEventListener("click",(event)=>{
        
        let triggerButton = event.target.closest('.orderButton');
        
        let priceAttribute_String = triggerButton.getAttribute("priceAttribute");
        let priceAttribute_float = parseFloat(priceAttribute_String);
        
        
        // calling adding Items To Cart function
        addingItemsToCart(triggerButton,priceAttribute_float);
    });
    
};
//SEARCHRESULT.HTML order button eventListener 
//SEARCHRESULT.HTML order button eventListener 
let detailSection =  document.querySelector('.detailSection');
if(detailSection){
    
    detailSection.addEventListener("click",(event)=>{
        let triggerButton = event.target.closest('.buyFromDetails');
        let priceAttribute_String = triggerButton.getAttribute("priceAttribute");
        let priceAttribute_float = parseFloat(priceAttribute_String);
        
        
        // calling adding Items To Cart function
        addingItemsToCart(triggerButton,priceAttribute_float);
    });
    
};

// carousleSection order button eventListener 
// carousleSection order button eventListener 

const carousleSection = document.querySelector('.carousleSection');
if(carousleSection){

    carousleSection.addEventListener("click", (event) => {
        let triggerButton = event.target.closest('.buyButtonOnCarousle');
        // let productId = triggerButton.dataset.productId;
        let priceAttribute_String = triggerButton.getAttribute("priceAttribute");
        let priceAttribute_float = parseFloat(priceAttribute_String);
            addingItemsToCart(triggerButton, priceAttribute_float);
    });
};

// adding Items To Cart function
// adding Items To Cart function
function addingItemsToCart(triggerButton,priceAttribute_float){
    if(triggerButton && (!isNaN(priceAttribute_float))){
        console.log("pass1");
    
     //getting product id from button dataset
     let productId = triggerButton.dataset.productId;
     console.log(productId);
     
     // find product in prductLog array
     let myProduct = findMyProduct(productId);
     
     //checking if we found out the product on not??
     let productAvailability =false;
     
     
     // updating product in cartProducts array if product is available already
     cartProducts.forEach((cartProductsItem)=>{
         if(myProduct.id === cartProductsItem.id){
             //updating quantity 
             cartProductsItem.quantity += 1;
             //updating total price 
             cartProductsItem.totalPrice = Number(cartProductsItem.price.replace(/,/g,"")) *  cartProductsItem.quantity;
             productAvailability = true;
            };
        });
        
        // push product in cartProducts array if not available
        if(!productAvailability){
            myProduct.quantity = 1; // Initial quantity
            myProduct.totalPrice = Number(myProduct.price.replace(/,/g, "")); // Calculate total price
            cartProducts.push(myProduct);
        }
        
        displayCart();
        cartIconAnimaion();
        notiFyMeFunction();
        console.log("pass2");
        localStorage.setItem('cartProductsRecord', JSON.stringify(cartProducts));
        
        
        
    }
};
   
function findMyProduct(productIdParam){

    let myProduct = productLog.find(filterItem=> filterItem.id === productIdParam);
    if(myProduct){
        return{
            ...myProduct,
            quantity:1,
            totalPrice: Number(myProduct.price.replace(/,/g,""))
        };

    }

 return null
};


// cart products structre
// cart products structre
// cart products structre


// adding or displaying cartProducts on cartItemsDiv
// adding or displaying cartProducts on cartItemsDiv
function displayCart(){

    let tempHtml ="";
    
    cartProducts.forEach((item)=>{
        tempHtml +=`<div class="itemsInCart flex items-center gap-x-4 overflow-hidden">
        
        <div class="h-10 w-12 relative">
        <img class="object-center object-cover" src="${item.image}">
        </div>

        <div class="">
        <p class="">${item.name}<span class="block"> Qty: ${item.quantity}</span></p>
        </div>
       
         <div data-item-id="${item.id}" class="removeItemInCart h-[30px] w-[30px] flex items-center text-center opacity-[0.5] ml-auto cursor-pointer">
          <img class="min-h-full w-full" src="src/images/icons/cross-svgrepo-com.svg" type="svg" alt="Img">
         </div>
        
        </div>`;
    })

    
    let cartItemsDiv = document.querySelector('.cartItemsDiv');
    if(cartItemsDiv){
        cartItemsDiv.innerHTML = tempHtml;
    }
    // dispkaying total amount and totol products
    displayTotalValueInCart();
// summary for orders
localStorage.setItem('cartProductsRecord',JSON.stringify(cartProducts));

} // add or display cartproducts ends


// displaying and saving products cart outside the functions 
displayCart();
localStorage.setItem('cartProductsRecord', JSON.stringify(cartProducts));


function displayTotalValueInCart(){
    
    const totalPrice = cartProducts.reduce((accumulator, item)=>{
        return accumulator + item.totalPrice;
    },0);
    
    const totalProducts = cartProducts.reduce((accumulator, item)=>{
        return accumulator + item.quantity;
    },0);
    
    if( document.querySelector('.cartTotalAmount')){
        document.querySelector('.cartTotalAmount').innerText = totalPrice.toLocaleString();
    }
    if( document.querySelector('.cartTotalProduct')){

        document.querySelector('.cartTotalProduct').innerText = totalProducts.toLocaleString();
    }
    localStorage.setItem('cartProductsRecord', JSON.stringify(cartProducts));
    
}
displayTotalValueInCart();


// remove items form cart
// remove items form cart
document.querySelectorAll('.cartItemsDiv').forEach((divItem)=>{
    
    divItem.addEventListener("click",(event)=>{
        if(event.target.closest(".removeItemInCart")){
            let targetItem = event.target.closest(".removeItemInCart");
            let itemId = targetItem.dataset.itemId;
            
            if(itemId){
                removeItemFromCart(itemId);
            }else{
                console.log("itemId not avai");
        
            }
            
        };

        displayCart();
        localStorage.setItem('cartProductsRecord', JSON.stringify(cartProducts));

    });
    
    
})


localStorage.setItem('cartProductsRecord', JSON.stringify(cartProducts));

function removeItemFromCart(idParam){
    cartProducts = cartProducts.filter(productItem=> productItem.id !==idParam);

}

// extra functions 
// extra functions 


// cartIconAnimaion 

function cartIconAnimaion(){
const cartButton = document.querySelector('.cartButton');
if(cartButton){
    cartButton.classList.add("AnimateMe-gadient");
    
    setTimeout(()=>{
        cartButton.classList.remove("AnimateMe-gadient");
        
    },1000);
};
};

//nofication notiFyMe

function notiFyMeFunction(){

   let notiFyMe = document.querySelector('.notiFyMe');
    if(notiFyMe){
        notiFyMe.classList.remove("hidden");
        notiFyMe.classList.add("flex");
        setTimeout(()=>{
            notiFyMe.classList.remove("flex");
            notiFyMe.classList.add("hidden");
    
        },2000);
    };
};


// localStorage.removeItem('cartProductsRecord');
console.log("cartlog");
console.log(cartProducts);