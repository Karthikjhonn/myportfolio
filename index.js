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
    document.querySelector("#collapse").classList.toggle("hidden")
}

document.querySelector("#collapse").addEventListener("click", () => {
    if (document.querySelector("#collapse") != "hidden") {
        document.querySelector("#collapse").classList.add("hidden")
    }
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

