
let symmetry = 15;   

let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton;
let slider;

function setup() { 
  createCanvas(displayWidth, displayHeight);
  angleMode(DEGREES);
  background('lavender');


  

  clearButton = createButton('Clear');
  clearButton.mousePressed(clearScreen);

 
  fullscreenButton = createButton('Full Screen');
  fullscreenButton.mousePressed(screenFull);


  brushSizeSlider = createButton('Brush Size Slider');
  sizeSlider = createSlider(1, 32, 4, 0.1);

}

function clearScreen() {
  background('pink');
  
  
  
}


function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs);
  
}

function draw() {
  stroke('limegreen')
  
  
  translate(width / 2, height / 2);
  

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;
    
    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        let sw = sizeSlider.value();
        strokeWeight(sw);
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}




