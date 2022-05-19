


import {init, peeps} from '../../_common/js/common.js'
const david = peeps.david

const tl = new TimelineMax( {onComplete:()=>{ }} )


tl.set(".frame1", {opacity:1})


tl.to(".t1",  {duration:.4, opacity:0}, `+=${david.t1}`)
tl.from(".t2",  {duration:.4, opacity:0})


tl.add("f2", `+=${david.t2}`)
tl.to(".t2",  {duration:.6, opacity:0}, "f2")
tl.from(".t3",  {duration:.6, opacity:0})

tl.add("f3", `+=${david.t3}`)
tl.to(".t3",  {duration:.6, opacity:0}, "f3")
tl.from(".t4",  {duration:.6, opacity:0})

tl.add("f4", `+=${david.t4}`)
tl.to(".t4",  {duration:.6, opacity:0}, "f4")

tl.from(".logo",  {duration:.3, opacity:0})
tl.from(".t5",  {duration:.3, opacity:0}, "+=.2")

