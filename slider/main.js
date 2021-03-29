'use strict';

let sliderBtnLeft = document.querySelector('#left');
let sliderBtnRight = document.querySelector('#rigth');
let sliderItem = document.querySelectorAll('.slider__item-item');

let count = 0;

sliderBtnRight.addEventListener('click', function () {
    count++
    if(count == sliderItem.length){
        sliderItem[count-1].classList.remove('active');
        count = 0;
        sliderItem[count].classList.add('active');
    }
    else{
        sliderItem[count].classList.add('active');
        sliderItem[count-1].classList.remove('active');
    }

});

sliderBtnLeft.addEventListener('click', function () {
    console.log(count);
    if(count == 0){
        sliderItem[count].classList.remove('active');
        count = sliderItem.length - 1;
        sliderItem[count].classList.add('active');

    }
    else{
        sliderItem[count-1].classList.add('active');
        sliderItem[count].classList.remove('active');
        count--
    }
});

(function autoSlide(){
    setInterval(function(){
        count++
        if(count == sliderItem.length){
            sliderItem[count-1].classList.remove('active');
            count = 0;
            sliderItem[count].classList.add('active');
        }
        else{
            sliderItem[count].classList.add('active');
            sliderItem[count-1].classList.remove('active');
        }
    }, 3000)
})()