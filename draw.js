
let prom = 16;
let color = "black";

const newColor = document.getElementById("newColor");

newColor.addEventListener("input", (event) => {
   color = event.target.value;
});

const newGrid = document.querySelector("#newGrid");
newGrid.addEventListener("click", () => {
    prom = prompt("please give a number between 1 and 100", "16");
if (prom > 100 || prom < 1) {
    prom = 16;
}
const container = document.querySelector("#container");
container.innerHTML = ""; // Clear any existing grid


for (let i = 0; i < prom * prom; i++) {
    const content = document.createElement("div");
    content.style.cssText = "background: white";
    content.style.border = '1px solid black';
    content.style.width = `calc(700px / ${prom})`;
    content.style.height = `calc(700px / ${prom})`;
    content.style.aspectRatio ="1/1";
    content.style.boxSizing = "border-box";
    container.appendChild(content);
    content.addEventListener("mouseenter", (event) => {
        content.style.backgroundColor = color;
    });
}
});



for (let i = 0; i < prom * prom; i++) {
    const content = document.createElement("div");
    content.style.cssText = "background: white";
    content.style.border = '1px solid black';
    content.style.width = `calc(700px / ${prom})`;
    content.style.height = `calc(700px / ${prom})`;
    content.style.aspectRatio ="1/1";
    content.style.boxSizing = "border-box";
    container.appendChild(content);
    content.addEventListener("mouseenter", (event) => {
        content.style.backgroundColor = color;
    });
}