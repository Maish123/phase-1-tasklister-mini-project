document.addEventListener("DOMContentLoaded",function(){
  // your code here
  const toDoTask = document.querySelector("#new-task-description");
  const toDoForm = document.querySelector('#create-task-form');
  const newTaskUL = document.querySelector("#tasks");
  //console.log(toDoTask); to confirm we have captured new task description
 // console.log(toDoForm); to confirm we have captured new task form
 // console.log(newTaskUl); to confirm we have targeted the tasks ul, which we wil add new tasks to it

toDoForm.addEventListener("submit",createNewTask);
});

const createNewTask = function(event){
  event.preventDefault();
  const toDoTask = document.querySelector("#new-task-description");
  const newTask = document.createElement("li");
  newTask.textContent = toDoTask.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = function(task){
  document.getElementById("tasks").appendChild(task);
};

const editDiv = document.getElementById("main-content");

editDiv.style.background = "grey";
editDiv.style.height = "200 px";

const editBody = document.querySelector("body");

editBody.style.background = "#acf1a2";

const editHeading = document.querySelector("h1");
editHeading.innerHTML = "Maina's Task App";

const editToDoList = document.getElementById("list")




