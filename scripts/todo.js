const todoList = [{
  name : 'make dinner' ,
  dueDate : '22-10-2003'
},{
  name : 'make lunch' ,
  dueDate : '19-09-2005'
}];

render ();

function render() {
  let todoListHTML = "";

  todoList.forEach(function(todoObject,index){
   
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `
    
    <div> ${name}</div>
    <div>${dueDate}</div>
    <button
    onclick="todoList.splice(${index} ,1);
    render ();"
    >Delete</button>`;


    todoListHTML += html;

  });

 
  document.querySelector(".todolist").innerHTML = todoListHTML;
}

function addTodo() {
  const input = document.querySelector(".input");
  const name = input.value;

  const dateInput = document.querySelector(".dueDate")
  const dueDate = dateInput.value;

 
  console.log(name);

  todoList.push({
    name : name ,
    dueDate : dueDate
  });

  
  input.value = "";
  render();
}
