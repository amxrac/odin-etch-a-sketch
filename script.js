// set prompt value to be less than 100 etc
const container = document.querySelector('.container');
const resetBtn = document.querySelector('.reset');
let promptValue;

if (!promptValue) {
    container.style.gridTemplateColumns = 'repeat(16,1fr)';
    container.style.gridTemplateRows = 'repeat(16,1fr)';
    for (let i=1; i<=(16**2); i++) {
        let box = document.createElement('div');
        box.style.background = 'violet';
        box.style.border = '1px solid pink';
        box.addEventListener('mouseover', () => {
            box.style.background = 'pink';
        });
        
        container.appendChild(box);
    }
}

// delete boxes
function deleteChildren() {
    let child = container.lastElementChild;
    while(child) {
        container.removeChild(child);
        child = container.lastElementChild;
    };
};


// get user prompt
function enterPrompt() {
    promptValue = prompt('how many boxes do you want?');
    while (isNaN(promptValue) || promptValue > 100 || promptValue < 0) {
        promptValue = prompt('enter a valid number less than 100')
    }
    return promptValue;
}

resetBtn.addEventListener('click', () => {
    enterPrompt();
    deleteChildren();
    container.style.gridTemplateColumns = `repeat(${promptValue}, 1fr)`;
     container.style.gridTemplateRows = `repeat(${promptValue}, 1fr)`; 
     for (let i=1; i<=(promptValue**2); i++) {
        let box = document.createElement('div');
        box.style.background = 'violet';
        box.style.border = '1px solid pink';
        box.addEventListener('mouseover', () => {
            box.style.background = 'pink';
        });
        
        container.appendChild(box);
    }
});

