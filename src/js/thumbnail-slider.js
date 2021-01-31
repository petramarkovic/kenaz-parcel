let carouselSlides = document.querySelectorAll('.carousel-2-slide');
let arrowRight = document.getElementById('carousel-2-arrow-right');
let arrowLeft = document.getElementById('carousel-2-arrow-left');
var currentSlide = 0;


export function resetCarousel(){
    var i;
    for(i=0; i<carouselSlides.length; i++){
        carouselSlides[i].style.display = 'none';
    }
}

export function startCarouselSlide(){
    resetCarousel();
    carouselSlides[0].style.display = 'block';
}

export function slideLeftCarousel(){
    resetCarousel();
    carouselSlides[currentSlide - 1].style.display = 'block';
    currentSlide --;
}

export function slideRightCarousel(){
    resetCarousel();
    carouselSlides[currentSlide + 1].style.display = 'block';
    currentSlide ++;
}

arrowLeft.addEventListener('click', function(){
    if(currentSlide === 0){
        currentSlide = carouselSlides.length;
    }
    slideLeftCarousel();
});

arrowRight.addEventListener('click', function(){
    if(currentSlide === carouselSlides.length -1){
        currentSlide = -1;
    }

    slideRightCarousel();
});

startCarouselSlide();
