let prom = 30
let color = "black"
let isRainbow = false
let isShaded = false
let isFaded = false



const newGrid = document.querySelector("#newGrid")
newGrid.addEventListener("click", () => {
    prom = prompt("please give a number between 1 and 100", "30")
    if (prom > 100 || prom < 1) {
        prom = 30
    }
    const container = document.querySelector("#container")
    container.innerHTML = "" // Clear any existing grid

    createGrid(prom)
    isRainbow = false
    isShaded = false
    isFaded = false
    color = "black"
})

const eraser = document.getElementById("eraser")
eraser.addEventListener("click", () => {
    isRainbow = false
    isShaded = false
    isFaded = false
    color = "white"
})

const random = document.getElementById("rndm")
random.addEventListener("click", () => {
    isRainbow = true
    isShaded = false
    isFaded = false
})

const newColor = document.getElementById("newColor")
newColor.addEventListener("input", (event) => {
    isRainbow = false
    isShaded = false
    isFaded = false
    color = event.target.value
})

const shade = document.getElementById("shade")
shade.addEventListener("click", () => {
    isShaded = true
    isRainbow = false
    isFaded = false
})

const fade = document.querySelector("#fade")
fade.addEventListener("click", () => {
    isFaded = true
    isRainbow = true
    isShaded = false  
})

function rainbow() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

function removeColor(element){
    if (isFaded){
    let opacity = 1;

    const timer = setInterval(() => {
      if (opacity <= 0) {
        clearInterval(timer);
        element.style.display = "white";
        element.style.border = `${1 / 10}px solid black`
      } else {
        opacity -= 0.1;
        element.style.opacity = opacity;
        element.style.border = `${1 / 10}px solid black`
      }
    }, 100); // Adjust the interval to control the speed of the fade
    }
}


function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const content = document.createElement("div")
        content.style.cssText = "background: white"
        content.style.border = `${1 / 10}px solid black`
        content.style.width = `calc(700px / ${size})`
        content.style.height = `calc(700px / ${size})`
        content.style.aspectRatio = "1/1"
        content.style.boxSizing = "border-box"
        content.addEventListener("mouseover", () => {
            
            if (isShaded) {
                content.style.opacity = (parseFloat(content.style.opacity) || 0) + 0.1
            } else {
                content.style.opacity = 1
            }

            if (isRainbow) {
                color = rainbow()
            }

            if (isFaded) {
                content.addEventListener('mouseout', ()=> removeColor(content))
            }

            content.style.backgroundColor = color
        })
        container.appendChild(content)  
    }
}

createGrid(prom)