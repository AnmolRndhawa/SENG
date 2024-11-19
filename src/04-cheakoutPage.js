const saveData = saveDataInLocal() || null;
let checkoutData = JSON.parse(localStorage.getItem('checkoutDataMemory')) || {

    formDetails :{
       userName: null,
       userEmailAddress: null,
       userState: null,
       userCity: null,
       userAreaCode: null,
       userAddress: null,
      },
      
      paymentOption : null,
  };


const mainContent = document.querySelector('.mainContent');
const paymentStep = document.getElementById('payment-step');
const addressStep = document.getElementById('address-step');
const reviewstep = document.getElementById('review-step');

if(mainContent){

    mainContent.onscroll = function(){ progressBar();};
    
    function progressBar() {
        
        let totalScrollableHeight = mainContent.scrollHeight - mainContent.clientHeight;
        let scrollHeight = (mainContent.scrollTop / Number(totalScrollableHeight)) * 100;

        if(mainContent.scrollTop < totalScrollableHeight/2){
            addressStep.classList.remove("text-gray-400");
            paymentStep.classList.add("text-gray-400");
            reviewstep.classList.add("text-gray-400");
            
        }

        if(mainContent.scrollTop >= totalScrollableHeight/2){
            addressStep.classList.add("text-gray-400");
            paymentStep.classList.remove("text-gray-400");
            reviewstep.classList.add("text-gray-400");
            
        }
        if(scrollHeight >=90){
            addressStep.classList.add("text-gray-400");
            paymentStep.classList.add("text-gray-400");
            reviewstep.classList.remove("text-gray-400");
            
        }

        // console.log(mainContent.scrollTop + "scrolled pixels");
        // console.log(parseInt(scrollHeight) + "% scrolled");
          
       document.querySelector('.progressBar').style.height = `${parseInt(scrollHeight)}%`;

        
        
    };
} else {
    console.log("not available")
}


// form settingz 
// form settingz 

const checkConditions = PlaceOrderButtonFunction();

let customerLog=[];
customerLog.length =1;

const form = document.querySelector("form"),
statusText= form.querySelector(".buttonSectionInForm span");
const adressesSec= document.getElementById('adressesSec');



form.onsubmit=(e) =>{
    e.preventDefault(); // preventin from submitting the form 
    gettingFormData();
    adressesSec.classList.remove("hidden");
    form.classList.add("hidden");
    checkConditions("condition1");
   
}

function gettingFormData(){
    const nameValue = document.getElementById('fullName').value;
    const emailValue = document.getElementById('email').value;
    const stateValue = document.getElementById('state').value;
    const cityValue = document.getElementById('city').value;
    const areaCodeValue = document.getElementById('areaCode').value;
    const fullAddressValue = document.getElementById('address').value;
    
    customerLog.push(
        { name: nameValue,
            emailAdress: emailValue,
            state: stateValue,
            city : cityValue,
            areaCode : areaCodeValue,
            fullAddress : fullAddressValue
            
        });

        addAddresses();
    }; //getting function ends
    

    
    document.querySelector('.addAdressButton').addEventListener("click",()=>{
        form.classList.toggle("hidden");
        adressesSec.classList.add("hidden");
        
        
    });
    
    const addressesItem = document.querySelector('.addressesItem');
    

function addAddresses(){
    let tempHtml ='';
    customerLog.forEach(item => {

        tempHtml = ` <div>
                        <span class="md:text-xl">${item.name}</span>
                        <span class="block text-[0.6rem] md:text-[0.8rem] w-[65%] overflow-hidden ">${item.fullAddress}</span>
                    </div>
                   <img src="images/icons/correct.webp" class="px-2 h-[25px] w-[40px] inline-block drop-shadow-md" alt="DONE">
                </div>
`;

saveData("userName",item.name);
saveData("userEmailAddress",item.emailAdress);
saveData("userState",item.state);
saveData("userCity",item.city);
saveData("userAreaCode",item.areaCode);
saveData("userAddress",item.fullAddress);
    });
    addressesItem.innerHTML = tempHtml;
}
addAddresses();


// payment method settings
// payment method settings
// payment method settings

document.getElementById('paymentSec').addEventListener("click", (event) => {
        // Check if the clicked element is a radio button

        let targetItem = event.target.closest('.paymentOptions');
        if(targetItem){
            
            document.querySelector('.showPaymentMethod').innerText = targetItem.value;
            saveData("paymentOption",targetItem.value);
            document.getElementById('reviewSucceedImg').classList.remove("hidden");
            document.getElementById('reviewSucceedImg').classList.add("inline-block");
            checkConditions("condition2");
        }
        
      });

// review order settings 
// review order settings 
// review order settings 

let gettingFinalValuesFromLocal = JSON.parse(localStorage.getItem('finalOrder')) || null;
const checkYourOrder = document.querySelector('.CheckYourOrder');
function updateOrderInCheckout(){
    let tempHtml ="";

    // getting cartProducts from localstorage


    console.log(typeof(gettingFinalValuesFromLocal.finalPrice));
// displaying or updating order details on the checkoutPage
// displaying or updating order details on the checkoutPage
tempHtml = `<div class="w-full flex justify-between"> <div class="flex flex-col">
<span class="text-[0.7rem]">Amount : </span>
                        <span class="md:text-xl">₹ ${gettingFinalValuesFromLocal.finalPrice}</span>
                        <span class="block text-[0.6rem] md:text-[0.8rem] w-[65%] overflow-hidden "> for <span>${gettingFinalValuesFromLocal.finalProducts}</span> Products</span>
                    </div>
                    
                    <div class="flex flex-col">
                    <span class="text-[0.7rem] ">Payment Method : </span>
                    <span class="text-[0.7rem] md:text-base ">Via :<span class="showPaymentMethod"></span></span>
                    </div>

                   <img src="images/icons/correct.webp" id="reviewSucceedImg" class="hidden px-2 h-[25px] w-[40px] drop-shadow-md" alt="DONE">
                </div>
`;

if (checkYourOrder) {
    checkYourOrder.innerHTML = tempHtml;
} else {
    console.error("Element with id 'CheckYourOrder' not found in the DOM.");
}

};
updateOrderInCheckout();


// PlaceOrderButton button visibility
// PlaceOrderButton button visibility

const placeOrderButton = document.querySelector('.placeOrderButton');
placeOrderButton.style.display = "none"; // Show the button

function PlaceOrderButtonFunction() {
    let condition1 = null;
    let condition2 = null;


    return function (condition){

        if (!condition1) {
            condition1 = condition;
            console.log(`${condition1} passed successfully`);
        }
        else if (!condition2) {
            condition2 = condition;
            console.log(`${condition2} passed successfully`);
        }
        
        if(condition1 && condition2){
            
            placeOrderButton.style.display = "block"; // Show the button
        };
        
    }
};



// when click on the place order button
// when click on the place order button

placeOrderButton.addEventListener("click",()=>{

    document.getElementById('savingOrderBG').classList.remove("hidden");
    document.getElementById('savingOrderBG').classList.add("flex");
    

})


// SAVING DATA OF CHECKOUT PAGE IN LOCAL STORAGE

function saveDataInLocal(){
 // form data
 return function(key, value){
    
        if(key in checkoutData.formDetails){
            checkoutData.formDetails[key]= value;
        } else if(key === "paymentOption"){
            checkoutData.paymentOption = value;
        } else {
            console.error("Fail! no such key in saveDataInLocal");
        }
    
        localStorage.setItem("checkoutDataMemory", JSON.stringify(checkoutData));

 };

};











    // statusText.style.display = "none";

    // let xhr = new XMLHttpRequest();
    // xhr.open("POST", "message.php", true);
    // xhr.onload=()=>{
    //     if(xhr.readyState == 4 && xhr.status == 200) {
    //         // ready state = 4 : rquest finished and response is ready
    //          // status  = 200 : "OK", 403 = Forbidden , 404 = page not found 
    //          let response = xhr.response;
    //          console.log(response);

    //          statusText.innerText = response;

    //     }
    // };
    // let formData = new FormData(form);
    // xhr.send(formData); // send data