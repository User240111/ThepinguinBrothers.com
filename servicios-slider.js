const sliders = document.querySelectorAll(".card-slider");

sliders.forEach(slider=>{

    const images = slider.querySelectorAll("img");
    const dots = slider.querySelectorAll("span");

    let index = 0;

    setInterval(()=>{

        images[index].classList.remove("active");
        dots[index].classList.remove("active");

        index++;

        if(index>=images.length){
            index=0;
        }

        images[index].classList.add("active");
        dots[index].classList.add("active");

    },3000);

});