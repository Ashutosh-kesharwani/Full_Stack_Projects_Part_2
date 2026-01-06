/* Goal: Here is cart functionality we are going to build with js 
where we perform various task:
Task:
a).show real products data by js.
b). show real popular data with js . 
c).on click of product add , add to cart functinality.


To add specific value to any html element we use data-index, data-img aur koi bhi name data- ke baad so we give thi in our button to get ki kis product ke button pe click by their index name.
*/

//All Var declaration

var products=[
    
    
    {
    productName:"Wooden Chair",
    productsDesc:"An Aesthetic classic chair",
    price:"$500",
    productImage:"https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
    {
    productName:"Toys Car",
    productsDesc:"A ferari toy car",
    price:"$100",
    productImage:"https://images.unsplash.com/photo-1603215642805-61e87a5f10bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FycyUyMHRveXN8ZW58MHx8MHx8fDA%3D",
},
    {
    productName:"Leather Ball",
    productsDesc:"Classic Leather Ball",
    price:"$200",
    productImage:"https://images.unsplash.com/photo-1597746887180-188e5cd0c94f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmF0JTIwYmFsbCUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
},
    {
    productName:"Basketball Gloves",
    productsDesc:"Basketball Gloves Leather",
    price:"$400",
    productImage:"https://images.unsplash.com/photo-1535812505-e24cfd229c40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhdCUyMGJhbGwlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
},
    {
    productName:"Wooden Chair",
    productsDesc:"An Aesthetic classic chair",
    price:"$500",
    productImage:"https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
];
var popular=[
    {

    popularHeading:"Red Wooden Chair",
    popularDesc:"An Aesthetic Red Chair",    
    popularPrice:"$ 500",
    popularImg:"https://images.unsplash.com/photo-1762788256464-58c5ce026245?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {

    popularHeading:"Blue Wooden Couch",
    popularDesc:"An Aesthetic Blue Couch",    
    popularPrice:"$ 1500",
    popularImg:"https://plus.unsplash.com/premium_photo-1723874468810-3147a74bb3a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ymx1ZSUyMGNoYWlyfGVufDB8fDB8fHww",
    },
    {

    popularHeading:"Red Wooden Chair",
    popularDesc:"An Aesthetic Red Chair",    
    popularPrice:"$ 500",
    popularImg:"https://images.unsplash.com/photo-1762788256464-58c5ce026245?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

var cart=[];


// Task 1. Real Products Data.


function addProduct(){
var clutter="";
products.forEach(function(productObj,index){
    clutter+=`
    <div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                <img src="${productObj.productImage}" class="w-full h-full object-cover object-center" alt="${productObj.productName}" />
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${productObj.productName}</h1>

                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${productObj.productsDesc}.</h3>
                            <h4 class="font-semibold mt-2"> ${productObj.price}</h4>
                        </div>
                        <button data-index="${index}"  class="add w-10 h-10 rounded-full shader text-yellow-400"><i
                               data-index="${index}"   class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>
    `;
    
    

})
var productsContainer= document.querySelector(".products");
    productsContainer.innerHTML=clutter;
    // console.log(productsContainer);
}



// Task2. Real Popular Task.



function addPopularProducts(){
  var clutter="";
  popular.forEach((popularObj)=>{
    clutter+=`<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${popularObj.popularImg}"
                            alt="${popularObj.popularHeading}">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">
                        ${popularObj.popularHeading}
                        </h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">
                        ${popularObj.popularDesc}
                        </h4>
                        <h4 class="mt-3 font-semibold text-zinc-500"> ${popularObj.popularPrice}</h4>
                    </div>
                </div>`;

   
                
            })
            document.querySelector('.populars').innerHTML=clutter;
}



//Task 3. Add to Cart Functionality

function addToCart(){


/* 
Note: 
Here yaha pe ham har ek product pe traverse karke eventlistener langane se acha ki ham unke parent{products class pe } pe lgade i.e "Event-Bubling-techniquhe: here unn sabke ele  pe individual  lagame ki wjaye ham eventListener unke parent div pe lagate hai . works as ham clutter ke through har ek ele pe vo product diye hai isliye work
But abhi uss products div pe khi bhi click karne pe vo add ho jaa rha hai 
soo isse bachne ke liye we give individual class name to add button .
"
 var items= document.querySelectorAll(".product")
//  console.log(items);
items.forEach()
*/

document.querySelector('.products').addEventListener("click",function(details ){
   /* so to work only on clicking button we use target func of click (pointerEvents )   | details.target.dataset.index isse uss ele jisse click i.e target uski index value mil jaygi 
   so here target.dataset se hame uss target ki sbhi value mil jati hai 
   and ussi ke index val ko acess ke liye use 
   .target.dataset.index

   */
   
// console.log(details.target.dataset.index);
   // so we give button and i both add class  to isme se koi bhi click to work otherwise nhi karega.
   if(details.target.classList.contains('add')){
    // data-index="index" button & i tag  pe dene se we identify ki kaunse product pe click kiya hai to sirrf usko add karo.


    cart.push(products[details.target.dataset.index]);
    // console.log(cart);
    
   }
})
 
}


//Task 4. Show Selected Items in Cart

function showCart(){
  document.querySelector(".carticon")
  .addEventListener("click",function(){
     document.querySelector(".cart-expand").style.display="block";

     var clutter="";
     cart.forEach(function(prod,index){
      clutter+= `
      <div class="flex gap-2 bg-white p-2 rounded-lg">
    <div class="w-10 h-10 shrink-0 rounded-lg overflow-hidden">
        <img  class="w-full h-full object-cover " src="${prod.productImage}" alt="${prod.productName}" />
    </div>
    <div>
        <h3 class="font-semibold">${prod.productName}</h3>
        <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
    </div>
</div>
      `;
     })
    //  console.log(clutter);
     
     document.querySelector(".cart-expand").innerHTML=clutter;
  });
}

addPopularProducts();
addProduct();
addToCart();
showCart();