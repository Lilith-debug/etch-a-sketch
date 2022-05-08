const body = document.querySelector("body");
const btn = document.createElement("button");
btn.textContent = "Submit"
body.appendChild(btn);

const container = document.createElement("div");
body.appendChild(container);
container.className = "container"

function createGrid(e) {  
    let gridSize = prompt("Please enter a grid size smaller than 100.");
    Number(gridSize);
    if (gridSize <= 100 && gridSize > 0) {
        let currentGrid = container.querySelectorAll(".row")
        for (let child of currentGrid) {
            container.removeChild(child)
        }
        for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
            row.className = "row";
            container.appendChild(row);
            for (let i = 0; i < gridSize; i++) {
                const cell = document.createElement("div");
                cell.className = "cell";
                cell.style.height = `${1324/gridSize}px`;
                cell.style.width = `${1024/gridSize}px;`
                row.appendChild(cell);
                cell.addEventListener("mouseenter", () => {
                    cell.style.backgroundColor = "black";
                })
            }
        }
    }
    else{
        alert("Please enter a number between 1 and 100.")
    }
}

btn.addEventListener("click", createGrid);