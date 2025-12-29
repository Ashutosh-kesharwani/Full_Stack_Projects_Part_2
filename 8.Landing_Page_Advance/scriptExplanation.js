//code for applying shery.js

/*Shery.imageEffect(Element,configurations)
ele -> ele which contains the images here back div
 style ranges from 1 to 5
Style 5: me hamara wavy effect hai default me and if we select morph than scroll hone pe morphing effect
and in debug panel there are different panel which we use to change effects

2nd : gooey effect : true pe when we move our mouse than it shows the below images 

Now we also get gooey panel so when we open it 
and 
a) go to infinite gooey: after tick on clicking we get below image
b) Normal gooey me  if we tick GooeyBakEffect than below image also follow wavy effect just like above images 
c)Gooeyball se size bada cota 
d) thresold se alg places me bhi effect started working
e) Antialias soff gooey edges 



At last after apply all the effects Go to debug-panel and click on save to clipboard after it remove debug:true 

Write config : paste to all thing from save to clipboard 

onmouse:{value:1} work only when we hover / 0 pe chalta hi rhega

*/


//Shery.js code 
Shery.imageEffect("#back",{style:5 , debug: true,config: {"a":{"value":2.75,"range":[0,30]},"b":{"value":-0.94,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.08442978686133},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.53,"range":[0,2]},"noise_scale":{"value":12.98,"range":[0,100]}} , gooey:true})

const mainEle= document.querySelector('main');


//all elems div contains h1
var elems= document.querySelectorAll('#top-left-content .elem');
// console.log(elems);

elems.forEach(function(ele){

// iska matlab ki iss ele jo ek elem div hai uske saare h1    
const elemH1= ele.querySelectorAll('#top-left-content .elem h1');
var index=0; // denotes 1st h1.
// console.log(elemH1);

// flag which will work i.e if animating nhi ho rhi tab karo yuki uss waqt ye false me rahega and if animating ho rhi hai to mat karo
var animating=false;

mainEle.addEventListener('click',function(){

    if (!animating){
        // starts me defa value false thi to jab anim starts to true kar diya and jaise hi comp ho fir false kardo
        animating=true;
          gsap.to(elemH1[index],{
    top:"-=100%", // jitni value hai usse -100% upar chale jao
    ease:"Expo.easeInOut",
    duration:1,

    // i.e upar wale h1 jab upar chala jaye tab ham cahahte ha ki wo wapis neeche aa e lag jaye uske liye we use onComplete and usme jo this hai vo hame tween deta hai jisme se _targets  array hai jo 0th index pephla h1 jo upar gaya vo mil jayga

    /*gsap.set(ele,prop) here use to set any gsap prop on selected ele and prop->{top:"100%"} like iss trah likho */
    onComplete:function(){
        // console.log(this); //this tells basically ye ele kaun hai

        gsap.set(this._targets[0],{top: "100%" })
        animating=false;
    }
   });


   index===elemH1.length-1 ? (index=0) : index++; 
   // index ki value inc karte rhan jab tak uski value 4 nha ho jaye jaise hi 4th index ho (i.e 5th h1 waise hi stop and starts again from index=0 se)
   // upar wale h1 ke jate hi maan dusre h1 ko le aao so inc index value and run above code once again

   gsap.to(elemH1[index],{
    top:"-=100%", // jitni value hai usse -100% upar chale jao
    ease:"Expo.easeInOut",
    duration:1,
   });
    }
});

});

