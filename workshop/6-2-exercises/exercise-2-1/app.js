// Exercise 2.1 - The GRID
// ------------

// Create a game board.
// The CSS will, for the most part, take care of itself
// as long as you assign the right classes to the cells.

// Objectives
// - set the size of the board to a square of 600px;
// - set a number of cells per row;
// - the cells should all be square.
// - cells should have a class of 'cell'
// - cells should have and id of 'cell-#'



//CREATING THE BOARD

let id = 0;
//FUNCTION TO BE CALLED ONLOAD
function createT(){
    let tbl = document.getElementById('tbl');
    
    //CREATES A LOOP FOR OUR ROWS
    for (let r = 0; r < 15; r++){
//CREATING ROWS//
        let row = document.createElement('tr');
//THIS LOOP DEALS WITH THE COLUMNS
    for (let c = 0; c < 15; c++){
    let cell = document.createElement('td');
    cell.width = '50px';
    cell.height = '15px';
    cell.id = id++;

// TO COLOR IN THE CELLS, USE MODULO OPERATOR TO COLOR EVERY EVEN BLOCK
    if (cell.id % 2 === 0){
        cell.style.backgroundColor = 'black';
    }
    row.appendChild(cell);
    cell.innerHTML = id;
    }
    tbl.appendChild(row);
}
console.log(tbl);
}