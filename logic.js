const body = document.querySelector("body");

const labels = document.createElement("div");
labels.classList.add("labels");
body.appendChild(labels);

const btn = document.createElement("button");
btn.classList.add("button");
btn.textContent = "Create grid";
labels.appendChild(btn);

const container = document.createElement("div");
container.classList.add("flex-container");
container.style.margin = "auto";
container.style.backgroundColor = "white";

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


console.log(newGrid)

  if(!isNaN(newGrid) && newGrid > 0 && newGrid <= 100  ){
  //  while (container.firstChild){
  //  container.removeChild(container.firstChild);
   //  }
   container.innerHTML = "";
     createGrid(newGrid);
  }    
});


createGrid(0);
   

