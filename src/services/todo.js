let showTasks = document.getElementById("tasks-container");

const getTasks = () => {
  return localStorage.getItem("tasks").split(",");
};

let localTasks = getTasks();

const updateTasks = (tasks) => {
  localStorage.setItem("tasks", tasks);
};

localTasks.forEach((task) => {
  addAppTask(task, false);
});

const form = document.querySelector("form");

const formChildS = {
  inputText: form.querySelector("input"),
  button: form.querySelector("button"),
};

formChildS.button.addEventListener("click", () => {
  let text = formChildS.inputText.value;

  addAppTask(text);
});

function addAppTask(taskText, append = true) {
  if (taskText != "") {
    showTasks.innerHTML += `<div class='flex flex-row gap-3 justify-between transition ease-in-out delay-75 dark:bg-dark-950 dark:hover:bg-dark-500 bg-bright-500 hover:bg-bright-850 hover:text-white hover:-translate-y-1 hover:scale-105 duration-300 border-2 border-slate-900'><p>${taskText}</p><button><i class='bx bx-task-x'></i></button></div>`;

    if (append) {
      localTasks.push(taskText);

      updateTasks(localTasks);
    }
  }

  update_remove();
}

function update_remove() {
  showTasks.querySelectorAll("div").forEach((tarea) => {
    let deleteButton = tarea.querySelector("button");
    let taskContent = tarea.querySelector("p");

    deleteButton.addEventListener("click", () => {
      tarea.remove();
      let index = localTasks.indexOf(taskContent.innerHTML);

      localTasks.splice(index, 1);

      updateTasks(localTasks);
    });
  });
}
