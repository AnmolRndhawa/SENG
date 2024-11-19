// managing tailwind classes for reuse purposes
// managing tailwind classes for reuse purposes

// js header links::AFTER classes
   
document.querySelectorAll('.js-headerLinks span').forEach((headerLinksItem)=>{
    headerLinksItem.classList.add("after:content-['<']", "after:inline-block", "after:text-gray-500" , "after:ml-4", "after:rotate-[270deg]", "after:opacity-0","hover:after:opacity-100","a");
})
// subMenu Classes 
document.querySelectorAll('.subMenus').forEach((subMenuItem)=>{
    subMenuItem.classList.add("absolute", "hidden", "inset-x-0" , "z-[998]", "w-screen", "max-h-fit" , "py-8", "px-60", "bg-white","border-b-2", "md:group-hover:flex", "flex-row", "md:gap-52");// flex class adds when curson hovers on headerLinks
})

// subMenu Links Basic classes
document.querySelectorAll('.sublinks').forEach((subLinksItem)=>{
    subLinksItem.classList.add("font-PopinsStyle", "font-medium", "text-black" , "hover:underline");
})

   