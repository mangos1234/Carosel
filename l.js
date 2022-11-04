let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;

console.log(totalSlides);

document.getElementById("next").addEventListener("click", function(){
    next();
})

document.getElementById("previous").addEventListener("click", function(){
    prev();
})

function updateSlidePos(){
    for (let slide of slides){
        slide.classList.remove("visible");
    }

    slides[slidePosition].classList.add("visible");
}

function next(){
    if(slidePosition === totalSlides - 1)
    {
        slidePosition = 0;
    }
    else
    {
        slidePosition++;
    }
    updateSlidePos();
}

function prev(){
    if(slidePosition === 0)
    {
        slidePosition = totalSlides-1;
    }
    else{
        slidePosition--;
    }
    updateSlidePos()
}