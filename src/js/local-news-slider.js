let localSlides = document.querySelectorAll('.local-box');
let arrowLocalRight = document.querySelector('.arrow-right-local');
let arrowLocalLeft = document.querySelector('.arrow-left-local');

var currentSlide = 0;


export function resetLocalSlider(){
    var i;
    for(i=0; i<localSlides.length; i++){
        localSlides[i].style.display = 'none';
    }
}

export function startLocalSlides(){
    resetLocalSlider();
    localSlides[0].style.display = 'block';
}

export function slideLeftLocalNews(){
    resetLocalSlider();
    localSlides[currentSlide - 1].style.display = 'block';
    currentSlide --;
}

export function slideRightLocalNews(){
    resetLocalSlider();
    localSlides[currentSlide + 1].style.display = 'block';
    currentSlide ++;
}

arrowLocalLeft.addEventListener('click', function(){
    if(currentSlide === 0){
        currentSlide = locaalSlides.length;
    }
    slideLeftLocalNews();
});

arrowLocalRight.addEventListener('click', function(){
    if(currentSlide === localSlides.length -1){
        currentSlide = -1;
    }

    slideRightLocalNews();
});

startLocalSlides();
