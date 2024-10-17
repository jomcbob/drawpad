let prom = 30
let color = "black"
let isRainbow = false
let isShaded = false

const newGrid = document.querySelector("#newGrid")
newGrid.addEventListener("click", () => {
    prom = prompt("please give a number between 1 and 100", "30")
    if (prom > 100 || prom < 1) {
        prom = 30
    }
    const container = document.querySelector("#container")
    container.innerHTML = "" // Clear any existing grid

    createGrid(prom)
});

const eraser = document.getElementById("eraser")
eraser.addEventListener("click", () => {
    isRainbow = false
    isShaded = false
    color = "white"
});

const random = document.getElementById("rndm")
random.addEventListener("click", () => {
    isRainbow = true
    isShaded = false
});

const newColor = document.getElementById("newColor")
newColor.addEventListener("input", (event) => {
    isRainbow = false
    isShaded = false
    color = event.target.value
});

const shade = document.getElementById("shade")
shade.addEventListener("click", () => {
    isShaded = true
    isRainbow = false
});

function rainbow() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const content = document.createElement("div")
        content.style.cssText = "background: white"
        content.style.border = '1px solid black'
        content.style.width = `calc(700px / ${size})`
        content.style.height = `calc(700px / ${size})`
        content.style.aspectRatio = "1/1"
        content.style.boxSizing = "border-box"
        content.addEventListener("mouseenter", (event) => {
            if (isShaded) {
                content.style.opacity = (parseFloat(content.style.opacity) || 0) + 0.1
            } else {
                content.style.opacity = 1
            }

            if (isRainbow) {
                color = rainbow()
            }

            content.style.backgroundColor = color
        })
        container.appendChild(content)  
    }
}

createGrid(prom)