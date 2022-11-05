// functions to open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//function to display the first image in the slideshow when the page loads
var slideshow = 1;
showSlides(slideIndex);

//function changes the slide when the arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

////function changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}; //If n (the number passed to the function) is greater than the length of the array "slides", the slideIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; //If n (the number passed to the function) is less than 1, the slideIndex is set to the length of the array "slides"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // This for loop takes each item in the array "slides" and sets the display to none
    }
    for (i = 0; i < dots.length; i ++) {
        dots[i].className = dots[i].className.replace(" active", "");  // This for loop takes each item in the array "dots" and removes "active" which removes the active styling
    }
    slides[slideIndex - 1].style.display = "block";  // This displays the image in the slideshow
    dots[slideIndex - 1].className += " active";  // This adds the active styling to the dot associated with the image
}

document.addEventListener("click", function(event){
    // Here we state that if the click happens on the cancel button OR anywhere that is not the contact form AND the click does not happen on any element with the contact class then call the closeForm() function
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )