'use strict';
let video = document.querySelector('#media-player');
let playVideo = document.querySelector('#play-video');
let progressVideo = document.querySelector('#progress-video');
let progressVideoBar = document.querySelector('.progress-video-bar');
let fullwindowVideo  = document.querySelector('.fullwindow-video');
let timeVideo = document.querySelector('.time-video');
let videoShow = document.querySelector('.video-show');
let elementsVideo = document.querySelector('.elements-video');
let playOrPauseVideo = true;

playVideo.addEventListener('click', playOrPause)
progressVideo.addEventListener('click', addTimeVideo)
video.addEventListener('timeupdate', progressVideoShow);
video.addEventListener('timeupdate', getTimeVideo);

//Развернуть на весь экран, закрытие пока через клавишу "Esc"
fullwindowVideo.addEventListener('click', ()=>{
    videoShow.requestFullscreen()
})
//Конец

//Скрывает секцию у видео, чтобы видеть видео полностью
videoShow.addEventListener('mouseout', ()=>{
    elementsVideo.style.opacity = 0;
    document.removeEventListener('keydown', leftOrRightTimeVideo);
})

videoShow.addEventListener('mouseover', ()=>{
    elementsVideo.style.opacity = 1;
    document.addEventListener('keydown', leftOrRightTimeVideo);
})
//Конец

//Отображение прогресса просмотра видео
function progressVideoShow(){
    let progress = ((video.currentTime / video.duration) * 100).toFixed(1);
    progressVideoBar.style.width = progress + "%";
}
//Конец

//Перематывает видео при клике на блок с прогрессом
function addTimeVideo(e){
    let widthVideoProgressBar  = ((e.offsetX / e.target.clientWidth) * 100).toFixed(2);
    video.pause();
    video.currentTime = (video.duration / 100) * widthVideoProgressBar;
    progressVideoBar.style.width = widthVideoProgressBar + "%";
    video.play();
    playVideo.classList.remove('play-video');
    playVideo.classList.add('pause-video');
    playOrPauseVideo = false
}
//Конец

//Пауза и воспроизведение видео
function playOrPause(){
    if(playOrPauseVideo){
        video.play()
        playOrPauseVideo = false;
        playVideo.classList.remove('play-video');
        playVideo.classList.add('pause-video'); 
    }
    else{
        video.pause()
        playVideo.classList.remove('pause-video');
        playVideo.classList.add('play-video'); 
        playOrPauseVideo = true;
    };
    getTimeVideo()
}
//Конец

//Показывает время, которое прошло с момента воспроизведения видео
function getTimeVideo(){
    let timeVideoShowSecunds = Math.floor((video.currentTime));
    let min = Math.floor((timeVideoShowSecunds / 60));
    let sec = timeVideoShowSecunds % 60;
    if(sec < 10){
        timeVideo.textContent = min + ":" + "0" + sec;
    }
    else{
        timeVideo.textContent = min + ":" + sec;
    }
}
//Конец

//Пермотка видео стрелками влево и вправо, пауза и воспроизведение видео при нажатии на пробел
function leftOrRightTimeVideo(e){
    e.preventDefault();
    if(e.code == "ArrowRight" || e.key == "ArrowRight" || e.keyCode == 39){
        video.pause()
        video.currentTime += 5;
        video.play()
        playVideo.classList.remove('play-video');
        playVideo.classList.add('pause-video');
        playOrPauseVideo = false
    }
    else if(e.code == "ArrowLeft" || e.key == "ArrowLeft" || e.keyCode == 37){
        video.pause()
        video.currentTime -= 5;
        video.play()
        playVideo.classList.remove('play-video');
        playVideo.classList.add('pause-video');
        playOrPauseVideo = false
    }
    else if(e.code == "Space" || e.keyCode == 32|| e.key == ""){
        if(video.paused){
            video.play()
            playVideo.classList.remove('play-video');
            playVideo.classList.add('pause-video'); 
            playOrPauseVideo = false
        }
        else{
            video.pause()
            playVideo.classList.remove('pause-video');
            playVideo.classList.add('play-video'); 
            playOrPauseVideo = true
        }
    }
}
//Конец