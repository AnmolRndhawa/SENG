
let cartProducts =[];
function getData() {
  cartProducts = JSON.parse(localStorage.getItem('cartProductsRecord'));
    console.log(cartProducts);
    displayOrders();
}
getData();

function displayOrders(){


let tempHtml ="";
cartProducts.forEach((cartItem)=>{
  console.log(cartProducts);
    tempHtml += 
    `<div class="itemsInBag grid grid-cols-[25%_1fr_1fr] grid-rows-[1fr_1fr] sm:grid-cols-[5%_10%_2fr_10%_1fr] sm:grid-rows-1 justify-center items-center gap-x-4s sm:gap-x-8 p-2 sm:py-4 border-t-2 bg-white shadow-md rounded-lg sm:rounded-none">
    
          <!-- item1  -->
          <div data-item-id="${cartItem.id}" class="deleteItem w-[40px] h-[40px] opacity-70 cursor-pointer row-start-1 col-start-3 sm:col-start-1 ml-auto sm:ml-0 mb-auto sm:mb-0">
            <img class="min-w-full min-h-full" src="images/icons/cross-svgrepo-com.svg" alt="remove item">
          </div>
          <!-- item2  -->
           <div class="w-24 h-24 rounded-lg overflow-hidden row-start-1 col-start-1 sm:col-start-2">
             <img src="${cartItem.image}" alt="Product Image" class="w-full h-full object-cover bg-black">
            </div>
    
          <!-- item3  -->
          <h3 class="text-xs font-bold text-start row-start-1 col-start-2 col-end-4 sm:col-start-3 ml-8">${cartItem.name}</h3>
          <!-- item4  -->
          <div class="quantityControlWrapper items-center text-xs font-PopinsStyle ml-auto row-start-2 col-start-1 sm:row-start-1 sm:col-start-4 flex flex-col">
            <span class="text-gray-500 md:hidden">Qty: </span>
    
               <div class="flex items-center justify-between mt-2 space-x-2 border-[1px] border-black">
                   <button  data-item-id="${cartItem.id}" class="minusButton bg-gray-200 text-gray-700 px-3 py-1 hover:bg-gray-300">-</button>
                   <span class="text-lg font-medium">${cartItem.quantity}</span>
                   <button  data-item-id="${cartItem.id}" class="addButton bg-gray-200 text-gray-700 px-3 py-1 hover:bg-gray-300">+</button>
                </div>
            </div>
          <!-- item5  -->
          <div class="text-xs font-PopinsStyle row-start-2 col-start-3 sm:row-start-1 sm:col-start-5 flex flex-col items-center">
            <span class="text-gray-500 md:hidden">Price: </span>
            <!-- Price -->
            <div class="text-lg font-semibold">₹ ${Number((cartItem.price.replace(/,/g,"")) * Number(cartItem.quantity)).toLocaleString()}</div>
        </div> 
    
        </div>`;

});
  document.querySelector('.cart').innerHTML = tempHtml;
 
}; 


// coding for edit cart
// coding for edit cart
// coding for edit cart

// removing function starts
// removing function starts
const cartDiv = document.querySelector('.cart');
if(cartDiv)
  cartDiv.addEventListener("click",(event)=>{
    if(event.target.closest(".deleteItem")){
      let deleteItemButton = event.target.closest(".deleteItem");
      let itemId = deleteItemButton.dataset.itemId;
             if(itemId){
                      removeItemFromCart(itemId);
              }  else{
                     console.log("itemId not avai");
  
              }

    } // if ends
    else if(event.target.closest(".minusButton")){

      let minusButton = event.target.closest(".minusButton");
      let itemId = minusButton.dataset.itemId;
      
      
      if(itemId){
        quantityControlFromCart(itemId,"minus");
        calculateTotolAmount(itemId);
      } else{
        console.log("itemId not available");
        
      }
      
    } //else if ends
    else if(event.target.closest(".addButton")){
      let addButton = event.target.closest(".addButton");
      let itemId2 = addButton.dataset.itemId;
      if(itemId2){
        quantityControlFromCart(itemId2,"add");
        calculateTotolAmount(itemId2);
}  else{
       console.log("itemId not avai");

}

    }


    localStorage.setItem('cartProductsRecord', JSON.stringify(cartProducts));
    displayOrders();
    SummaryOrBill();

})

// functions for actions
// functions for actions
// functions for actions

function removeItemFromCart(idParam){
  cartProducts = cartProducts.filter(productItem=> productItem.id !==idParam);
  SummaryOrBill();

}

function quantityControlFromCart(idParam , actionParam){
  let targetProduct = cartProducts.find(productItem=> productItem.id === idParam);

  if(targetProduct.quantity>1 && actionParam ==="minus"){
        cartProducts.forEach((cartItem)=>{
    
          if(cartItem.id=== targetProduct.id){
            cartItem.quantity -= 1;
          }
    
        });

  }else if(targetProduct.quantity<=1 && actionParam ==="minus"){
    console.log("reached limits");
  }else if(targetProduct.quantity<10 && actionParam ==="add"){
         cartProducts.forEach((cartItem)=>{
        
           if(cartItem.id=== targetProduct.id){
             cartItem.quantity += 1;
           }
         
         });

  } else if(targetProduct.quantity>=10 && actionParam ==="add"){
    console.log("reached limits");
  } else {
    console.log("something went wrong with limits");

  }

  SummaryOrBill();

}


localStorage.setItem('cartProductsRecord', JSON.stringify(cartProducts));
    displayOrders();

function calculateTotolAmount(idParam){
  cartProducts.forEach((cartItem)=>{
       if(cartItem.id=== idParam){
        cartItem.totalPrice =  Number(cartItem.price.replace(/,/g,"")) *  cartItem.quantity;
       }
  });
}

    // bill functions 
    // bill functions 
    let FinalOrderDetails = JSON.parse(localStorage.getItem('finalOrder')) || null;

  
    function SummaryOrBill(){
      localStorage.setItem('cartProductsRecord', JSON.stringify(cartProducts));
    displayOrders();

// total cart
let cartTotalCount = '';
cartTotalCount = cartProducts.reduce((accmulator, item)=>{
  return accmulator + item.totalPrice; 
},0)

// total products count

let totalProductsCount = '';
totalProductsCount = cartProducts.reduce((accmulator, item)=>{
  return accmulator + item.quantity; 
},0)

// total cart
      let cartTotal =document.querySelectorAll('.cartTotal');
      cartTotal.forEach((cartTotalDIV)=>{
        cartTotalDIV.innerHTML = `₹ ${cartTotalCount.toLocaleString()}`;
      })

      let totalProducts =document.querySelectorAll('.totalProducts');
      totalProducts.forEach((totalProductDIV)=>{
        totalProductDIV.innerHTML = ` ${totalProductsCount.toLocaleString()}`;
      })


      // tax count 18% gst
        
      let taxCount = cartTotalCount * 0.18;
      document.getElementById("textCount").innerHTML= `₹ ${parseInt(taxCount).toLocaleString()}`;
     
      // tax count free if total amount 

      let deliveryCountFunction = ()=>{
        if(cartTotalCount<=80000){
          return cartTotalCount * 0.01;
        }else if(cartTotalCount>80000){
          return cartTotalCount * 0;

        }
      };
      let deliveryCount = deliveryCountFunction();
      document.getElementById("deliveryCount").innerHTML= `₹ ${parseInt(deliveryCount).toLocaleString()}`;
     
      // total count free if total amount 
      // total count free if total amount 

      let totalAmountCount = cartTotalCount + taxCount + deliveryCount;
      document.getElementById("totalAmount").innerHTML= `₹ ${parseInt(totalAmountCount).toLocaleString()}`;
     
      // return { totalProductsCount, totalAmountCount };
      FinalOrderDetails = {
      finalPrice :parseInt(totalAmountCount),
     finalProducts : totalProductsCount
     }
      
      localStorage.setItem('finalOrder', JSON.stringify(FinalOrderDetails));
    }
    SummaryOrBill();


    // gettiing final values

    // let finalValues = SummaryOrBill();

    // let FinalOrderDetails = {
    //   finalPrice: parseInt(finalValues.totalAmountCount),
    //   finalProducts: finalValues.totalProductsCount
    // };


    // proceedButton

    const proceedToCheckoutButton = document.getElementById("proceedToCheckoutButton");
    proceedToCheckoutButton.addEventListener("click",()=>{
      window.location.href = "checkOut.html";

    });
