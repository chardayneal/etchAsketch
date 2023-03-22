const container = document.getElementById('grid-container');

// creates grid size
let number = 16;
for (let i = 0; i < number; i++) {
    let row = document.createElement('div');
    row.setAttribute('class', 'row');
    container.appendChild(row);
    
}
const rows = document.querySelectorAll('.row');
rows.forEach((row) => {
    for (let i = 0; i < number; i++) {
        let square = document.createElement('div');
        square.setAttribute('class', 'square')
        row.append(square);
    }
});

//display grid size on slider
const input = document.querySelector('input');
input.setAttribute('value', `${number}`);
const sliderText = document.getElementById('sliderText');
sliderText.textContent = `${number} x ${number}`;



let colorWell;
const defaultColor = "#000000";
window.addEventListener('load', startup, false);

function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener('change', updateAll, false);
    colorWell.select();
}

const squares = document.querySelectorAll('.square');
function updateAll(event) {
    squares.forEach((box) => {
        box.addEventListener('click', () => {
            box.style.backgroundColor = event.target.value;
        });
        //
    });
}

squares.forEach((box) => {
    box.addEventListener('click', () => {
        box.style.backgroundColor = defaultColor;
    });
});

//returns grid item to white background color
const eraser = document.getElementById('eraser');
eraser.addEventListener('click', () => {
    if (eraser.checked == true) {
        erase();
    } else if (rainbowColor.checked == true) {
        getRainbowColor();
    }else {
        getChosenColor();
    }
});

function erase() {
    squares.forEach((box) => {
        box.addEventListener("click", () => {
            box.style.backgroundColor = '#ffffff';
        });
    })
}

function getChosenColor() {
    squares.forEach((box) => {
        box.addEventListener("click", () => {
            box.style.backgroundColor = colorWell.value;
        });
    });
}

//add EventListener to Clear Grid button
const clear = document.querySelector('#clearAll');
clear.addEventListener("click", () => {
    if(confirm('Are you sure you would like to clear grid?')) {
        squares.forEach((box) => {
            box.style.backgroundColor = '#ffffff';
        })
    }
});

//rainbow color selector
const array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
function getRandomColor() {
    let randomColor = '#';
    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random()* array.length);
        randomColor += array[num];
    }
    return randomColor;
}

const rainbowColor = document.getElementById('rainbowColor');
rainbowColor.addEventListener("click", () => {
    if (rainbowColor.checked == true) {
        getRainbowColor();
    } else if (eraser.checked == true) {
        erase();
    }else {
        getChosenColor();
    }
});

function getRainbowColor() {
    squares.forEach((box) => {
        box.addEventListener('click', () => {
            box.style.backgroundColor = getRandomColor();
        });
    });
}