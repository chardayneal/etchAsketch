const container = document.getElementById('grid-container');

let number = 10;
for (let i = 0; i < number; i++) {
    let gridRow = document.createElement('div');
    gridRow.setAttribute('class', 'row');
    (container.appendChild(gridRow)* 6);
    
}

const rows = document.querySelectorAll('.row');
rows.forEach((row) => {
    for (let i = 0; i < number; i++) {
        let gridItem = document.createElement('div');
        gridItem.setAttribute('class', 'row-column')
        row.append(gridItem);
    }
});
