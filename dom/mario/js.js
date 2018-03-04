var background = document.querySelector('body');
var run = document.querySelector('.run');
var stop = document.querySelector('.stop');

run.classList.add('invisible');


var interval;

function moveBackground() {
    var x = 0;
    interval = setInterval(function () {
        x -= 2;
        background.style.backgroundPosition = x + "px 5px";
     }, 1);
}

background.addEventListener("keydown", function (event) {
    if (event.key == "ArrowRight") {
        stop.classList.add("invisible");
        run.classList.add("visible");
        moveBackground();
    }

});

background.addEventListener("keyup", function (event) {
    run.classList.remove("visible");
    stop.classList.remove("invisible");
    clearInterval(interval);

});