# 🎨 Etch a Sketch — Interactive Drawing Grid

This project is a simple and interactive digital **Etch a Sketch**, where users can draw on a customizable grid by clicking and dragging the mouse.
Part of the curruculum of The Odin Project.

It is built using **HTML, CSS, and vanilla JavaScript**, with no external libraries.

---

## ✨ Features

- 🖌 **Draw Mode** — Paints cells in turquoise.
- 🌈 **Rainbow Mode** — Colors each cell with a random RGB value.
- 🩹 **Eraser Mode** — Restores cells to blueviolet.
- 🔁 **Reset Button** — Resets the grid back to the default 16×16 layout.
- 🧩 **Create New Grid** — Prompts the user to choose a grid size (1–100).
- 🖱 **Click-and-Drag Drawing** — Draw smoothly without repeated clicks.
- 🧑‍💻 **Footer with GitHub Link** — Includes a rotating GitHub logo animation.

---

## 📁 Project Structure

├── index.html # Main structure of the application
├── logic.js # Drawing logic and grid generation
└── style.css # Styling for layout, buttons, and colors


---

## 🚀 How to Run

No installation required.

Simply open the githubpage: https://doug-bill.github.io/Etch-A-Sketch/
in any modern browser (Chrome, Firefox, Edge, Brave, etc.).

---

## 🔧 How It Works

### 🧩 Grid Generation  
The function `createGrid(num)` builds a **num × num** grid by dynamically creating divs with the class `.col`.

### 🖌 Drawing Modes  
The active mode is stored in:

```js
let mode = "draw";

Mode options include:

- "draw"
- "erase"
- "rainbow"

🖱 Interaction Logic

Drawing works through the combination of:

mousedown
mouseover (only when mouse is pressed)
mouseup

Each mode changes the color applied to the target cell.

🎨 UI Overview

Minimalist interface focused on the drawing canvas.

Color palette includes turquoise, blueviolet, and tomato for hover effects.

Canvas has a classic square frame, giving a retro Etch a Sketch feel.

👨‍💻 Author

Developed by Doug-bill
🔗 GitHub: https://github.com/doug-bill


