const container = document.querySelector("#container");
const chooseGridSideSize = document.querySelector("#chooseGridSideSize")

function inputGridSide() {

    let input = ''

    chooseGridSideSize.addEventListener("click", () => {
        while (container.firstChild) {
            container.removeChild(container.firstChild)
        }
        input = prompt("Enter squares per side. Accepts 100 max.");
        if (input < 101) {
            makeGrid(input);
        } else return
    })
    
}

function makeGrid (gridSide) {

    let boxSize = 960 / gridSide;

    for (let i = 0; i < (gridSide * gridSide); i++){

        const newBox = document.createElement("div");
        newBox.classList.add("box");
        newBox.style.backgroundColor = "white";
        newBox.style.border = "1px solid black";
        newBox.style.width = `${boxSize}px`;
        newBox.style.height = `${boxSize}px`;
        
        newBox.addEventListener("mouseenter", () => {
            let colorr = Math.floor(Math.random()* 255)
            let colorg = Math.floor(Math.random()* 255)
            let colorb = Math.floor(Math.random()* 255)
            newBox.style.backgroundColor = `rgb(${colorr}, ${colorg}, ${colorb})`;
        })
    
        newBox.addEventListener("mouseleave", () => {
            newBox.style.backgroundColor = "white";
        })



        container.appendChild(newBox);
    }

    
}




makeGrid(16);
inputGridSide()
