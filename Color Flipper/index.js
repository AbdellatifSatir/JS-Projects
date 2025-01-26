const body = document.getElementsByTagName('body')[0]

function setColor(name){
    body.style.backgroundColor = name;
}

function randomColor(){
    // generate RGB color
    const red = Math.round(Math.random() * 255) 
    const green = Math.round(Math.random() * 255) 
    const blue = Math.round(Math.random() * 255) 

    // uses this colors to create a color to set the bg with
    const color = `rgb(${red},${green},${blue})`
    body.style.backgroundColor = color;
}