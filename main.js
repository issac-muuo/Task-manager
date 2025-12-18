import { createStore } from "./data/store.js";

const store = createStore({ tasks: [] });
document.get;
const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const undoBtn = document.getElementById("undo-btn");
const redoBtn = document.getElementById("redo-btn");
const list = document.getElementById("task-list");

function render() {
  const { tasks } = store.getState;

  list.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    list.appendChild(li);
  });
}
