var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random");

//Show the color code in h3
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

//Bring in random hex color
function getRandomColorVal(){
	var hex = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i<6; i++){
		color += hex[Math.floor(Math.random()*16)];
	}
	return color;
}

//Add random hex to inputs
function setRandomColor(){
	color1.value = getRandomColorVal();
	color2.value = getRandomColorVal();
	setGradient();
}

randomBtn.addEventListener('click', setRandomColor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

setGradient();