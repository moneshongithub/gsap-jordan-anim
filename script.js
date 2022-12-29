var tl = gsap.timeline();
tl.from("#loader img",{
    scale:0,
    opacity:0
})

tl.from("#loader",{
    duration:1.5,
    top:0,
})
tl.from("#nav",{
    duration : 0.3,
    top:-40,
    opacity:0,
})
tl.from("#content h3",{
    duration : 0.3,
    x:-100,
    opacity:0,
})

tl.from("#content h1",{
    duration : 0.3,
    x:-100,
    opacity:0,
})
tl.from("#shoes img",{
    rotate:30,
    opacity:0
})
tl.from("#rating",{
    duration : 0.3,
    x:-100,
    opacity:0,
})
tl.from("#content p",{
    duration : 0.3,
    x:-100,
    opacity:0,
})
tl.from("#content button",{
    duration : 0.5,
    scale:0.5,
    opacity:0,
})
