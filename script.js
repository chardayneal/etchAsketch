const container = document.getElementById('grid-container');

let number = 16;
for (let i = 0; i < number; i++) {
    let gridRow = document.createElement('div');
    gridRow.setAttribute('class', 'row');
    (container.appendChild(gridRow)* 6);
    
}

//display grid size
const input = document.querySelector('input');
input.setAttribute('value', `${number}`);
const sliderText = document.getElementById('sliderText');
sliderText.textContent = `${number} x ${number}`;


const rows = document.querySelectorAll('.row');
rows.forEach((row) => {
    for (let i = 0; i < number; i++) {
        let gridItem = document.createElement('div');
        gridItem.setAttribute('class', 'row-column')
        row.append(gridItem);
    }
});
