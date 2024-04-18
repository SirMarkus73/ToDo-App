const form = document.querySelector("form-no-reload");
let id_num = 0;

const formChildS = {
  inputText: form.querySelector("input"),
  button: form.querySelector("button"),
};

let tareas = document.getElementById("tareas");

formChildS.button.addEventListener("click", () => {
  let id = `todo-${id_num}`;
  let text = formChildS.inputText.value;
  console.log(text);

  if (text != "") {
    tareas.innerHTML += `<div class='flex flex-row gap-3 justify-between' id="${id}"><p>${text}</p><button><i class='bx bx-task-x'></i></button></div>`;
    id_num++;
  }

  update_remove();
});

function update_remove() {
  tareas.querySelectorAll("div").forEach((tarea) => {
    let deleteButton = tarea.querySelector("button");
    deleteButton.addEventListener("click", () => {
      tarea.remove();
    });
  });
}

update_remove();
