
function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco()

//loading animation
function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#section-1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#section-1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#section-1 h1, #section-1 p, #section-1 h2,section1-footer", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}
loadingAnimation();

function navAnimation() {
  const downArrow = document.querySelector('.down-arrow');
  const navBottom = document.querySelector('#nav-bottom');
  let isOpen = false; // toggle state

  downArrow.addEventListener('click', function () {
    isOpen = !isOpen;

    if (isOpen) {
      // ✅ OPEN NAV ANIMATION
      let tl = gsap.timeline();

      tl.to(downArrow, {
        y: 30, // move down slightly
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut"
      })
      .to("#nav-bottom", {
        height: "22vh",
        duration: 0.4,
        ease: "power2.out"
      })
      .to(".nav-elem h5", {
        display: "block",
        opacity: 1,
        duration: 0.2
      })
      .to(".nav-elem h5 span", {
        y: 0,
        stagger: { amount: 0.6 },
        duration: 0.2
      })
      // bring arrow back at bottom, rotated upward
      .set(downArrow, {
        y: 100, // move to bottom position
        rotate: 180
      })
      .to(downArrow, {
        opacity: 1,
        duration: 0.2,
        ease: "power2.out"
      });
    } else {
      // ✅ CLOSE NAV ANIMATION
      let tl = gsap.timeline();

      tl.to(".nav-elem h5 span", {
        y: 25,
        stagger: { amount: 0.6 },
        duration: 0.3
      })
      .to(".nav-elem h5", {
        display: "none",
        duration: 0.1
      })
      .to("#nav-bottom", {
        height: 0,
        duration: 0.2,
        ease: "power2.in"
      })
      .to(downArrow, {
        opacity: 0,
        duration: 0.2
      })
      .set(downArrow, {
        y: 0,
        rotate: 0 // reset arrow
      })
      .to(downArrow, {
        opacity: 1,
        duration: 0.1,
        ease: "power2.out"
      });
    }
  });
}

function section2Animation(){
    
// relem.childNodes[3] this is our img in each div

/*Note : getBoundingClientRect() this is method which give all information about any div i,e its heght , wodth, x-axis pe kha pe hai and y-axis pe kha pe inn Nodelist form .
for checking ki div x-axis pe kha hai for that 
 relem.getBoundingClientRect().x 
*/



const rightElems= document.querySelectorAll('.section2-right-elem');
// console.log(rightElems);
rightElems.forEach(function(relem){
    // console.log(relem);
    relem.addEventListener("mouseenter",function(){
        /*text, h3, text, img.circle, text these are content of each relem [i.e there childnodes so img is 4th one to acess this
        relem.childNodes[3] 
    ]*/
    // console.log(relem.childNodes[3]) //img

       gsap.to( relem.childNodes[3],{
        opacity:1,
        scale:1,
       })
    })
     relem.addEventListener("mouseleave",function(){
        gsap.to( relem.childNodes[3],{
        opacity:0,
        scale:0,
       })
     })
     // x: dets.x,
            // y:dets.y, akele ye value dene me problem as beacuse they take value according  to whole window size so we subtract uss div ke x-axis and y-aixs ki value jisse ye img uske andar hi rahe 
     relem.addEventListener("mousemove",function(dets){
        gsap.to(relem.childNodes[3],{
            x:dets.x - relem.getBoundingClientRect().x-30,
            y:dets.y - relem.getBoundingClientRect().y-130,
        })

       
     })
    
})



}

function section3Animation(){
    var section3Center= document.querySelector('#section3-center');
// console.log(section3Center);
var video= document.querySelector('#section-3 video');
// console.log(video);


// section3 center pe click karne pe video start
section3Center.addEventListener('click',function(){
//    console.log("hello");
    

    
    video.play() // used for playing video
    gsap.to(video,{
        transform: "scaleX(1) scaleY(1)",
        duration:0.2,
        opacity:1,
        borderRadius:"0%",
    })
})


// video pe click karne pe video stop

video.addEventListener('click',function(){
      video.pause() // used for pausing video

      //give default css jo css me video ko di thi
    gsap.to(video,{
        transform: "scaleX(0.7) scaleY(0)",
        duration:0.2,
        opacity:0,
        borderRadius:"30px",
    })
})
}



function section4Animation(){
    const section4RightElement= document.querySelectorAll('.sec-right');
// console.log(section4RightElement);
section4RightElement.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
    //   console.log(elem.childNodes[3]); select video
    elem.childNodes[3].style.opacity=1;
    elem.childNodes[3].play();
    })
    elem.addEventListener("mouseleave",function(){
    elem.childNodes[3].style.opacity=0;
    elem.childNodes[3].load();

    // elem.childNodes[3].pause(); if we use this than the instance where it gets pause wapis mouseenter hone pe whi se chalegi so to start se chalane ke liye use load();

    })
})





}




// Ye animation on scrolling up pe jab wapis upar scroll karenge tab work
function section6Animation() {
    gsap.from("#btm6-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part2",
            scroller: "main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}



navAnimation();
section2Animation();
section3Animation();
section4Animation();
section6Animation();
