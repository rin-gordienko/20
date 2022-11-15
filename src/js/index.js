"use strict";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import { addTask } from "./newTask";

const form = document.forms["task-form"];
const { input } = form;
const button = document.querySelector("button");
const list = document.getElementById("list");
const errorInfo = document.createElement("div");

function isEmptyField(field) {
  return field.value.trim().length === 0;
}


list.onchange = (event) => {
  const isAccepted = event.target.checked;
  const checkboxClass = event.target.classList.contains("checkbox");
  const task = event.target.parentNode;
  const button = task.querySelector("button");

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
  addTask(list, input);
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
