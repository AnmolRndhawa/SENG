
let headerHtml = "";
headerHtml = `
         <nav class="headerNavClass p-4 z-[997] fixed w-full flex items-center justify-between backdrop-blur-sm bg-white/30 md:bg-white">

        
        <div class="menuForPhoneButton icon h-8 w-8 md:hidden">
            <img class="h-full w-full"
            src="images/icons/menu-alt-1-svgrepo-com.svg" alt="img">
        </div>
        
        <!-- navLinks for desktop  -->
        <!-- navLinks for desktop  -->
        <div class="hidden absolute inset-y-0 inset-x-12 m-auto md:flex justify-center items-center gap-x-12">
            <div><a class="font-PopinsStyle" data-name="Home" href="home.html"><span>Home</span></a></div>
            <div class="group"><a class="js-headerLinks font-PopinsStyle relative drop-shadow-md" data-name="Shop" href="#"><span>Shop</span></a>
    <!--// SubMenu 1-->
    <!--// SubMenus-->
    

    <div class="absolute subMenus hidden items-center justify-center gap-x-24 shadow-lg bg-white left-0 right-0 py-12">
        <ul class="flex flex-col gap-y-6">
            <span class="text-black mt-12 ">Item Spesific :</span>
            <a href="searchResults.html" class="sublinks text-4xl flex gap-x-4">Search<img class="w-[30px]" src="images/icons/search-svgrepo-com.svg" alt="icon"></a>
            <a href="#" data-search-term="watch" class="sublinks queryLinks  text-4xl">Smart Watches</a>
            <a href="#" data-search-term="buds" class="sublinks  queryLinks text-4xl">EarPhone / Buds</a>
            <a href="#" data-search-term="product" class="sublinks queryLinks text-4xl">All Items</a>
        </ul>
        <ul class="flex flex-col gap-y-6">
            <span class="text-black mt-12 ">Brands :</span>
            <a href="#" data-search-term="apple" class="sublinks queryLinks text-2xl">Apple</a>
            <a href="#" data-search-term="nothing" class="sublinks queryLinks text-2xl">Nothing</a>
            <a href="#" data-search-term="product" class="sublinks queryLinks text-2xl">All Brands</a>
        
        </ul>
        <ul class="flex flex-col gap-y-6">
            <span class="text-black mt-12 ">Tags :</span>
            <a href="#" data-search-term="popular" class="sublinks queryLinks text-2xl">Popular Items</a>
            <a href="#" data-search-term="new" class="sublinks queryLinks text-2xl">New Items</a>
            <a href="#" data-search-term="feature" class="sublinks queryLinks text-2xl">Featured Items</a>
        
        </ul>

        

    </div>
     
    <!--// SubMenu 1-->
            </div>
            <div class="group "><a class="js-headerLinks font-PopinsStyle" data-name="Menu" data-visibility="false" href="#"><span>Menu</span></a>
                <div class="absolute subMenus hidden items-center justify-center gap-x-24 shadow-lg bg-white left-0 right-0 py-12">
    
                    <ul class="flex flex-col gap-y-6">
                        <span class="text-black mt-12 "> Your Account :</span>
                        <a href="orderSummary.html" class="sublinks text-4xl">My Cart</a>
                        <a href="" class="sublinks text-4xl">My Orders</a>
                        
                    
                    </ul>
                    <ul class="flex flex-col gap-y-6">
                        <span class="text-black mt-12 "> About us :</span>
                        <a href="myProject.html" class="sublinks text-2xl">Project</a>
                        <a href="AboutUsPage.html" class="sublinks text-2xl">About US</a>
                        
                    
                    </ul>
                   
            
                </div>
                 
                <!--// SubMenus--></div>
        </div>
        <div class="logo font-InKutStyle font-semibold text-lg select-none ml-auto mr-4 md:shrink-0">SENG SHOP</div>
        <div data-action="open" class="cartButton icon mr-0 bg-gray-200 h-8 w-8 rounded-3xl cursor-pointer ">
            <img  src="images/icons/cart-large-minimalistic-svgrepo-com.svg" type="svg" alt="img">
        </div>


    </nav>
    <!-- // menu for phone  -->
    <!-- // menu for phone  -->
     
    <div id="menuForPhone" class="z-[999] absolute hidden bg-white inset-0 min-h-svh w-screen">
        <nav class="p-4 fixed w-full flex items-center justify-between">

        
            <div class="menuForPhoneButton icon h-8 w-8 md:hidden z-[99]">
                <img class="h-full w-full"
                src="images/icons/cross-svgrepo-com.svg" alt="img">
            </div>
            
            <div class="logo font-InKutStyle font-semibold text-lg select-none ml-auto mr-4 md:shrink-0">SENG SHOP</div>
            <div data-action="open" class="cartButton icon mr-0 bg-gray-200  h-8 w-8 rounded-3xl">
                <img  src="images/icons/cart-large-minimalistic-svgrepo-com.svg" type="svg" alt="">
            </div>
    

        </nav>

        <div class="absolute grid grid-rows-[1fr_1fr_1fr] text-lg inset-y-12 inset-x-0 py-28 px-8 m-auto justify-start items-center gap-12 md:hidden">
            <a href="home.html" class="js-headerLinks border-b-2 border-b-gray-300" data-visibility="false"><span class="wordSpace">Home</span></a>
            <div class=" js-headerLinks flex flex-col border-b-2 border-b-gray-300" data-visibility="false"><span class="wordSpace">Shop</span>
            <ul class="flex flex-col pt-4 pb-12">
                     <li> <a href="searchResults.html">search</a></li>
                     <li data-search-term="watch" class="queryLinks">Smart Watches</li>
                     <li data-search-term="buds" class="queryLinks">Earphones/Buds</li>
                     <li data-search-term="product" class="queryLinks">All</li>
            </ul>
            </div>
            <div class="js-headerLinks flex flex-col border-b-2 border-b-gray-300" data-visibility="false"><span class="wordSpace">Menu</span>
            <ul class="flex flex-col pt-4 pb-12">
                      <li><a href="orderSummary.html">My Cart</a></li>
                      <li><a href="myProject.html">About Project</a></li>
                      <li><a href="AboutUsPage.html">About Us</a></li>
            </ul>
            </div>
        </div>
    </div>
    <!-- // menu for phone  -->
    <!-- // menu for phone  -->

    `;

document.querySelector('header').innerHTML = headerHtml;


//blur function

// phone header
// phone header
// phone header
// phone header
    const menuForPhone = document.getElementById('menuForPhone');
    document.querySelectorAll('.menuForPhoneButton').forEach((btn) => {
        btn.addEventListener("click", () => {
            openMenu();
        });
    });

    function openMenu() {
        if (menuForPhone) menuForPhone.classList.toggle('hidden');
        const main = document.querySelector('main');
        if (main){

            let scrollValue = scrollToTop();

            

                if(main.classList.contains('hidden')){
                    main.classList.remove('hidden');
                }else if(scrollValue===1){
                    setTimeout(()=>{
                        main.classList.add('hidden');
                    },500);
                }
           
        } ;
    };

    // scroll to top function 
    // scroll to top function 
    function scrollToTop(){

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth" // Smooth scroll effect
        });
        return 1;
    };

    const cartPannel = document.querySelector('.cartPannel');
    if (cartPannel) {
        cartPannel.addEventListener("click", (event) => {
            if (event.target.closest(".proceedButton")) {
                console.log("cartButton");
                 // Call the function
    redirectToOrderSummary();
                
            }
        });
    };

    function redirectToOrderSummary() {
        const primaryURL = "orderSummary.html";
     window.location.href = primaryURL;
    }
    
   

    // desktop Header 
    // desktop Header 
    // desktop Header 
    
    // to open the submenu 
    // to open the submenu 
    const headerNavClass = document.querySelector('.headerNavClass');
    if(headerNavClass){
        
        // mouseOver
        // mouseOver
        headerNavClass.addEventListener("mouseover",(event)=>{
            
            let targetButton = event.target.closest(".js-headerLinks");
            let subMenus = targetButton.parentElement.querySelector('.subMenus');
            
            if(targetButton && subMenus){
                toggleClasses(subMenus, "add");
               let spanItem = targetButton.querySelector('span');
               targetButton.classList.add("hoverMe");
               if(spanItem){
                   
                   toggleBlur("add");
                }
            }
            
        });
        
        headerNavClass.addEventListener("mouseout",(event)=>{
            
            // mouseOUt
            // mouseOUt
            let targetButton = event.target.closest(".js-headerLinks");
            let subMenus = targetButton.parentElement.querySelector('.subMenus');
            
            if(targetButton && subMenus){
                toggleClasses(subMenus, "hide");
                targetButton.classList.remove("hoverMe");
                let spanItem = targetButton.querySelector('span');
               if(spanItem){
                   toggleBlur("hide");
               };
        
            }
            
            
        });
        
        
        // preventing from hide the submenu 
        // preventing from hide the submenu 
        headerNavClass.addEventListener("mouseover",(event)=>{
            
            let subMenus = event.target.closest(".subMenus");
           let navItem = subMenus.parentElement;
            if(subMenus && navItem){
            toggleClasses(subMenus, "add");
            toggleBlur("add");
            navItem.classList.add("hoverMe");
            // navItem.classList.add("hoverMyNav");
            
        }
        
    });

    headerNavClass.addEventListener("mouseout",(event)=>{
            
        let subMenus = event.target.closest(".subMenus");
        let navItem = subMenus.parentElement;
        if(subMenus && navItem){
            toggleClasses(subMenus, "hide");
            toggleBlur("hide");
            navItem.classList.remove("hoverMe");
            // navItem.classList.remove("hoverMyNav");
        }
        
   
        });
        
    };
    
    
    // toggelClass function
    // toggelClass function
   function toggleClasses(targetItem, action){
    if(action === "add"){
        targetItem.classList.remove("hidden");
        targetItem.classList.add("flex");

    } else if(action ==="hide"){
        targetItem.classList.remove("flex");
            targetItem.classList.add("hidden");

    }
   };
    

    // toggelClass function
    // toggelClass function
   function toggleBlur(action){
   const mainSection = document.querySelector('main');

    if(action === "add"){
        mainSection.classList.add("blur-lg");
        
    } else if(action ==="hide"){
        mainSection.classList.remove("blur-lg");
            

    }
   };


///queryLinks//////
///queryLinks//////

let headerTag = document.querySelector('header');

headerTag.addEventListener("click",(event)=>{
 let targetLink = event.target.closest('.queryLinks');
 if(targetLink){
    let searchTerm = targetLink.dataset.searchTerm;
    window.location.href = `searchResults.html?query=${encodeURIComponent(searchTerm)}`;
 }
});



   

