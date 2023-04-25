
const button = document.querySelectorAll("button");
console.log(button);

function ChangeColors() {
    document.body.style.background =
    "#FF" + Math.floor(Math.random() * 100) + Math.floor(Math.random() = 100);
}
GamepadButton.forEach((button) => button.addEventlistener("click", ChangeColors));

function CalculateMe() {
   let number = document.getElementById('myInputField').value
}