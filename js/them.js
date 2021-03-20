
window.addEventListener("scroll",function(){
	var header = document.querySelector("main");
	header.classList.toggle("sticky",scrollY>0);
})
$('.counter').counterUp({
    delay: 10,
    time: 1000
});