const body = document.querySelector("body");

const labels = document.createElement("div");
labels.classList.add("labels");
body.appendChild(labels);


const getGridSize = document.createElement("input");
getGridSize.classList.add("input");
labels.appendChild(getGridSize);

const btn = document.createElement("button");
btn.classList.add("button");
btn.textContent = "Create Grid";
labels.appendChild(btn);
 

const container = document.createElement("div");
container.classList.add("flex-container");
container.style.margin = "auto";
container.style.backgroundColor = "white";

body.appendChild(container);


function createGrid(num){

 for (let i = 0 ; i < num* num; i++){
        
  const col = document.createElement("div");
  col.classList.add("col");
  col.style.flexBasis = `${100 / num}%`;
  container.appendChild(col); 
      
  }

}

//const col = document.getElementsByClassName("col");
/*   

labels.addEventListener("click", () => {

  
  event.preventDefault();
 // container.removeChild(col);
  const grid = getGridSize.value;
  console.log(grid);
  getGridSize.value ='';
  createGrid(grid);
 

});
 */

createGrid(16);
   

