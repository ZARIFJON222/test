let todoCount = 0;
let doneCount = 0;

function addTask() {
  let input = document.getElementById("taskInput");
  let todoList = document.getElementById("todoList");

  if (input.value === "") return;
  let taskHtml = `
        <div style="background-color: #15101C; padding: 15px; border-radius: 10px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <span style="color: #9E78CF;">${input.value}</span>
            <div>
                <button onclick="completeTask(this)" style="background:none; border:none; color:#9E78CF; cursor:pointer;">✔️</button>
                <button onclick="this.parentElement.parentElement.remove(); updateCount();" style="background:none; border:none; color:#9E78CF; cursor:pointer;">🗑</button>
            </div>
        </div>`;

  todoList.innerHTML += taskHtml;
  input.value = "";
  updateCount();
}

function completeTask(btn) {
  let taskCard = btn.parentElement.parentElement;
  let taskText = taskCard.querySelector("span").innerText;
  let doneList = document.getElementById("doneList");

  doneList.innerHTML += `
        <div style="background-color: #15101C; padding: 15px; border-radius: 10px; margin-bottom: 10px;">
            <span style="color: #78CFB0; text-decoration: line-through;">${taskText}</span>
        </div>`;

  taskCard.remove();
  doneCount++;
  updateCount();
}
function updateCount() {
  document.getElementById("todoCount").innerText =
    document.getElementById("todoList").children.length;
  document.getElementById("doneCount").innerText =
    document.getElementById("doneList").children.length;
}
