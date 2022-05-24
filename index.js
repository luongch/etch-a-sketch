createGrid = (size) => {
    let container = document.querySelector('.container');

    for(let i = 0; i<size; i++) {
        let row = createRow(size)
        container.appendChild(row);

    }
}

createRow = (size) => {
    let row = document.createElement('div');
    row.classList.add('row')

    for(let i = 0; i<size; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', function (e){
            onHover(e)
        });

        row.appendChild(square)
    }
    return row;
}

onHover = (e) => {
    e.target.classList.add("changed")
}

resetGrid = () => {
    let container = document.querySelector('.container');
    container.querySelectorAll('*').forEach(n => n.remove()); 
}

clearGrid = () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.classList.remove('changed');
    });
};

setGrid = (target) => {
    resetGrid();
    createGrid(target.value)
};

createGrid(16)