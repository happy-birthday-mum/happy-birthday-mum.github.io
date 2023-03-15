var lid = document.getElementById("lid");
var box = document.getElementById("box");
var modal = document.getElementById("modal");

function playMusic(){
	lid.style = "transform: translateY(-100px);";
};
lid.addEventListener("click", playMusic);
box.addEventListener("click", playMusic);

const start = () => {
	setTimeout(function(){
		confetti.start();
	},1000)
}

const stop = () => {
	setTimeout(function(){
		confetti.stop();
	},5000)
}

start();
stop();
