const topLeft = document.querySelector('.item-1');
const topRight = document.querySelector('.item-2');
const bottomLeft = document.querySelector('.item-3');
const bottomRight = document.querySelector('.item-4');


//funcion aleatorio
function randomPanel(){
    const panels = [
        topLeft,
        topRight,
        bottomLeft,
        bottomRight
    ];
    return panels[Math.floor(Math.random() * panels.length)];
}

//cadena del panel
const sequences = [randomPanel()];
// declarar variable sTG copia de sequences
let sequenceToGuess = [...sequences];


//funcion de parpadeo
// const light=()=>{}
function light(panel){
    return new Promise(resolve => {
        panel.className += ' active';
        setTimeout(() => {
            panel.className = panel.className.replace(' active', 
            ''
            ); 
            setTimeout(() => {
                resolve();
            }, 250);
        }, 1000);
    });
}


let canClick = false;

const panelClicked = panelClicked => {
    if (!canClick) return;
    const expectedPanel = sequenceToGuess.shift();
    if (expectedPanel === panelClicked) {
        if (sequences.length < 10) {
            if (sequenceToGuess.length === 0){
                //start new round
                sequences.push(randomPanel());
                sequenceToGuess = [...sequences];
                startLighting();
            }
        }else {
            alert('(:');
        }
    }else {
        // end GAME
        alert('Game Over');
    }
}

//start the game light
const startLighting = async () => {
    canClick = false;
    for(let panel of sequences){
        await light(panel);
    }
    canClick = true;
};

startLighting();

