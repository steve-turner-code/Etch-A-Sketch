const resetButton = document.querySelector('#reset');
const slider = document.querySelector('#mySlider')
const gridSizeLabel = document.getElementById('sliderValue')
console.log(slider);




function createTable (rows) {

const container = document.querySelector('.right-row');

//Set the number of rows in the css variable
let root = document.querySelector(':root');
root.style.setProperty('--num-rows', rows);


    for (i=0; i<rows*rows; i++) {
        const newGrid = document.createElement('div');
        newGrid.classList.add('grid-item');
        container.appendChild(newGrid);
}

addListeners();

}


function destroyTable (){
    const container = document.querySelector('.right-row');

    //delete any existing grid
    while (container.firstChild) {
        container.firstChild.remove();
    }

}


function addListeners () {
    const allGridItems = document.querySelectorAll('.grid-item');
    allGridItems.forEach(item => item.addEventListener('mouseover', changeColour));

}



function changeColour (e) {
    this.style.backgroundColor = 'black';    
}

function updateGridSizeLabel () {
    console.log('yes')
    gridSizeLabel.innerHTML = `${slider.valueAsNumber}x${slider.valueAsNumber}`
}



// Event Listeners
resetButton.addEventListener('click', () => {
    destroyTable();
    createTable(8);
});

slider.addEventListener('change', e => {
    console.log(e.target.valueAsNumber);
    console.log(e)
    destroyTable();
    createTable(e.target.valueAsNumber);

})

slider.addEventListener('input', updateGridSizeLabel);




createTable(8)