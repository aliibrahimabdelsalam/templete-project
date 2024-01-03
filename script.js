// animation

var slideUp = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration:2000,
    easing: 'ease-out',
    // reset: true
});

slideUp.reveal('.landing-page, .modern-home, .cards, .react-section, .miscellaneous, .feature, .explore,footer', {
    afterReveal: function(el) {
        ScrollReveal().clean(el);
    }
});
/// scroll 
window.addEventListener('scroll', function () {
    var icon = document.querySelector('.icons-up');
    if (this.document.documentElement.scrollTop > 1000) {
        icon.classList.remove("hidden")
    }
    else if (this.document.documentElement.scrollTop < 1000) {
        icon.classList.add("hidden");
    }
})

// navbar 
var btn = document.querySelector("header .btn");
var menu = document.querySelector(".navbar-toggler");
console.log(menu)
var count = 1;
menu.addEventListener("click", function () {
    // console.log("count ",count)
    // if(count%2!=0)
    //     btn.style.display = "inline-block";
    // else
    //     btn.style.display = "none"
    btn.style.display = count % 2 != 0 ? "inline-block" : "none";
    count++;

})
// modern section

var allElements = document.querySelectorAll(".modern-box .modern-cart")
var ankors = document.querySelectorAll('.ankor');
var tech = document.querySelectorAll(".tech");
var business = document.querySelectorAll(".modern-box #business");
var app = document.querySelectorAll(".app");
var saas = document.querySelectorAll(".saas");
ankors.forEach(function (ele) {
    ele.addEventListener("click", function (e) {
        e.preventDefault();
        ankors.forEach(e => {
            e.classList.remove("active");
        })
        ele.classList.add("active");

        allElements.forEach(element => {
            element.classList.add("hidden")
            if (element.id == ele.id) {
                // console.log("hello");
                // element.id = '';
                element.classList.remove("hidden");
            }
            if (ele.id == "all")
                element.classList.remove("hidden");
        })
        

    })
})