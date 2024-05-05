var tl = gsap.timeline()

tl.from("nav h1",{
    y:40,
    opacity:0,
    duration:.5
})

tl.from("nav h4",{
    y:40,
    opacity:0,
    duration:.5,
    stagger:.2
})

tl.from("nav .btn",{
    opacity:0,
    duration:.5
})

tl.from(".hero .hro1 h1",{
    x:-40,
    opacity:0,
    duration:.5,
    stagger:.5
},"-=.5")

tl.from(".hero .hro1 p",{
    x:-40,
    opacity:0,
    duration:.5,
    stagger:.5
})

tl.from(".hero .hro1 button",{
   
    opacity:0,
    duration:.5,
    stagger:.5
})

tl.from(".hero .hro2 img",{
    x:40,
    opacity:0,
    duration:.5,
    stagger:.5
},"-=.5")

gsap.from(".cmpny",{
    transform:"translateX(0)",
     ease:"none",   
    duration:4,
    repeat:-1,
    scrollTrigger:{
        trigger:".cmpny img",
        scroller:"body"
    }
})

gsap.to(".anime h1",{
    transform:"translateX(-100%)",
    scrollTrigger:{
        trigger:".anime h1",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:4,
        pin:true
    }
})


gsap.from(".text h2",{
     x:40,
     opacity:0,   
    duration:.5,
    scrollTrigger:{
        trigger:".text h2",
        scroller:"body",
       
        start:"top 50%"
    }

})


gsap.from(".text p",{
    x:-40,
    opacity:0,   
   duration:.5,
   scrollTrigger:{
       trigger:".text h2",
       scroller:"body",
     
       start:"top 50%"
   }

})

gsap.from(".text1 h2",{
    x:40,
    opacity:0,   
   duration:.5,
   scrollTrigger:{
       trigger:".text1",
       scroller:"body",

       start:"top 50%"
   }

})

gsap.from(".text1 p",{
   x:-40,
   opacity:0,   
  duration:.5,
  scrollTrigger:{
      trigger:".text1",
      scroller:"body",
      start:"top 50%"
  }

})

gsap.from(".text2 h2",{
    x:40,
    opacity:0,   
   duration:.5,
   scrollTrigger:{
       trigger:".text2",
       scroller:"body",
      
       start:"top 50%"
   }

})

gsap.from(".text2 p",{
   x:-40,
   opacity:0,   
  duration:.5,
  scrollTrigger:{
      trigger:".text2",
      scroller:"body",
    
      start:"top 50%"
  }

})




gsap.from(".card .elem1",{
    y:80,
    opacity:0,   
   duration:.5,
   scrollTrigger:{
       trigger:".card div",
       scroller:"body",
       
       start:"top 50%",
       
   }

})

gsap.from(".card .elem2",{
    y:80,
    opacity:0,   
   duration:.5,
   scrollTrigger:{
       trigger:".card div",
       scroller:"body",
   
       start:"top 50%",
      
   }

})

gsap.from(".card .elem3",{
    y:80,
    opacity:0,   
   duration:.5,
   scrollTrigger:{
       trigger:".card div",
       scroller:"body",
      
       start:"top 50%",
   
   }

})

gsap.from(".card .elem4",{
    y:80,
    opacity:0,   
   duration:.5,
   scrollTrigger:{
       trigger:".card div",
       scroller:"body",
      
       start:"top 50%",
      
   }

})

gsap.from(".card .elem5",{
    y:80,
    opacity:0,   
   duration:.5,
    
   scrollTrigger:{
       trigger:".card div",
       scroller:"body",
      
       start:"top 50%",
    
   }

})

gsap.from(".card .elem6",{
    y:80,
    opacity:0,   
   duration:.5,
    
   scrollTrigger:{
       trigger:".card div",
       scroller:"body",
       
       start:"top 50%",
      
   }

})

gsap.from(".ball .b1",{
    x:-80,
    opacity:0,   
   duration:.5,
    
   scrollTrigger:{
       trigger:".ball",
       scroller:"body",
      
       start:"top 50%"
   }

})


gsap.from(".ball .b2 img",{
    x:80,
    opacity:0,   
   duration:.5,
    
   scrollTrigger:{
       trigger:".ball",
       scroller:"body",
       
       start:"top 50%"
   }

})

gsap.from(".bw1 h6",{
    y:80,
    opacity:0,   
   duration:.5,
    stagger:.5,
   scrollTrigger:{
       trigger:".bw1",
       scroller:"body",
      
       start:"top 50%"
   }

})

gsap.from(".bw1 p",{
    y:80,
    opacity:0,   
   duration:.5,
    stagger:.5,
   scrollTrigger:{
       trigger:".bw1",
       scroller:"body",
       
       start:"top 50%"
   }

})

gsap.from(".f",{
    y:80,
    opacity:0, 
   duration:.5,
    
   scrollTrigger:{
       trigger:".f",
       scroller:"body",
      
       start:"top 50%"
   }

})



var cursor = document.querySelector("#cursor")
var play = document.querySelector(".main")
var ball = document.querySelector(".ball")
play.addEventListener("mousemove",function(dets){
gsap.to(cursor,{
    x:dets.x,
    y:dets.y
    // ease:"back.out"
})

})

