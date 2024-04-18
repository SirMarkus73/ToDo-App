const form = document.querySelector("form-no-reload");

const formChildS = {
  inputText: form.querySelector("input"),
  button: form.querySelector("button"),
};

let tareas = document.getElementById("tareas");

formChildS.button.addEventListener("click", () => {
  let text = formChildS.inputText.value;
  console.log(text);

  if (text != "") {
    tareas.innerHTML += `<div class='flex flex-row gap-3 justify-between'"><p>${text}</p><button><i class='bx bx-task-x'></i></button></div>`;
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
