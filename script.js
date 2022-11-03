/* Project Requirements:
 * Generate random background RGB color by clicking button 👍
 * Also generate Hex color
 * User can copy the both color code by clicking copy button
 * Show a dinamic tost message when user copied the color code
 */

// Global Variables
let div = null

// Step-1:- create onLoad function
window.onload = () => {
  main();
};

function main() {
  const root = document.querySelector(".bg"),
    button = document.getElementById("colorGenerator"),
    colorCode = document.getElementById("colorCode");

  button.addEventListener("click", function () {
    const BGcolor = generateColor()[0];
    const BGcolorHex = generateColor()[1];

    root.style.backgroundColor = BGcolor;
    colorCode.value = BGcolor;
    colorCodeHex.value = BGcolorHex;
  });
}

// Step-2:- create random RGB color generator function
function generateColor() {
  const red = Math.trunc(Math.random() * 255),
    green = Math.trunc(Math.random() * 255),
    blue = Math.trunc(Math.random() * 255),
    rgbColor = `rgb(${red},${green},${blue})`;

  // Hex Color
  const hexRed = red.toString(16);
  const hexGreen = green.toString(16);
  const hexBlue = blue.toString(16);
  const hexColor = `#${hexRed}${hexGreen}${hexBlue}`;

  return [rgbColor, hexColor];
}

// Step-3:- create a function to copy the color code
const copyColorCode = () => {
  const colorCode = document.getElementById("colorCode");
  const colorCodeHex = document.getElementById("colorCodeHex");
  const copyBtn = document.querySelector(".copyColoCode");
  const copyBtnHex = document.querySelector(".copyColoCodeHex");

  copyBtn.onclick = function () {
    colorCode.select();
    document.execCommand("copy");
    if(div !== null){
      div.remove()
      div = null
    }
    activeTostMessage(`The color code has coiped 😀`);
  };

  copyBtnHex.onclick = function () {
    colorCodeHex.select();
    document.execCommand("copy");
    if(div !== null){
      div.remove()
      div = null
    }
    activeTostMessage(`The color code has coiped 😀`);
  };
};
copyColorCode();

// Step-4:- Active a tost message
function activeTostMessage(msg) {
   div = document.createElement("div");
  div.innerText = msg;
  div.className = "tost-mesg active";

  div.addEventListener("click", function () {
    div.classList.remove("active");
    div.classList.add("inactive");
    div.addEventListener("animationend", function () {
      div.remove()
      div = null
    });
  });



  document.body.appendChild(div);
}
