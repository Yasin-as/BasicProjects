const counterEl = document.querySelector(".counter");
const barEl = document.querySelector(".loading-bar-front");
const body = document.body;


let idx = 0;

function updateNum(){
    counterEl.innerText = `${idx}%`;
    barEl.style.width = `${idx}%`
    idx++
    if(idx < 101){
        setTimeout(updateNum, 10);
    }
    if(idx > 99){
        body.style.backgroundColor = "white";
    }
}
updateNum()