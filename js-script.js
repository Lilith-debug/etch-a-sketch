const container = document.createElement("div");
const body = document.querySelector("body");
body.appendChild(container);


for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.className = "row";
    container.appendChild(row);
    for (let i = 0; i < 16; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        row.appendChild(cell);
    }
}