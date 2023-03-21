const container = document.getElementById('grid-container');

let number = 2;
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

let colorWell;
const defaultColor = "#0000ff";

window.addEventListener('load', startup, false);

function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener('input', updateFirst, false);
    colorWell.addEventListener('change', updateAll, false);
    colorWell.select();
}

function updateFirst(event) {
    const chooseColor = document.querySelector('#chooseColor');
    if (chooseColor) {
        chooseColor.style.backgroundColor = event.target.value;
    }
}

const gridItems = document.querySelectorAll('.row-column');
function updateAll(event) {
    gridItems.forEach((box) => {
        box.addEventListener('click', () => {
            box.style.backgroundColor = event.target.value;
        });
        //
    });
}

gridItems.forEach((box) => {
    box.addEventListener('click', () => {
        box.style.backgroundColor = defaultColor;
    });
});

//returns grid item to white background color
const erase = document.getElementById('erase');
const eraseText = document.getElementById('erase-text');
erase.addEventListener("click", () => {
    if (eraseText.textContent == 'Eraser Off') {
        eraseText.textContent = 'Eraser On';
        erase.appendChild(eraseText);
        gridItems.forEach((item) => {
            item.addEventListener("click", () => {
                item.style.backgroundColor = '#ffffff';
            });
        });
        
    } else {
        gridItems.forEach((item) => {
            item.addEventListener("click", () => {
                item.style.backgroundColor = colorWell.value;
            });
        });
        eraseText.textContent = 'Eraser Off';
        erase.appendChild(eraseText);
    }
})

//add EventListener to Clear Grid button
const clear = document.querySelector('#clearAll');
clear.addEventListener("click", () => {
    if(confirm('Are you sure you would like to clear grid?')) {
        gridItems.forEach((box) => {
            box.style.backgroundColor = '#ffffff';
        })
    }
});