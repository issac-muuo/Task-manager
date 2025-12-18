import { createStore } from "./data/store.js";

const store = createStore({ tasks: [] });

const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const undoBtn = document.getElementById("undo-btn");
const redoBtn = document.getElementById("redo-btn");
const list = document.getElementById("task-list");

function render() {
  const { tasks } = store.getState();

  list.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    list.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  if (!input.value.trim()) return;

  store.addTask(input.value);
  input.value = "";
  render();
});

undoBtn.addEventListener("click", () => {
  store.undo();
  render();
});

redoBtn.addEventListener("click",()=>{
  store.redo()
  render()
})