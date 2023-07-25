// dark mode 
function darkMode() {
    var darkColor=document.querySelector("meta").content
    if (confirm("Do you want to change the theme?")) {
        if (darkColor=="light") {
            document.querySelector("meta").content="dark"
        } else{
            document.querySelector("meta").content="light"     
           }
    }
}

// small screen devices navbar
function collapse() {
    document.querySelector("#collapse").classList.toggle("translate-y-[0]")
}
document.querySelector("#collapse").addEventListener("click", () => {
    document.querySelector("#collapse").classList.remove("translate-y-[0]");
})


// stickybar
document.addEventListener("scroll", () => {
    var pageOffset = window.pageYOffset
    if (pageOffset > 150) {
        document.querySelector("header").classList.add("shadow-lg")
        if (pageOffset > 1900) {
            document.querySelector("#stickybar").classList.add("!right-0")
        } else {
            document.querySelector("#stickybar").classList.remove("!right-0")
        }
    } else {
        document.querySelector("header").classList.remove("shadow-lg")
    }

})


// Show And hide 
const observe = new IntersectionObserver((entries) => {
    // console.log(entries);
    entries.forEach((data) => {
        if (data.isIntersecting) {
            data.target.classList.add('show')
        } else {
            data.target.classList.remove('show')

        }
    })
})
let hideEl = document.querySelectorAll(".hide");
hideEl.forEach((el) => observe.observe(el))

// carousal--------->
// let slideIndex = 0;
// const slides = document.querySelectorAll('.carousel .carousel-item');

// function showSlide(index) {
//   slides.forEach((slide) => {
//     slide.classList.remove('active');
//   });
//   slides[index].classList.add('active');
// }

// function nextSlide() {
//   slideIndex++;
//   if (slideIndex >= slides.length) {
//     slideIndex = 0;
//   }
//   showSlide(slideIndex);
// }

// function prevSlide() {
//   slideIndex--;
//   if (slideIndex < 0) {
//     slideIndex = slides.length - 1;
//   }
//   showSlide(slideIndex);
// }

// var myClearInterval;
// function mySetInterval(){
//     this.myClearInterval=setInterval(nextSlide, 2000);
// }
// mySetInterval()
// function mouseEnter(){
//     clearInterval(myClearInterval)
// }
// function mouseLeave(){
//     mySetInterval()
// }

// preloader 
var loader = document.getElementById("preloader")
const showPageElm = document.getElementById("showPage")
window.addEventListener("load",()=>{
    setTimeout(showPage,1500)
})

const showPage =()=>{
    loader.style.display="none";
    showPageElm.classList.add("!block")
}