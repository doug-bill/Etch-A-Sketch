const body = document.querySelector("body");

const labels = document.createElement("div");
labels.classList.add("labels");
body.appendChild(labels);

const btn = document.createElement("button");
btn.classList.add("button");
btn.textContent = "Create new grid";
labels.appendChild(btn);89

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

btn.addEventListener("click", () => {

let newGrid = parseInt(window.prompt("Choose a grid size from 1 - 100:"));

  if(!isNaN(newGrid) && newGrid > 0 && newGrid <= 100  ){
     container.innerHTML = "";
     createGrid(newGrid);
     }    
    
});

createGrid(16);

let isDrawing = false;

container.addEventListener("mousedown" ,(event) => {

  isDrawing = true;
  if (event.target.classList.contains("col") && isDrawing == true) {
      event.target.style.backgroundColor = "turquoise"; 

  container.addEventListener("mouseover" , (event)=>{

   if (event.target.classList.contains("col") && isDrawing == true) {
      event.target.style.backgroundColor = "turquoise"; 
  } 
});
  

  } 
});


body.addEventListener("mouseup", event => {
    isDrawing = false;

});




  
/*   const cell = event.target;
  if (!cell.classList.contains("col")) return;

  cell.style.backgroundColor = "rgb(" +
    Math.floor(Math.random() * 255) + "," +
    Math.floor(Math.random() * 255) + "," +
    Math.floor(Math.random() * 255) + ")";
 */