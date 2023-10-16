let navlist=document.getElementById("nav-list")
let openMenu=document.querySelector(".menuopen")
let cross = document.querySelector(".cross")
openMenu.addEventListener("click",() =>
{
    navlist.style.opacity="100%"
    openMenu.style.display="none"
})
cross.addEventListener("click",() =>{
    navlist.style.opacity = "0%"
   setTimeout(() =>{
    openMenu.style.display = "block"
},400)

})


// navbar ends
// ******************************************************
// slider starts

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const numberOfSlides = slides.length;
let slideNumber = 0;

// slider next button

nextBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });


    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");

}


// slider previous button

prevBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });


    slideNumber--;

    if(slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add("active");

}