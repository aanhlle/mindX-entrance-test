let backgroundStyle = document.body.style;
let hexCode = document.getElementById("hexCode");
let copyHex = document.getElementById("copyHex");

document
    .getElementById("genNew")
    .addEventListener("click", setRandomBackground);

document.querySelector("input").addEventListener("input", setClickBackground);
document.getElementById("copyHex").addEventListener("click", copyHexCode);

function setRandomBackground() {
    const randomColor = Math.floor(Math.random() * 16777216).toString(16);
    backgroundStyle.backgroundColor = "#" + randomColor;
    hexCode.innerHTML = "#" + randomColor;
}

function setClickBackground(event) {
    let color = event.target.value;
    hexCode.innerHTML = color;
    backgroundStyle.backgroundColor = color;
}

function copyHexCode() {
    navigator.clipboard.writeText(hexCode.innerText);
    window.alert("Đã copy Hex Code!");
}
