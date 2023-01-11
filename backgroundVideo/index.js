const videoEl = document.querySelector(".background-video")
const btn = document.querySelector(".btn");
const fa = document.querySelector(".fa");

btn.addEventListener("click", (e) => {
    if(btn.classList.contains("pause")){
        btn.classList.remove("pause");
        videoEl.play();
        fa.classList.add("fa-pause");
        fa.classList.remove("fa-play");

    }else{
        btn.classList.add("pause");
        fa.classList.remove("fa-pause");
        fa.classList.add("fa-play");
        videoEl.pause();
    }
})
window.addEventListener("load", () => {
  preloader.style.zIndex = "-999";
});