//variables
const container = document.querySelector('.container')
const clearBtn = document.querySelector('.remove');
const blackBtn = document.querySelector('.black');
const rainbowBtn = document.querySelector('.rainbow');
const grid16 = document.querySelector('.grid16');
const grid32 = document.querySelector('.grid32');
const grid64 = document.querySelector('.grid64');

let brushColor = 'black';

//creates the drawing grid specified by the size
function createDrawingArea(size){
    for(let i = 0; i < size; i++){
        const newRow = document.createElement('div');
        newRow.classList.add('rows');
        container.appendChild(newRow);
        for(let j = 0; j < size; j++){
            const newSquare = document.createElement('div');
            newSquare.classList.add('squares');
            newRow.appendChild(newSquare);
            newSquare.addEventListener('mouseover',(e) => {if(e.buttons == 1)
                brush(e)});
        }
    }
}

function clearDrawing(){
    const allSquares = document.querySelectorAll('.squares');
    allSquares.forEach(sq => sq.style.backgroundColor = 'white');
}

//starting grid 
createDrawingArea(16);

clearBtn.addEventListener("click",() => clearDrawing())

//changes brush color

function brush(e){
    if(brushColor === 'black'){
        e.target.style.backgroundColor = 'black';
    }else if(brushColor === 'rainbow'){
        e.target.style.backgroundColor = rainbow();
    }
}

blackBtn.addEventListener('click',() => brushColor ='black');
rainbowBtn.addEventListener('click',() => brushColor = 'rainbow');

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

grid16.addEventListener('click',() => changeGridSize(16));
grid32.addEventListener('click', () => changeGridSize(32));
grid64.addEventListener('click', () => changeGridSize(64));

function changeGridSize(size){
    const rows = document.querySelectorAll('.rows');
    rows.forEach((row) => container.removeChild(row));
    createDrawingArea(size);
    
}
