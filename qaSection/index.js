const questions = document.querySelectorAll(".question")


questions.forEach((question)=>{
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click",(e) => {
        question.classList.toggle("show-text")
    })
})