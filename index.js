function initializeGrid()
{
    const container = document.getElementById('container');
    container.classList.add('container');

    for(let i = 0; i < 16; i++)
    {
        let row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < 16; j++)
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

initializeGrid();