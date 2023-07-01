let container = document.querySelector(".container")

let btn = document.querySelector("#btn")

let size = prompt("Enter grid size: ");

btn.addEventListener('click', () => {
    location.reload()
  });

function createGrid(size) {
    let grid = document.querySelector(".grid");
    if (!grid) {
        grid = document.createElement("div")
        grid.classList.add("grid")
    }
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div")
        row.classList.add("row")
        grid.appendChild(row)
        for (let j = 0; j < size; j++) {
            let col = document.createElement("div")
            col.classList.add("col")
    
            col.addEventListener(
            "mouseover",
            (event) => {
                // highlight the mouseover target
                event.target.style.backgroundColor = "orange";
            
            },
            false
            );
    
            row.appendChild(col)
        }
        
    }
}

createGrid(size)




