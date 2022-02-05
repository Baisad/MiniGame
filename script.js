const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');
const gameEnd = document.querySelector('#gameOver');

document.addEventListener('keydown', function(event){
    jump()
});

function jump (){
    if(dino != "jump"){
        dino.classList.add("jump")
    }
    setTimeout(function() {
        dino.classList.remove("jump")
    },300 );
};

let gameOver = setInterval( function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 240){
        gameEnd.classList.remove("gameOver");
        dino.classList.remove("dino");
        cactus.classList.remove("cactus");
    }
},10 );