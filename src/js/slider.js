let slides = document.querySelectorAll('.slide');
let arrowRight = document.getElementById('arrow-right');
let arrowLeft = document.getElementById('arrow-left');
var currentSlide = 0;


export function reset(){
    var i;
    for(i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
    }
}

export function startSlide(){
    reset();
    slides[0].style.display = 'block';
}

export function slideLeft(){
    reset();
    slides[currentSlide - 1].style.display = 'block';
    currentSlide --;
}

export function slideRight(){
    reset();
    slides[currentSlide + 1].style.display = 'block';
    currentSlide ++;
}

arrowLeft.addEventListener('click', function(){
    if(currentSlide === 0){
        currentSlide = slides.length;
    }
    slideLeft();
});

arrowRight.addEventListener('click', function(){
    if(currentSlide === slides.length -1){
        currentSlide = -1;
    }

    slideRight();
});

startSlide();
