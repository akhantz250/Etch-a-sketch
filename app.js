//variables
const container = document.querySelector('.container')
const clearBtn = document.querySelector('.remove');
const blackBtn = document.querySelector('.black');
const rainbowBtn = document.querySelector('.rainbow');
const grid16 = document.querySelector('.grid16');
const grid32 = document.querySelector('.grid32');
const grid64 = document.querySelector('.grid64');
const colorBtn = document.querySelector('.color');
const colorPicker = document.querySelector('.colorpicker');

let brushColor = 'black';
let currentColor = '#FF0000';
let currentGrid = 16;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//creates the drawing grid specified by the size
function createDrawingArea(size){
    for(let i = 0; i < size; i++){
        const newRow = document.createElement('div');
        newRow.classList.add('rows');
        container.appendChild(newRow);
        for(let j = 0; j < size; j++){
            const newSquare = document.createElement('div');
            newSquare.classList.add('squares');
            newSquare.addEventListener('mouseover',(e) => draw(e));
            newSquare.addEventListener('mousedown',(e) => draw(e));
            newRow.appendChild(newSquare);
        }
    }
}

function clearDrawing(){
    const allSquares = document.querySelectorAll('.squares');
    allSquares.forEach(sq => sq.style.backgroundColor = 'white');
}

//starting grid 
createDrawingArea(16);

//draw with brush color

function draw(e){
    if(e.type === 'mouseover' && !mouseDown) return;
    if(brushColor === 'black'){
        e.target.style.backgroundColor = 'black';
    }else if(brushColor === 'rainbow'){
        e.target.style.backgroundColor = rainbow();}
    else if(brushColor === 'color'){
        e.target.style.backgroundColor = currentColor;
    }
}

blackBtn.addEventListener('click',(e) => {brushColor ='black';
colorSelected(e);});
rainbowBtn.addEventListener('click',(e) => {brushColor = 'rainbow';
colorSelected(e);});
colorBtn.addEventListener('click', (e) => {brushColor = 'color';
colorSelected(e);})
colorPicker.onchange = (e) => currentColor = e.target.value;
clearBtn.addEventListener("click",(e) => clearDrawing())

//generates a random color of the rainbow
function rainbow(){
    randInt = Math.floor((Math.random() * 7) + 1);
    switch(randInt){
        case 1:
            return 'red';
        case 2: 
            return 'orange';
        case 3:
            return 'yellow';
        case 4:
            return 'green';
        case 5:
            return 'blue';
        case 6:
            return 'indigo';
        case 7:
            return 'violet';
        
    }
}

//add grid size options which removes all squares in the container and draws a new grid with a new size

grid16.addEventListener('click',(e) => changeGridSize(16,e));
grid32.addEventListener('click', (e) => changeGridSize(32,e));
grid64.addEventListener('click', (e) => changeGridSize(64,e));

function changeGridSize(size, e){
    gridSelected(e);
    const rows = document.querySelectorAll('.rows');
    rows.forEach((row) => container.removeChild(row));
    createDrawingArea(size);
}

//selected btn

function colorSelected(e){
    let selectedBtn = document.querySelector('.brush.selected');
    selectedBtn.classList.remove('selected');
    e.target.classList.add('selected')
}

function gridSelected(e){
    let selectedBtn = document.querySelector('.grid.selected');
    selectedBtn.classList.remove('selected');
    e.target.classList.add('selected');

}