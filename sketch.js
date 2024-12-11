const container = document.querySelector("#container");



function makeGrid (gridSide) {

    let boxSize = 960 / gridSide;
    console.log(boxSize)

    for (let i = 0; i < (gridSide * gridSide); i++){

        const newBox = document.createElement("div");
        newBox.classList.add("box");
        newBox.style.backgroundColor = "white";
        newBox.style.border = "1px solid black";
        newBox.style.width = `${boxSize}px`;
        newBox.style.height = `${boxSize}px`;
        
        newBox.addEventListener("mouseenter", () => {
            newBox.style.backgroundColor = "black";
        })
    
        newBox.addEventListener("mouseleave", () => {
            newBox.style.backgroundColor = "white";
        })



        container.appendChild(newBox);

        
    }

    
}




makeGrid(77);