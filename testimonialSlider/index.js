const testimonial = [
    {
    userName: "Cherise G.",
    photoURL: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    text: "I love your system. I just can't get enough of apple. I want to get a T-Shirt with apple on it so I can show it off to everyone."
    },
    {    
    userName: "Rebe K.",
    photoURL: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    text: "I will recommend you to my colleagues. Apple impressed me on multiple levels. You won't regret it. Keep up the excellent work"   
    },
    {    
    userName: "Wandts W.",
    photoURL: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    text: "Apple is exactly what our business has been lacking. I couldn't have asked for more than this. I use Apple often."   
    }
]

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username")
let idx = 0;
updateTestimonial()
function updateTestimonial(){
    const {userName, photoURL, text} = testimonial[idx];
    imgEl.src = photoURL;
    textEl.innerText = text;
    usernameEl.innerText = userName;
    console.log(userName)
    idx++;
    if(idx === testimonial.length){
        idx = 0;
    }
    setInterval(() => {
        updateTestimonial();
    }, 1500);
}
