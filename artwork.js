let artwork = document.getElementById('artwork');

let artButton = document.getElementById('artButton');

let artMatrix = [
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0
];

let acceptableColors = ['#C6C027','#27C670','#272DC6','#C6277D','#494839','#394940','#393A49','#493942'];

const getRandomColor = () => {
    let x = Math.floor(Math.random() * acceptableColors.length)
    return acceptableColors[x];
}


const randMatrix = (array) => {
   for (let i = 0; i < array.length; i++) {
       artwork.innerHTML += `<div id=box-${i} class='box'></div>`
    }


    for (let i = 0; i < array.length; i++) {
        array[i] = Math.round(Math.random() + 0.1);
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 1) {
            let box = document.getElementById(`box-${i}`);
            box.style.gridColumn = `${(i % 8) + 1} / span 1` ;
            box.style.gridRow = `${Math.floor(i / 8) + 1} / span 1` ;
            box.style.width = '100%' ;
            box.style.height = '100%' ;
            box.style.border = '0.13rem solid black';
            box.style.backgroundColor = `${getRandomColor()}` ;
            box.style.borderRadius = '3rem' ;
            box.style.boxShadow = '0 0 1rem black , 0 0 0.3rem #c6c027'
        }
    }
}

randMatrix(artMatrix);

artButton.onclick = function() {
    artMatrix = [
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0
    ];

    artwork.innerHTML = '';

    randMatrix(artMatrix);
}
