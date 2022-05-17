const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power2.out"
});



const {w, h} = size


const peeps = {
	david: {
		t1: 1.2,
		t2: 2.3,
		t3: 2,
		t4: 3.3
	}
}


function init2(obj){
	
	const tl = new TimelineMax()
	const data = peeps[obj.name]


	tl.set(".frame1", {opacity:1})

	

	TweenLite.to(".bg", 13, {scale:.5, ...obj.tween, ease:Linear.easeNone})

	const IN = .5
	const OUT = .3

	

	tl.from(".t2",  {duration:IN, opacity:0}, `+=${data.t1}`)
	tl.to(".t2",  {duration:OUT, opacity:0}, `+=${data.t2}`)

	tl.from(".t3",  {duration:IN, opacity:0})
	tl.to(".t3",  {duration:OUT, opacity:0}, `+=${data.t3}`)

	tl.from(".t4",  {duration:IN, opacity:0})

	tl.add("done", `+=${data.t4}`)
	tl.to(".t4",  {duration:OUT, opacity:0}, "done")
	tl.to(".t1",  {duration:IN, opacity:0}, "done")
	tl.from(".t5",  {duration:IN, opacity:0})

	

	

	

	return tl
}






function init(){
	
	const tl = new TimelineMax({onComplete:()=>{
	
	}})


	tl.set(".frame1", {opacity:1})

	

	TweenLite.to(".bg", 13, {x:-size.w/2, y:-size.h/2, scale:.5, ease:Linear.easeNone, onComplete:()=>{
		// alert("sldkfj")
	}})

	const IN = .5
	const OUT = .3

	// tl.from(".t1", IN, {opacity:0})
	tl.to(".t1",  {duration:OUT, opacity:0}, "+=2.3")

	tl.from(".t2",  {duration:IN, opacity:0}, "+=.2")
	tl.to(".t2",  {duration:OUT, opacity:0}, "+=2")

	tl.from(".t3",  {duration:IN, opacity:0})
	tl.to(".t3",  {duration:OUT, opacity:0}, "+=3.7")

	tl.from(".t4",  {duration:IN, opacity:0})

	

	

	

	return tl
}





export {size, init, init2}