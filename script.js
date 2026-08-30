const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

function setupTaskCheckbox(checkbox, taskElement) {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      setTimeout(() => {
        taskElement.remove();
      }, 3000);
    }
  });
}

document.querySelectorAll(".task").forEach((task) => {
  const checkbox = task.querySelector(".task-checkbox");
  if (checkbox) {
    setupTaskCheckbox(checkbox, task);
  }
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const newTask = document.createElement("li");
  newTask.className = "task";

  const uniqueId = "task-" + Date.now();

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = uniqueId;
  checkbox.className = "task-checkbox";

  const label = document.createElement("label");
  label.htmlFor = uniqueId;
  label.textContent = taskText;

  setupTaskCheckbox(checkbox, newTask);

  newTask.appendChild(checkbox);
  newTask.appendChild(label);
  taskList.appendChild(newTask);

  taskInput.value = "";
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});