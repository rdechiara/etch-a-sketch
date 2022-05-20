let gridSize = 16;

function setGridSize()
{
    document.getElementById('container').innerHTML = '';
    do {
        gridSize = Number(prompt('Grid size (<= 100): ', '16'));
    }
    while(gridSize > 100 || isNaN(gridSize));
    initializeGrid();
}
function initializeGrid()
{
    const container = document.getElementById('container');
    container.classList.add('container');

    for(let i = 0; i < gridSize; i++)
    {
        let row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < gridSize; j++)
        {
            let cell = document.createElement('div');
            cell.style.background =  `rgb(0, 0, 0)`;
            cell.onmouseover = function  (e) {
                e.target.style.background = `rgb(${255 * Math.random()}, ${255 * Math.random()}, ${255 * Math.random()})`;
            };
            row.append(cell);
        }

        container.append(row);
    }
}
