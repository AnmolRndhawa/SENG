const placeOrderButton = document.querySelector('.placeOrderButton');
const savingOrderBG = document.getElementById('savingOrderBG');
const OKButton = document.getElementById('OKButton');



let productData = [''];
let cartData = null;
let checkOutData =null;
function dataToReadyStage(){
    productData= JSON.parse(localStorage.getItem('cartProductsRecord'));
    cartData = JSON.parse(localStorage.getItem('finalOrder'));
    checkOutData = JSON.parse(localStorage.getItem('checkoutDataMemory'));

    
};


dataToReadyStage();

// generate pdf by promise
// generate pdf by promise
function generatePdfFunction(){
    return new Promise((resolve, reject)=>{
        try{
            generatePDF();
            resolve();
        } catch(error) {
            reject(error)
        }
    });
}


// events 
placeOrderButton.addEventListener("click",async ()=>{
    dataToReadyStage();
    console.log(`fullAdress after click : ${checkOutData.formDetails.userAddress}`);
    
    savingOrderBG.innerHTML = `<span> Savinng Your Process, Please Wait! </span>`;
    
    try{
        await generatePdfFunction();
        savingOrderBG.innerHTML = `<span> Your PDF has been generated successfully! </span>
         <img class="w-7- h-7" src="images/icons/correct.webp" alt="">
            <div class="absolute text-white bg-black px-8 py-2 rounded-md bottom-[35%] hover:bg-gray-700"> 
            <button class="OKButton relative cursor-pointer">Ok</button></div>`;
        
    } catch (error){
        savingOrderBG.innerHTML = `<span> Failed! : ${error} </span>
         <button class="OKButton relative cursor-pointer">Go Back</button></div>`;
    }
});    

savingOrderBG.addEventListener("click",(event)=>{

   let targetEvent = event.target.closest('.OKButton');

   if(targetEvent){
       localStorage.removeItem('cartProductsRecord');
       localStorage.removeItem('finalOrder');
       localStorage.removeItem('checkoutDataMemory');
   
       setTimeout(() => {
           window.location.href = "../index.html";
       }, 2000);
   } else if(!targetEvent){
    console.log("targetItemNotAvi");
   }
});    
// getting data from local storages

// getting data from local storages



function generatePDF(){
    dataToReadyStage();

    var props = {
        outputType: jsPDFInvoiceTemplate.OutputType.Save,
        //Allows for additional configuration prior to writing among others, adds support for different languages and symbols
        returnJsPDFDocObject: true,
        fileName: "Invoice 2021",
        orientationLandscape: false,
        compress: true,
        logo: {
            src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/logo.png",
            type: 'PNG', //optional, when src= data:uri (nodejs case)
            width: 53.33, //aspect ratio = width/height
            height: 26.66,
            margin: {
                top: 0, //negative or positive num, from the current position
                left: 0 //negative or positive num, from the current position
            }
        },
        stamp: {
            inAllPages: true, //by default = false, just in the last page
            src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
            type: 'JPG', //optional, when src= data:uri (nodejs case)
            width: 20, //aspect ratio = width/height
            height: 20,
            margin: {
                top: 0, //negative or positive num, from the current position
                left: 0 //negative or positive num, from the current position
            }
        },
        business: {
            name: "SENG Electronic",
            email: "anmol6055@gmail.com",
            website: "www.SENG.com",
        },
        contact: {
            label: "Invoice issued for: Ordering Items from SENG Website",
            name: `${checkOutData.formDetails.userName}`,
            address: `${checkOutData.formDetails.userAddress }`,
            email: `${checkOutData.formDetails.userEmailAddress}`,
            otherInfo:`${checkOutData.formDetails.userCity}`,
            
        },
        invoice: {
            label: "Invoice of ",
            num: `rupees : ${cartData.finalPrice.toLocaleString()}`,
            invDate: "Payment Date: 01/01/2021 18:12",
            totalAmount: `${cartData.finalPrice}`,
            paymentMethod: `${checkOutData.paymentMethod}`,
            headerBorder: false,
            tableBodyBorder: false,
            header: [
              {
                title: "#", 
                style: { 
                  width: 10 
                } 
              }, 
              { 
                title: "Products",
                style: {
                  width: 30
                } 
              }, 
              { 
                title: "Address",
                style: {
                  width: 80
                } 
              }, 
              { title: "Price"},
              { title: "Quantity"},
              { title: "unit"}, 
              { title: "Total"}
            ],
            table: productData.map((product, index) => {
                const stripHTML = (html) => html.replace(/<[^>]*>?/gm, ""); // Function to remove HTML tags
            
                return [
                    index + 1, // Unique ID for each row
                    stripHTML(product.name || `Item ${index + 1}`), // Product name (without HTML tags)
                    stripHTML(checkOutData.formDetails.userAddress || `null`), // Product description (without HTML tags)
                    product.price || 0, // Product price or default value
                    product.quantity || 1, // Product quantity or default value
                    product.unit || "unit", // Unit or default value
                    (product.totalPrice || 0), // Total price (price * quantity) or default calculation
                ];
            }),
            
            additionalRows: [{
                col1: 'Total:',
                col2: '145,250.50',
                col3: 'ALL',
                style: {
                    fontSize: 14 //optional, default 12
                }
            },
            {
                col1: 'VAT:',
                col2: '20',
                col3: '%',
                style: {
                    fontSize: 10 //optional, default 12
                }
            },
            {
                col1: 'SubTotal:',
                col2: '116,199.90',
                col3: 'ALL',
                style: {
                    fontSize: 10 //optional, default 12
                }
            }],
            invDescLabel: "Important Note",
            invDesc: ` 1. Please review the details of this invoice carefully. For any discrepancies or issues with your order, contact us within [insert timeframe, e.g., 7 days] at [insert contact information].
2. Keep this invoice as proof of purchase for any warranty claims, returns, or exchanges.
3. For digital payments, ensure your transaction ID matches the one provided in your payment confirmation.`,
        },
        footer: {
            text: "The invoice is created on a computer and is valid without the signature and stamp.",
        },
        pageEnable: true,
        pageLabel: "Page ",
        };



    var pdfObject = jsPDFInvoiceTemplate.default(props); //returns number of pages created
    console.log("object created : ", pdfObject);
    
    

}



