const video = document.getElementById("videoPromo");
const playOverlay = document.getElementById("playOverlay");

playOverlay.addEventListener("click",()=>{

    video.play();

});

video.addEventListener("play",()=>{

    playOverlay.innerHTML='<i class="fas fa-pause"></i>';

    setTimeout(()=>{

        playOverlay.classList.add("hide");

    },700);

});

video.addEventListener("pause",()=>{

    playOverlay.classList.remove("hide");

    playOverlay.innerHTML='<i class="fas fa-play"></i>';

});

video.addEventListener("click",()=>{

    if(video.paused){

        video.play();

    }else{

        video.pause();

    }

});