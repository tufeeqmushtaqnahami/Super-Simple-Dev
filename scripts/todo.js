const todoList = ["helo", "ratatata"];

render ();

function render() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector(".todolist").innerHTML = todoListHTML;
}

function addTodo() {
  const input = document.querySelector(".input");

  const name = input.value;
  console.log(name);

  todoList.push(name);

  console.log(todoList);
  input.value = "";
  render();
}
