let slides = document.querySelectorAll('.news-carousel-container-box');
let arrowRight = document.querySelector('.arrow-right-yellow')
let arrowLeft = document.querySelector('.arrow-left-yellow')

var currentSlide = 0;


export function resetSlider(){
    var i;
    for(i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
    }
}

export function startSlides(){
    resetSlider();
    slides[0].style.display = 'flex';
}

export function slideLeftNews(){
    resetSlider();
    slides[currentSlide - 1].style.display = 'flex';
    currentSlide --;
}

export function slideRightNews(){
    resetSlider();
    slides[currentSlide + 1].style.display = 'flex';
    currentSlide ++;
}

arrowLeft.addEventListener('click', function(){
    if(currentSlide === 0){
        currentSlide = slides.length;
    }
    slideLeftNews();
});

arrowRight.addEventListener('click', function(){
    if(currentSlide === slides.length -1){
        currentSlide = -1;
    }

    slideRightNews();
});

startSlides();
