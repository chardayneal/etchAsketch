const container = document.getElementById('grid-container');
let number;
//nodelist
let tiles;


// D E F A U L T   G R I D   S I Z E
getGrid(16);
function getGrid(num) {
    container.setAttribute('onmouseenter', 'colorGrid()');
    for (let i = 0; i < num; i++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        container.appendChild(row);
        
    }
    const rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        for (let i = 0; i < num; i++) {
            let square = document.createElement('div');
            square.setAttribute('class', 'square')
            row.append(square);
        }
    });
    number = num;
}

//update nodelist
const squares = document.querySelectorAll('.square');
tiles = squares;


//  S L I D E R   &   T E X T
const input = document.querySelector('input');
input.setAttribute('value', `${number}`);
const sliderText = document.getElementById('sliderText');
sliderText.textContent = `${number} x ${number}`;

//addEventListener for slider
input.addEventListener('change', () => {
    removeChildren(container);
    getGrid(Number(`${input.value}`));
    sliderText.textContent = `${input.value} x ${input.value}`;
    const tile = document.querySelectorAll('.square');
    tiles = tile;
});

function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
}


//  C O L O R   G R I D
container.setAttribute('onmouseenter', 'colorGrid()');

function colorGrid() {
    tiles.forEach((square) => {
        square.addEventListener('mouseover', updateAll)
    });
}


//  C H O O S E   C O L O R   P I C K E R   
let colorWell;
const defaultColor = "#000000";

window.addEventListener('load', startup, false);

function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener('change', updateAll, false);
    colorWell.select();
}

function updateAll() {
    if (eraser.checked == false) {
        if (rainbowColor.checked == false){
            getChosenColor();
        } else {
            getRainbowColor();
        }
    } else {
        erase();
    }
}

//retrieves color from color picker
function getChosenColor() {
    tiles.forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = colorWell.value;
        });
    });
}


//  R A I N B O W    C H E C K B O X
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

// colors rainbow color
function getRainbowColor() {
    tiles.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = getRandomColor();
        });
    });
}


//  E R A S E R   C H E C K B O X
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

//erases tile
function erase() {
    tiles.forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = '#ffffff';
        });
    })
}

//  C L E A R   G R I D   B U T T O N
const clear = document.querySelector('#clearAll');
clear.addEventListener("click", () => {
    if(confirm('Are you sure you would like to clear grid?')) {
        tiles.forEach((tile) => {
            tile.style.backgroundColor = '#ffffff';
        });
    }
});