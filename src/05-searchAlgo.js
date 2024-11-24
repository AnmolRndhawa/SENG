import { productLog } from "./productsLog.js";


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
let searchInputs = document.querySelectorAll('.searchbarWrapper input');

searchInputs.forEach((searchInputItem) => {
    searchInputItem.addEventListener("keydown", (event) => {
        if (event.key === "Enter") { // Correct key name is "Enter"
            event.preventDefault();
            // const searchedValue = searchInputItem.value.trim() + " " + filterValues;
            const searchedValue = searchInputItem.value.trim();
            let currentUrl = window.location.href; 
               if(searchedValue){
                if(currentUrl.includes("index.html")){
                    window.location.href = `src/searchResults.html?query=${encodeURIComponent(searchedValue)}`;
                }else{
                    window.location.href = `searchResults.html?query=${encodeURIComponent(searchedValue)}`;

                }
               };

            // searchedItem(searchInputItem.value);
            // console.log("workingEvent");

        }
    });
    
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
          <div data-product-id="${item.id}" class="p-4 flex gap-x-4 items-center rounded-md bg-gray-100">
            <div class="relative h-[75px] w-[75px] rounded-xl overflow-hidden">
                <img src="${item.image.replace("src/","")}" class="h-[100%] w-[100%]" alt="productImgs">
            </div>
            
            <div>
            <h2 class="text-lg font-semibold text-gray-800">${item.name}</h2>
            <p class="text-gray-900 font-bold mt-4">${item.price}</p>
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