export function addTask() {
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
