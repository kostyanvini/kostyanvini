'use strict'

let progressBar = document.querySelector('.progress__bar');
document.addEventListener('scroll', function(e){
    let heightDocument = window.scrollY;
    let documentHeigthY = e.target.lastChild.offsetHeight - e.target.lastChild.clientHeight;
    let heightCount = Math.round((heightDocument / documentHeigthY) * 100);
    progressBar.style.width =  heightCount + "%";
})
