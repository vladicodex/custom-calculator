var display = document.querySelector("#display");
var buttons = document.querySelectorAll("input");

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