newBg = document.querySelector(".bgDiv");
newBtnClick = document.querySelector(".btn-click");
newBtnOver = document.querySelector(".btn-over");
newColorInput = document.querySelector("#colorInput");
newColorText = document.querySelector("#colorText");

function bgColor() {
  const randomColor =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
  newBg.style.backgroundColor = randomColor;
  newColorInput.value = randomColor;
  newColorText.textContent = randomColor;
}

newBtnClick.addEventListener("click", bgColor);
newBtnOver.addEventListener("mouseover", bgColor);

//Enter
newBtnClick.addEventListener("keydown", (e) => {
    if(e.code === "Enter") {
        bgColor()
    }
});

//Reload
window.onload = () => {
    bgColor()
}

//Color select
newColorInput.addEventListener("input", () => {
 let newColor = newColorInput.value
 newBg.style.backgroundColor = newColor
})

//Color copy (navigator clipboard)
document.querySelector("#copy").addEventListener("click", () => {
let colorCode = newColorInput.value;
navigator.clipboard
  .writeText(colorCode)
  .then(() => alert(`Renk ${colorCode} kopyalandı.`));
})

