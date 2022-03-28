const container = document.querySelector('.container')

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


        }

    }
}

createDrawingArea(48);