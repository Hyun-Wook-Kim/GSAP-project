
gsap.registerPlugin(ScrollTrigger)

gsap.to('.carousel',{
  // height : document.querySelector('body').offsetHeight,
  x : -1000,
  scrollTrigger : {
     trigger : '.carousel',
     start : "center center",
     markers : true,
     scrub : true,
     pin : true,
    end : () =>'+=' + document.querySelector('.carousel').offsetWidth,
    }
})