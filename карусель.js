const img = document.querySelector(".karusel");
const imgNum = 3;
const delay = 2000;
img.width = 900;


let i = l;
setTimeout(function tick(){

    i = i + 1;
    if (i > imgNum) i = 1;
    img.src = `images/${i}.jpg`;
    setTimeout(tick, delay);

}, delay);