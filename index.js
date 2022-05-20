function initializeGrid()
{
    const container = document.getElementById('container');
    container.classList.add('container');

    for(let i = 0; i < 256; i++)
        document.body.append(document.createElement('div'));
}

initializeGrid();