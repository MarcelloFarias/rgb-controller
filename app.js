let inputRed = document.querySelector('.input-red'),
    inputGreen = document.querySelector('.input-green'),
    inputBlue = document.querySelector('.input-blue'),
    redValue = document.querySelector('.output-red'),
    greenValue = document.querySelector('.output-green'),
    blueValue = document.querySelector('.output-blue'),
    colorOutput = document.querySelector('.output-container'),
    mainContainer = document.querySelector('main');

function setRandomValue() {
    return Math.floor(Math.random() * 255);
}

function init() {
    inputRed.value = setRandomValue();
    inputGreen.value = setRandomValue();
    inputBlue.value = setRandomValue();

    redValue.innerText = inputRed.value;
    greenValue.innerText = inputGreen.value;
    blueValue.innerText = inputBlue.value;

    let background = `rgb(${inputRed.value}, ${inputGreen.value}, ${inputBlue.value})`;
    
    colorOutput.style.background = background;
}

function updateValues(value, color) {
    if(color === 'red') {
        inputRed.value = value;
        redValue.innerText = value;
    }
    else if(color === 'green') {
        inputGreen.value = value;
        greenValue.innerText = value;
    }
    else if(color === 'blue') {
        inputBlue.value = value;
        blueValue.innerText = value;
    }
    else {
        return;
    }

    let background = `rgb(${inputRed.value}, ${inputGreen.value}, ${inputBlue.value})`;

    colorOutput.style.background = background;
}

window.onload = () => {
    init();
}

colorOutput.addEventListener('mouseenter', () => {
    let background = `rgb(${inputRed.value}, ${inputGreen.value}, ${inputBlue.value})`;

    mainContainer.style.background = background;
});

colorOutput.addEventListener('mouseout', () => {
    mainContainer.style.background = '#2C3333';
});