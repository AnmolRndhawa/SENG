import { productLog } from "./productsLog.js";
// import { cartProducts as importedCartProducts } from "./02-cartScript.js";


// fiters
// fiters
const filterList = document.querySelector('.filterList');

let filterValuesArray = [];

let filterValues = "";

function updateFilter(){
    filterValues = [...filterValuesArray].join(",");
    console.log(filterValues);
};
updateFilter();

if(filterList){
    filterList.addEventListener("click",(event)=>{
        let targetElement = event.target.closest("input");
        //   let filterEarphone = event.target.closest("#filterEarphone");
        if(targetElement){
            if(targetElement.checked){
                filterValuesArray.push(targetElement.value);
            } else {
                filterValuesArray = filterValuesArray.filter(
                    (value) => value !== targetElement.value
                );
            }
            updateFilter();
        };
        
    });
    
}
// getting search from search feild 
// getting search from search feild 
let searchInputs = document.querySelectorAll('.searchbarWrapper input');

searchInputs.forEach((searchInputItem) => {
    searchInputItem.addEventListener("keydown", (event) => {
        if (event.key === "Enter") { // Correct key name is "Enter"
            event.preventDefault();
            // const searchedValue = searchInputItem.value.trim() + " " + filterValues;
            const searchedValue = searchInputItem.value.trim();
               if(searchedValue){
                    window.location.href = `searchResults.html?query=${encodeURIComponent(searchedValue)}`;
               
               };

            // searchedItem(searchInputItem.value);
            // console.log("workingEvent");

        }
    });
    
// let searchInputs = document.querySelectorAll('.searchbarWrapper input');

// searchInputs.forEach((searchInputItem) => {
//     searchInputItem.addEventListener("keydown", (event) => {
//         if (event.key === "Enter") { // Correct key name is "Enter"
//             event.preventDefault();
//             // const searchedValue = searchInputItem.value.trim() + " " + filterValues;
//             const searchedValue = searchInputItem.value.trim();
//             let currentUrl = window.location.href; 
//                if(searchedValue){
//                 if(currentUrl.includes("index.html")){
//                     window.location.href = `src/searchResults.html?query=${encodeURIComponent(searchedValue)}`;
//                 }else{
//                     window.location.href = `searchResults.html?query=${encodeURIComponent(searchedValue)}`;

//                 }
//                };

//             // searchedItem(searchInputItem.value);
//             // console.log("workingEvent");

//         }
//     });
    
});



//displaying all result 
//displaying all result 
//displaying all result 
function getValueFromUrl(parameter){
    if(parameter){
        const searchedValue = new URLSearchParams(window.location.search);
            return searchedValue.get(parameter);
    }

};




const searchedValue = getValueFromUrl("query");

const showSearchResult = document.querySelector('.showSearchResult');
const applyDelegation = document.querySelector('.applyDelegation');

if(searchedValue){
  
    document.querySelector(".displaySearchTerm").innerText = searchedValue;

    searchedItem(searchedValue);
    
    function searchedItem(searchValue){
        let tempArray = productLog.filter((filterItem)=> filterItem.description?.trim().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) || [];
        let tempHtml = DisplaySearchedItem(tempArray);
        showSearchResult.innerHTML = tempHtml;
        
    };
}

function DisplaySearchedItem(tempArray){
    let tempHtml= "";
   if(tempArray){

    tempArray.forEach((item)=>{
        tempHtml += `  
          <div data-product-id="${item.id}" class="searchedItems p-4 flex gap-x-4 items-center rounded-md bg-gray-100 cursor-pointer">
            <div class="relative h-[75px] w-[75px] rounded-xl overflow-hidden">
                <img src="${item.image}" class="h-[100%] w-[100%]" alt="">
            </div>
            
            <div>
            <h2 class="text-lg font-semibold text-gray-800">${item.name}</h2>
            <p class="text-gray-900 font-bold mt-4"> ₹ ${item.price}</p>
            </div>
          </div>`; 
    });
    
} else{
    tempHtml = `<p class="text-center text-gray-600">No results found</p>`;
}
return tempHtml;

};


// open detail
// open detail

// dCardImage

if(applyDelegation){

    applyDelegation.addEventListener("click",(event)=>{
        let targetItem1 = event.target.closest(".searchedItems");
        if(targetItem1){
          let productId =  targetItem1.dataset.productId;
          showDetailsOf(productId);
        }
    });
}


let detailSection = document.querySelector('.detailSection');
let searchCover = document.querySelector(".searchCover");
function showDetailsOf(productId){
    let tempProduct ={};
    let tempHtml = "";
    tempProduct = productLog.find((findItem)=>findItem.id===productId);

    tempHtml = `
    <!-- Close Button -->
    <div class="flex justify-end">
      <button class="closeCardButton text-black font-bold hover:text-gray-700">✖</button>
    </div>

    <!-- Product Picture -->
    <div class="dCardImage flex justify-center mt-4">
      <img src="${tempProduct.image}" alt="img" class="w-24 h-24 rounded-lg">
    </div>

    
    <!-- Product Title -->
    <div class="text-center mt-4 font-semibold text-lg">
    <h2>${tempProduct.name}</h2>
    </div>
    
    <!-- Product Description -->
    <div class="text-center mt-2 text-sm text-gray-700">
    <span class="w-full">${(tempProduct.description.slice(0,400))}</span>
    <span> ₹ ${tempProduct.price}</span>
    </div>
    
    <!-- Buy Button -->
    <div class="flex justify-center mt-6">
    <button data-product-id = "${tempProduct.id}" priceAttribute="${tempProduct.price}" class="buyFromDetails bg-black text-white rounded-full px-6 py-2 hover:bg-gray-800">
    Buy Now
    </button>
    </div>
    
    `;


    
        detailSection.innerHTML = tempHtml;
        detailSection.classList.remove("hidden");
        detailSection.classList.add("flex");
        if(showSearchResult){
            showSearchResult.classList.add("hidden");
            searchCover.classList.add("blur");
            // blur on searchCover
        
        }
    
};

//closeCardButton

       if(detailSection){

           detailSection.addEventListener("click",(event)=>{
               let closeCardButton = event.target.closest(".closeCardButton");
               if(closeCardButton){
                   
                   detailSection.classList.remove("flex");
                   detailSection.classList.add("hidden");
                   if(showSearchResult){
       
                       showSearchResult.classList.remove("hidden");
                       searchCover.classList.remove("blur");
                   };
               }
           });
       }


     