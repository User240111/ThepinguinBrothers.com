const sliders = document.querySelectorAll(".producto-slider");

sliders.forEach(slider=>{

    const imgs = slider.querySelectorAll("img");

    const dots = slider.querySelectorAll(".producto-dots span");

    let actual = 0;

    setInterval(()=>{

        imgs[actual].classList.remove("active");

        dots[actual].classList.remove("active");

        actual++;

        if(actual>=imgs.length){

            actual=0;

        }

        imgs[actual].classList.add("active");

        dots[actual].classList.add("active");

    },3000);

});