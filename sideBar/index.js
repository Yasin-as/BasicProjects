const barEl = document.querySelector(".fa-bars");
const closeEl = document.querySelector(".fa-sharp");
const sidebarEl = document.querySelector(".sidebar");

barEl.addEventListener("click", (e) => {
    sidebarEl.style.transform = "translate(0)";
})
closeEl.addEventListener("click", (e) => {
    sidebarEl.style.transform = "translate(-100%)";
})