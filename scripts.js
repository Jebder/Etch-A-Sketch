function getPixelSize(gridSize){
    width = 450 / Math.sqrt(gridSize);
    height = 450 / Math.sqrt(gridSize);
return [width, height]
};

function getSize(){
    let size = prompt('Enter a pixel count < 100 and > 16.');
    while (size !== null && (size < 16 || size > 100)){
        alert('Number < 100 and > 16. Try again.');
        size = prompt('Enter a pixel count < 100 and > 16.');
    } return size;
};

function makeGrid(){
    // make grid
    for (i = 0; i < gridSize; i++){
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('pixel');
        gridDiv.style.cssText = `background: rgb(131, 131, 131); border: solid white .1px; width: ${width}px; height: ${height}px; box-sizing: border-box;`;
        sketch.appendChild(gridDiv);
    };

    // set listeners 
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => {
        pixel.style.background = "black"
    })
})
};

function removeOldGrid(){
    let pixels = document.querySelector('.sketch');
    while (pixels.firstChild) {
        pixels.removeChild(pixels.firstChild)
    }

};

function updateGridSize() {
    // get new grid size from user input
    const newSize = getSize();
    if (newSize !== null) { // if user didn't cancel the prompt
         // remove existing grid
        removeOldGrid();
        // update gridSize and pixel size variables
        gridSize = newSize**2;
        [width, height] = getPixelSize(gridSize);
        // create new grid
        makeGrid();
    } 
    // if new size is null, make the grid with old size.
    else {
        removeOldGrid();
        makeGrid();
    }
  }


// assign variables
let gridSize = 16; // 16 pixels by default
let sketch = document.querySelector('.sketch');
var [width, height] = getPixelSize(gridSize);

// construct grid with default size
makeGrid();

// size button
let sizeButton = document.querySelector('#sizeButton');
sizeButton.addEventListener('click', updateGridSize);

// reset button
let resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', () => {
    removeOldGrid();
    makeGrid();
});

