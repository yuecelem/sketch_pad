const container = document.querySelector("#container");



function makeGrid (gridSide) {

    let boxSize = 960 / gridSide;
    console.log(boxSize)
    for (let i = 0; i < (gridSide * gridSide); i++){

        const newBox = document.createElement("div");
        // newBox.classList.add("box");
        newBox.style.border = "1px solid black";
        newBox.style.width = `${boxSize}px`;
        newBox.style.height = `${boxSize}px`;
        container.appendChild(newBox);

    }
}

makeGrid(77);