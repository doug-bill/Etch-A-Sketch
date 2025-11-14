const body = document.querySelector("body");

const container = document.createElement("div");
container.classList.add("flex-container");
container.style.margin = "auto";
container.style.backgroundColor = "white";

body.appendChild(container);


function createDiv(num){

 for (let i = 0 ; i < num; i++){
        
  const col = document.createElement("div");
  col.classList.add("col");
  container.appendChild(col); 

    for (let j =0; j < num; j++){
      const row = document.createElement("div");
      row.classList.add("row");
      container.appendChild(row);
    }
  }

}

createDiv(2);
  
