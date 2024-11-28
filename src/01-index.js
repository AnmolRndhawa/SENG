import { productLog } from "./productsLog.js";


    // carousel items 
    const carousel = document.querySelector('.carousel');

    const carouselArray =[
        {
        title:"Popular",
        tag:"popular"
    },
        {
        title:"New",
        tag:"new"
    },
        {
        title:"Feature",
        tag:"featuring"
    }
]
 let htmlGenerator="";
 
 
 carouselArray.forEach((item)=>{
     
     htmlGenerator += ` 
     <div data-tag-name = "${item.tag}" class="carouselItems min-h-max relative flex flex-col rounded-2xl cursor-pointer w-max snap-start hover:bg-black">
     <p class="text-black font-PopinsStyle font-normal p-2 md:text-lg lg:text-xl hover:text-white ">${item.title}</p>
     </div>
        `
        
     
    });
   
    carousel.innerHTML=htmlGenerator;

    

    // buttons
    // buttons
    document.querySelectorAll('.carouselButton').forEach((item)=>{
        item.addEventListener("click",()=>{
            
            let buttonName = item.dataset.buttonName;
            
            let carouselElementSize = carousel.querySelector('.carouselItems').clientWidth;
            
            carousel.scrollLeft += buttonName==="rightBtn"? carouselElementSize : - carouselElementSize;
        });
        
    });
    // buttons



  //showMy products
  //showMy products
  let showMyProducts = document.querySelectorAll('.showMyProducts');

  function defaultProducts(){
    showMyProducts.forEach((item)=>{
        let productType= item.dataset.productType;
        let tempArray = productLog.filter(filterItem => filterItem.description.includes(productType));
        let tempHtml = displayProductsFunction(tempArray);
        item.innerHTML = tempHtml;
     });

  };
  defaultProducts();

    //tags products
    //tags products
    
    document.querySelectorAll('.carouselItems').forEach((carouselItem)=>{
        carouselItem.addEventListener("click",()=>{
         showMyProducts.forEach((item)=>{

                item.dataset.productType = carouselItem.dataset.tagName;

            });

             //showMy products
             //showMy products
            showMyProducts.forEach((item)=>{
                   let productType= item.dataset.productType;
                   let tempArray = productLog.filter(filterItem => filterItem.description.toLowerCase().includes(productType));
                   let tempHtml = displayProductsFunction(tempArray);
                   item.innerHTML = tempHtml;
                });
              
        });// click event ends here
    })
   
    
    function displayProductsFunction(tempArray){
       let tempHtml='';
       if(tempArray){
           tempArray.forEach((item)=>{
               tempHtml += `<div class="productClass shadow-md lg:shadow-none grid grid-cols-1 grid-rows-[50%_50%] place-items-cente bg-${item.color} border-2 lg:border-none relative min-h-full bg-[url()] bg-cover overflow-hidden rounded-xl">
               <img class="row-start-1 row-end-1 h-[70%] md:min-h-full w-50 object-center m-auto" src="${item.image}" alt="img" loading="lazy">
               <div class="productDetailsDiv row-start-2 row-end-2 flex flex-col justify-between">
               
               <div class="extraDetailsDiv px-4 flex flex-col gap-4 items-center overflow-x-scroll md:overflow-x-hidden">
               <span class=" font-PopinsStyle font-bold text-wrap  md:text-2xl">${item.name}</span> 
               <span  class=" text-gray-500 block font-PopinsStyle font-bold text-wrap text-[0.5rem] md:text-[0.6rem] lg:text-[0.8rem] ">${item.description}</span> 
               
               </div>
               <button data-product-id="${item.id}" priceAttribute="${item.price}" class="orderButton border-t-2 lg:border-b-2 border-b-0 w-full text-black lg:hover:bg-black lg:hover:text-white active:bg-gray-600 px-4 py-1 mb-1 mt-auto cursor-pointer md:px-10">Order -
                <span class="priceSpanInOrderButton block md:inline-block "> ₹ ${(item.price).toLocaleString()}</span></button>
               </div>
               </div>`
               
               
            });
        }
        return tempHtml;
    }



// carousle items
// carousle items

let carousleWrapper = document.querySelectorAll('.carousleWrapper');

carousleWrapper.forEach((carousleItem)=>{
    let productType= carousleItem.dataset.productType;
    // let carousleType= carousleItem.dataset.carousleType;
    let tempArray = productLog.filter(filterItem => filterItem.description.toLowerCase().includes(productType));

  let tempHtml = displayCarousleProducts(tempArray);
  carousleItem.innerHTML = tempHtml;
 });

 function displayCarousleProducts(tempArray){
    let tempHtml= ""; 
    tempArray.forEach((item)=>{
      tempHtml +=`<div class="carousleItem searchedItems relative min-w-[100%] h-[100%] snap-center overflow-hidden z-[900]">
                      <div class=" top-0 left-0 object-center object-cover">
                          <img class="w-[100%]" src="${item.image}" alt="img">
                      </div>
                      <div class="pictureData absolute bottom-2 w-[90%] left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-${item.color} rounded-3xl px-4 py-2 text-black">
                          <h3 class="text-base font-semibold">${item.name}</h3>
                          <p class="text-[0.7rem] text-gray-300">Explore our full range of premium Apple products.</p>
                      </div>


                      <div class="buyButtonOnCarousle absolute hidden bg-black/30 inset-0 z-[999]"><button data-product-id="${item.id}" priceAttribute="${item.price}" class="buyButtonOnCarousle_BUTTON py-2 px-8 m-auto rounded-lg hover:bg-gray-300 bg-gray-100 text-black">BUY</button></div>
                      </div>
                      
                      `;


                });
                return tempHtml;
 };


//  nextButton carousles
document.querySelectorAll('.carousles').forEach((item)=>{

    item.addEventListener("click",(event)=>{
    let targetButton = event.target.closest('.nextButton');
    let previousButton = event.target.closest('.previousButton');
     if(targetButton){
        let itemWidth = item.clientWidth;

       let carousleItem = item.querySelector('.carousleWrapper');
       carousleItem.scrollLeft += itemWidth;
        
     }
     if(previousButton){
        let itemWidth = item.clientWidth;

       let carousleItem = item.querySelector('.carousleWrapper');
       carousleItem.scrollLeft += -itemWidth;
        
     }
});

});

// buyButtonOnCarousle
// buyButtonOnCarousle



const carousleSection = document.querySelector('.carousleSection');
if (carousleSection) {
  // Mouseover event
  carousleSection.addEventListener("mouseover", (event) => {
    const targetItem = event.target.closest('.carousleItem');
    if (targetItem) {
      const buyButtonOnCarousle = targetItem.querySelector('.buyButtonOnCarousle');
      if (buyButtonOnCarousle) {
        buyButtonOnCarousle.classList.remove("hidden");
        buyButtonOnCarousle.classList.add("flex");
      }
    }
  });

  // Mouseout event
  carousleSection.addEventListener("mouseout", (event) => {
    const targetItem = event.target.closest('.carousleItem');
    if (targetItem) {
      const buyButtonOnCarousle = targetItem.querySelector('.buyButtonOnCarousle');
      if (buyButtonOnCarousle) {
        buyButtonOnCarousle.classList.remove("flex");
        buyButtonOnCarousle.classList.add("hidden");
      }
    }
  });

  // .buyButtonOnCarousle functionality;
  // .buyButtonOnCarousle functionality;

  
}


   


