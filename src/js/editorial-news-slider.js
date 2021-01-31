let editorialSlides = document.querySelectorAll('.editorial-box');
let arrowEditorialRight = document.querySelector('.arrow-right-editorial');
let arrowEditorialLeft = document.querySelector('.arrow-left-editorial');

var currentSlide = 0;


export function resetEditorialSlider(){
    var i;
    for(i=0; i<editorialSlides.length; i++){
        editorialSlides[i].style.display = 'none';
    }
}

export function startEditorialSlides(){
    resetEditorialSlider();
    editorialSlides[0].style.display = 'block';
}

export function slideLeftEditorialNews(){
    resetEditorialSlider();
    editorialSlides[currentSlide - 1].style.display = 'block';
    currentSlide --;
}

export function slideRightEditorialNews(){
    resetEditorialSlider();
    editorialSlides[currentSlide + 1].style.display = 'block';
    currentSlide ++;
}

arrowEditorialLeft.addEventListener('click', function(){
    if(currentSlide === 0){
        currentSlide = editorialSlides.length;
    }
    slideLeftEditorialNews();
});

arrowEditorialRight.addEventListener('click', function(){
    if(currentSlide === editorialSlides.length -1){
        currentSlide = -1;
    }

    slideRightEditorialNews();
});

startEditorialSlides();
