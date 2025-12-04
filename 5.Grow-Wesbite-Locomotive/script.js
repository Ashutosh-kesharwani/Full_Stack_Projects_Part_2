/*Animation :
Yellow-1 layer upar slide karke gayab ho gayi.
Matlab yellow-2 neeche se upar aata hai screen par.i.e hamare screen par yellow-2 aaya neeche se upar kyuki from lga hai,
Yellow-2 neeche se aata hai aur text ka color simultaneously black ho jaata hai.,
last me hmara loader-div jisme animation chal rha tha vo last me gyab ho jaye pura i.e display:none , so section-1 dhikhne lage

*/
// var y=document.querySelector('#yellow-1')
// console.log(y);
function websiteLoad(){
var tl=gsap.timeline();

tl.to("#yellow-1", {
  y: "-100%",
  delay: 0.5,
  duration: 0.7,
  ease: "expo.out"
},"anim1");
tl.to("#loader h1", {
  color:"white",
  delay:0.4
},"anim1");
tl.from("#yellow-2", {
  y: "100%",
  delay: 0.5,
  duration: 0.7,
  ease: "expo.out",
  zIndex:6
},"anim2");
tl.to("#loader h1", {
  color:"black",
  delay:0.4,
  display:"none"
},"anim2");
tl.to("#loader",{
   display:"none",
})
tl.from("#section-1 nav h2",{
   y:-50,
   opacity:0,
   duration:0.5,
   ease:"expo.out"
})
tl.from("#section-1 nav #actions a",{
   y:-50,
   opacity:0,
   ease:"expo.out",
   stagger:0.15
})
tl.from("#section-1 h1",{
   y:-100,
   opacity:0,
   ease:"expo.out"
})



}
websiteLoad();

//About scrollVar.scrollTo() : Locomotive Scroll ke scrollTo() method me argument element, selector, ya position hota hai —number dene par wo pixel value maan leta hai.Isliye wo bas page ke upar hi rehta hai.

function loco(){
  const scrollVar = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true,
    multiplier: 0.6
});

//scroll Down btn
var scrollDownBtn= document.querySelector("#section-1 i");
scrollDownBtn.addEventListener("click",()=>{

  scrollVar.scrollTo(".footer"); 
}) 

//Scroll Up btn
var scrollUpBtn= document.querySelector(".footer i");
scrollUpBtn.addEventListener("click",()=>{

  //scrollTo() is an instance method jsko call kane ke liye jo upar scrollVar banaya hai LocomotiveScroll() call karke uske through acess only
  scrollVar.scrollTo(0); 
})

}

loco();

function section2Animation(){
  var elems= document.querySelectorAll(".elem");
var section2= document.querySelector('#section-2')
// console.log(section2);

// console.log(elems);
elems.forEach(function(elem){
  elem.addEventListener('mouseenter',function(){

    // ye hamara custom attr hai data-img ka isko le liya jisse jab mouse hover ho har elem pe to ye image dhikhe 
    var bgImg=elem.getAttribute("data-img");
    // console.log(bgImg);
    section2.style.backgroundImage=`url(${bgImg})`;
   
  })
})

}

section2Animation();