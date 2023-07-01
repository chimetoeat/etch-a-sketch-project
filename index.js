let grid = document.querySelector(".grid");



for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
    let box = document.createElement("div")
    box.classList.add("box")
    grid.appendChild(box)
    }
}
