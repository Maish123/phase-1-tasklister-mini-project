document.addEventListener("DOMContentLoaded",function(){
  // your code here
  const toDoTask = document.querySelector("#new-task-description");
  const toDoForm = document.querySelector('#create-task-form');
  const newTaskUL = document.querySelector("#tasks");
  //we have grabbed the necessaryelements for us to edit
  //check on them by console.log(name);
 toDoForm.addEventListener("submit",createNewTask);
 //we add the event listener to the toDoForm because the whole form has the id of #create-task-form.
 //so even when we press the  new task icon, the button, which performs a submit event will trigger a function of 
 //creatng a new task
});

function createNewTask(event){
  event.preventDefault();
  const toDoTask = document.querySelector("#new-task-description");
  const newTask = document.createElement("p");//=> creates element where i store in my data/tasks
  const btn = document.createElement('button')
  btn.textContent = 'X'
  btn.className = ("cross");
  newTask.appendChild(btn);
  newTask.innerHTML = toDoTask.value; //=> makes sure the string passed to the <li> will be the same as the value field with an id of #new-task-description"

  appendTask(newTask); //=> makes the <li> a parent of the <ul> with an id of #tasks 
  event.target.reset(); //=> makes sure the value we put in doesnt remain logged into the toDoTask section;
};

function appendTask(task){
  document.querySelector("#tasks").appendChild(task); //=> function that makes any element passed in the <ul> identified by #tasks be a child node to it.
};

const editBody = document.querySelector("body");

editBody.style.background = "#acf1a2";

const editHeading = document.querySelector("h1");
editHeading.innerHTML = "Maina's Task App";

const editToDoList = document.getElementById("list")









