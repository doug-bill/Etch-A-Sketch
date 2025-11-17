let isDrawing = false;
let isErasing = false;
let isMouseDown = false;

let mode = "draw";

const body = document.querySelector("body");


const labels = document.createElement("div");
labels.classList.add("labels");
body.appendChild(labels);

const gridBtn = document.createElement("button");
gridBtn.classList.add("button");
gridBtn.textContent = "Create new grid";
labels.appendChild(gridBtn);

const p = document.createElement("p");
p.classList.add("p");
p.textContent = "Modes: ";
labels.appendChild(p);

const drawBtn = document.createElement("button");
drawBtn.classList.add("button");
drawBtn.textContent = "Draw";
labels.appendChild(drawBtn);

const eraserBtn = document.createElement("button");
eraserBtn.classList.add("button");
eraserBtn.textContent = "Eraser";
labels.appendChild(eraserBtn);

const rainbowBtn = document.createElement("button");
rainbowBtn.classList.add("button");
rainbowBtn.textContent = "Rainbow";
labels.appendChild(rainbowBtn);

/* const darkenBtn = document.createElement("button");
darkenBtn.classList.add("button");
darkenBtn.textContent = "Darken";
labels.appendChild(darkenBtn); */

const resetBtn = document.createElement("button");
resetBtn.classList.add("button");
resetBtn.textContent = "Reset";
labels.appendChild(resetBtn);

const container = document.createElement("div");
container.classList.add("flex-container");
container.style.margin = "auto";
body.appendChild(container);


function createGrid(num){

 for (let i = 0 ; i < num* num; i++){
  
  const cell = document.createElement("div");
  cell.classList.add("col");
  cell.style.flexBasis = `${100 / num}%`; 
  container.appendChild(cell);     
  }
}

gridBtn.addEventListener("click", () => {

let newGrid = parseInt(window.prompt("Choose a grid size from 1 - 100:"));

  if(!isNaN(newGrid) && newGrid > 0 && newGrid <= 100  ){
     container.innerHTML = "";
     createGrid(newGrid);
     }    
    
});

createGrid(16);


// Drawing/Erasing/Painting Logic -----------

drawBtn.addEventListener("click", () => {
  mode = "draw";
});

eraserBtn.addEventListener("click", () => {
  mode = "erase";
});

rainbowBtn.addEventListener("click",() =>{
  mode = "rainbow";
});

/* darkenBtn.addEventListener("click", () => {
  mode = "darken";
  LightenDarkenColor("40e0d0", -10);
  console.log(LightenDarkenColor("40e0d0", -10));
});
 */
resetBtn.addEventListener("click",() => {

container.innerHTML = "";
createGrid(16);

});

container.addEventListener("mousedown" ,(event) => {

 isMouseDown = true;

   if (!event.target.classList.contains("col")) return;

    if(mode === "draw"){
      event.target.style.backgroundColor ="turquoise";
    }

    else if(mode === "rainbow"){
    event.target.style.backgroundColor = "rgb(" +
    Math.floor(Math.random() * 255) + "," +
    Math.floor(Math.random() * 255) + "," +
    Math.floor(Math.random() * 255) + ")";

    }/* 
    else if (mode === "darken"){
    const newColor = LightenDarkenColor("40e0d0", -10);
      event.target.style.backgroundColor = "#"+ {newColor};

    } */

    else if(mode === "erase"){
      event.target.style.backgroundColor ="blueviolet";
    }
});


body.addEventListener("mouseup", event => {
    isMouseDown = false;
});


 container.addEventListener("mouseover" , (event)=>{

  if(!isMouseDown) return;
  if(!event.target.classList.contains("col")) return;
  
  if (mode === "draw"){
     event.target.style.backgroundColor = "turquoise";
  }
  else if(mode === "rainbow"){

    event.target.style.backgroundColor = "rgb(" +
    Math.floor(Math.random() * 255) + "," +
    Math.floor(Math.random() * 255) + "," +
    Math.floor(Math.random() * 255) + ")";
  }

  else if (mode === "erase"){
   event.target.style.backgroundColor = "blueviolet"; 
  }

});

// FOOTER with github link

const footer = document.createElement("footer");
footer.classList.add("footer");
footer.classList.add("a");
footer.href = "https://github.com/doug-bill";
footer.textContent = "Developed by Doug-bill";
body.appendChild(footer);


const githubLink = document.createElement("a");
githubLink.href = "https://github.com/doug-bill";
githubLink.target = "_blank"; 
githubLink.rel = "noopener noreferrer";

// Logo do GitHub
const githubLogo = document.createElement("img");
githubLogo.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";
githubLogo.alt = "GitHub Logo";
githubLogo.classList.add("github-logo");

githubLink.appendChild(githubLogo);
footer.appendChild(githubLink);

