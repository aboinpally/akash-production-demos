const t0 = performance.now();

// Alejandro Campos Uribe
// ── Responsive canvas ──────────────────────────────────────────────────
// Fits the canvas to the browser window while preserving its aspect ratio.
function adjustCanvas(id) {
    let canvas = document.getElementById(id);
    canvas.style.maxWidth   = "100vw";
    canvas.style.maxHeight  = "100vh";
    canvas.style.width      = "auto";
    canvas.style.height     = "auto";
    canvas.style.objectFit  = "contain";
}

//////////////////////////////////////////////////

let palette = ["#7b4800", "#002185", "#003c32", "#fcd300", "#ff2702", "#6b9404"]



function setup () {
    let c = createCanvas(4200, 2000, WEBGL);
    c.id("main");
    adjustCanvas("main");
  
    brush.load()
    brush.scaleBrushes(8)
  
    angleMode(DEGREES)
    background("#fffceb")  
    
    //Vars
    let drawCycle = 0

    //Blocks
    function makeText (text, hVar, xAlt, y) {
        
        let fontSize = "h" + String(hVar);
        createText = createElement(fontSize, text);
        createText.position((screen.width / 2) + xAlt, y);
    }

    makeText("akas(h)", 1, -60, 100);
    makeText("production demos", 2, -109, 180);

   let a = createA("https://www.dropbox.com/scl/fo/mlw7yr4phoktycxjhan40/AHeBFZV19VGKbnv3glBHQ4Y&dl=0", "full access here");
   a.position(screen.width / 2 - 68 , 245);
    

}



function draw() {

    translate(-width/2,-height/2)
    //Random Brush Styles
    let brushTypes = brush.box();
    let brushFields = brush.listFields();
    brush.field(random(brushFields));
    brush.set(random(brushTypes), random(palette), 1)
    
    //Initial Drawing Loop
    if (frameCount < 60) {
        noStroke();
    brush.flowLine(random(width), random(height), random(10,600), random(0,360))
    
    }

  
}

