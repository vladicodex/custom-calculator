var display = document.querySelector("#display");
var buttons = document.querySelectorAll("input");
var clicked = false;
var audio = document.getElementById('my-audio');

buttons.forEach((button) => {
    button.onclick = () => {
        if (button.id == "clear") {
            display.innerText="";
        } else if (button.id == "delete"){
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText == "" && button.id == "equal") {
            display.innerText = "???";
            setTimeout(() => (display.innerText = ""), 900);
        } else if (display.innerText != "" && button.id == "equal") {
            display.innerText = eval(display.innerText);
        } else {
            display.innerText += button.value;
        }
    };
});

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

function partyMode() {
    var element = document.body;
    element.classList.toggle("party-mode");

    if(clicked){
        audio.pause();
        clicked = false;
    } else {
        audio.currentTime = 0;
        audio.play();
        clicked = true;
    }
}