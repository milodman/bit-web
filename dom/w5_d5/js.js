var body = document.querySelector("body");
var player = document.querySelector("img");
var x = (player.width) / 2;
var y = (player.height) / 2;
var button = document.querySelector('button');

function movePlayer(event) {


    player.style.top = event.clientY - x + "px";
    player.style.left = event.clientX - y + "px";



}

body.addEventListener("click", movePlayer);

function stopPlayer(event) {
    body.removeEventListener("click", movePlayer);
}

button.addEventListener("click", stopPlayer);