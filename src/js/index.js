const $ = require("jquery");
// import addTask from "./addTask";
import "../css/style.css";

const form = document.forms["task-form"];
const { input } = form;
const button = document.querySelector("button");
const list = document.getElementById("list");
const errorInfo = document.createElement("div");

function isEmptyField(field) {
  return field.value.trim().length === 0;
}

function addTask() {
  const task = document.createElement("li");
  task.classList.add("task", "list-group-item");
  task.innerHTML = input.value;
  list.append(task);
  input.value = "";

  const btnDelete = document.createElement("button");
  btnDelete.innerHTML = "X";
  task.append(btnDelete);
  btnDelete.classList.add("btn-delete");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");
  task.prepend(checkbox);
}

list.onchange = (event) => {
  const isAccepted = event.target.checked;
  // const checkboxClass = event.target.className === "checkbox";
  const checkboxClass = event.target.classList.contains("checkbox");
  const task = event.target.parentNode;
  const button = task.querySelector("button");
  // const task = event.target.closest(".task");

  if (isAccepted && checkboxClass) {
    event.target.disabled = true;
    button.disabled = true;
    task.style.textDecoration = "line-through grey";
  }
};

form.onsubmit = (event) => {
  event.preventDefault();
  if (isEmptyField(input)) {
    input.classList.add("error");
    errorInfo.classList.add("error-text");
    errorInfo.innerHTML = "Please enter valid info";
    form.append(errorInfo);
    return;
  }
  addTask();
};

input.oninput = () => {
  const isErrorField = input.classList.contains("error");
  if (isErrorField) {
    input.classList.remove("error");
    errorInfo.classList.remove("error-text");
    errorInfo.innerHTML = "";
  }
};

list.onclick = (event) => {
  if (event.target.className === "btn-delete") {
    event.target.parentNode.remove();
  }
};
