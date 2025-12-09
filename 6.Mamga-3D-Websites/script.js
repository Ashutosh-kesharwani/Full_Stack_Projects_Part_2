// Locomotive + ScrollTrigger setup
function initSmoothScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
initSmoothScroll();

// Text Animation for page 2
// This code animates the text in the h1 element of page 2
const h1 = document.querySelector("#page2-content > h1");

let letters = h1.textContent.split("").map(char => {
  if (char === " ") return `<span class="space">&nbsp;</span>`;
  return `<span>${char}</span>`;
}).join("");

h1.innerHTML = letters;

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo("#page2-content > h1 > span", 
  {
    opacity: 0,
    y: 25,
    color: "#dadada"
  },
  {
    opacity: 1,
    y: 0,
    color: "white",
    scrollTrigger: {
      trigger: "#page2-content > h1",
      scroller: "#main",  // remove if not using custom scroller
      start: "top 85%",
      end: "bottom top",
      scrub: 0.3,         // 🔥 smoother but faster reaction
    },
    stagger: 0.015,        // 🔥 faster stagger
    ease: "power4.out"     // 🔥 snappier easing
  }
);
// ----------------------------------------------------------------------------------------------------------

// Canvas Animation for page 3
function canvasAnimation() {
  const canvas = document.querySelector("#page3 canvas");
  const context = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  const frameCount = 66;
  const currentFrame = index =>
    `assets/frames/frames${String(7 + index * 3).padStart(5, "0")}.png`;

  const images = [];
  const imageSeq = { frame: 0 };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }

  images[0].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    let canvas = ctx.canvas;
    let hRatio = canvas.width / img.width;
    let vRatio = canvas.height / img.height;
    let ratio = Math.max(hRatio, vRatio);
    let x = (canvas.width - img.width * ratio) / 2;
    let y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height, x, y, img.width * ratio, img.height * ratio);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      scrub: 0.5,
      start: "top top",
      end: "250% top"
    },
    onUpdate: render
  });

  ScrollTrigger.create({
    trigger: "#page3",
    scroller: "#main",
    start: "top top",
    end: "250% top",
    pin: true
  });
}

window.addEventListener("load", canvasAnimation);



// ----------------------------------------------------------------------------------------------------------
// Canvas Animation for page 5
function canvasAnimation1() {
  const canvas = document.querySelector("#page5 canvas");
  const context = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  const frameCount = 66;
  const currentFrame = index =>
    `assets/bridges/bridges${String(4 + index * 3).padStart(5, "0")}.png`;

  const images = [];
  const imageSeq = { frame: 0 };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }

  images[0].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    let canvas = ctx.canvas;
    let hRatio = canvas.width / img.width;
    let vRatio = canvas.height / img.height;
    let ratio = Math.max(hRatio, vRatio);
    let x = (canvas.width - img.width * ratio) / 2;
    let y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height, x, y, img.width * ratio, img.height * ratio);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      scrub: 0.5,
      start: "top top",
      end: "250% top"
    },
    onUpdate: render
  });

  ScrollTrigger.create({
    trigger: "#page5",
    scroller: "#main",
    start: "top top",
    end: "250% top",
    pin: true
  });
}


window.addEventListener("load", canvasAnimation1);

//-----------------------------------------------------------------------------------------------------------------------
