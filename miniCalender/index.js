const monthnameEl = document.getElementById("month-name");
const dayNameEl = document.querySelector(".day-name");
const dayNumberEl = document.querySelector(".day-number");
const yearEl = document.querySelector(".year");

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const date = new Date();

updateDate();


function updateDate(){    
    const year = date.getFullYear();
    const month = date.getMonth();
    const dayNumber = date.getDate();
    const day = weekday[date.getDay()]

    monthnameEl.innerText = date.toLocaleString("en", { month: "long"});
    dayNameEl.innerText = day;
    dayNumberEl.innerText = dayNumber;
    yearEl.innerText = year;
}