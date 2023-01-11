const hourEl = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function updateClock(){
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    
    const hourDeg = (hours / 12) * 360;
    const minDeg = (minutes / 60) * 360; 
    const secDeg = (seconds / 60) * 360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`
    minute.style.transform = `rotate(${minDeg}deg)`
    second.style.transform = `rotate(${secDeg}deg)`
    
}
setInterval(updateClock, 1000);

