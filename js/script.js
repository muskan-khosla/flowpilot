const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

// Prevent background scrolling while the menu is open
menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    nav.classList.toggle("active");

    document.body.classList.toggle("menu-open");

});

// Close menu after clicking a link
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");
        nav.classList.remove("active");

    });

});

// FAQ 
document.addEventListener("DOMContentLoaded", function () {

    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        const header = item.querySelector(".accordion-header");

        header.addEventListener("click", () => {

            const isActive = item.classList.contains("active");

            // Close all items
            accordionItems.forEach(acc => {
                acc.classList.remove("active");
            });

            // Open only the clicked item
            if (!isActive) {
                item.classList.add("active");
            }

        });
    });

});

// Testimonial Slider
$('.testimonial-slider').slick({
    slidesToShow:1,
    slidesToScroll:1,
    arrows:false,
    dots:true,
    infinite:true,
    autoplay:true,
    autoplaySpeed:4000,
    adaptiveHeight:false
});



// contact form 
const form = document.querySelector("#contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let valid = true;

    // Inputs
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const subject = document.querySelector("#subject");
    const message = document.querySelector("#message");

    // Remove old errors
    document.querySelectorAll(".error").forEach(el => el.remove());

    function showError(input, text){

        const error = document.createElement("small");

        error.className = "error";
        error.innerText = text;

        input.parentNode.appendChild(error);

        valid = false;

    }

    // Name
    if(name.value.trim() === ""){
        showError(name,"Please enter your name.");
    }

    // Email
    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.value.trim()===""){
        showError(email,"Please enter your email.");
    }
    else if(!emailPattern.test(email.value)){
        showError(email,"Please enter a valid email.");
    }

    // Subject
    if(subject.value===""){
        showError(subject,"Please select a subject.");
    }

    // Message
    if(message.value.trim().length<10){
        showError(message,"Message should be at least 10 characters.");
    }

    if(valid){

        form.submit();

    }

});
