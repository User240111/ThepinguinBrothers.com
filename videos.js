const videos = document.querySelectorAll(".video-slide");
const dots = document.querySelectorAll(".dot");

let current = 0;

function cambiarVideo(){

    videos[current].classList.remove("active");
    dots[current].classList.remove("active");

    current++;

    if(current >= videos.length){
        current = 0;
    }

    videos[current].classList.add("active");
    dots[current].classList.add("active");
}

setInterval(cambiarVideo, 8000);