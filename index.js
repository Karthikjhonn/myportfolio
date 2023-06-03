function darkMode() {
    if (confirm("Do you want to change the theme?")) {
        if (document.querySelector("head link").getAttribute('href') == "style1.css") {
            document.querySelector("head link").setAttribute('href', "style2.css")
        } else if (document.querySelector("head link").getAttribute('href') == "style2.css") {
            document.querySelector("head link").setAttribute('href', "style1.css")
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
    console.log(entries);
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

