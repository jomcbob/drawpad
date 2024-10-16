
let prom = 30;
let color = "black";


const newColor = document.getElementById("newColor");
const eraser = document.getElementById("eraser");
const shade = document.getElementById("shading");



newColor.addEventListener("input", (event) => {
    color = event.target.value;
});

eraser.addEventListener("click", () => {
    color = "white";
});

const newGrid = document.querySelector("#newGrid");
newGrid.addEventListener("click", () => {
    prom = prompt("please give a number between 1 and 100", "30");
if (prom > 100 || prom < 1) {
    prom = 30;
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

    shade.addEventListener("click", () => {
        content.addEventListener("mouseover", function( event ) {   
            var that = event.target;
            that.style.backgroundColor = "black";    
            if(parseFloat(that.style.opacity)) {
              that.style.opacity = parseFloat(that.style.opacity) + 0.1;
            } else {
              that.style.opacity = 0.2;
            }

        })
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

    shade.addEventListener("click", () => {
        content.addEventListener("mouseover", function( event ) {  
            let that = event.target;
            that.style.backgroundColor = "black";    
            if(parseFloat(that.style.opacity)) {
              that.style.opacity = parseFloat(that.style.opacity) + 0.1;
            } else {
              that.style.opacity = 0.1;
            }

        })
    });
}