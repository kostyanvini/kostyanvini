let mainTitle = document.querySelector('#main__title');
let titlePage = document.querySelector('title');
let statusJob = false;
mainTitle.textContent = getStrClock();
titlePage.textContent = getStrClock();

(function runClock(){
    setInterval(function(){
        mainTitle.textContent = getStrClock();
        titlePage.textContent = getStrClock();
    }, 1000)
})();

function getStrClock(){
    let date = new Date,
        minutes = date.getMinutes();
        hours = date.getHours(),
        secunds = date.getSeconds();
    if(secunds < 10) secunds = "0" + secunds;
    else if(minutes < 10) minutes = "0" + minutes;
    else if(hours < 10) hours = "0" + hours;
    return `${hours}:${minutes}:${secunds}`
}
