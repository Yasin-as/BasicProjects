const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('exceprt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 1000);

function getData(){
    header.innerHTML = '<img src="http://via.placeholder.com/640x360" alt="">'
    title.innerHTML = "Lorem ipsum dolor sit amet"
    excerpt.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, provident."
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/44.jpg" alt="">'
    name.innerHTML = "John Doe"
    date.innerHTML = "Oct 08, 2020"

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_text.forEach(bg => bg.classList.remove('animated-bg-text'))
}

