const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
let todoList = document.querySelector(".todoList");
let deleteAllBtn = document.querySelector(".footer button")

inputBox.onkeyup = () => {
  let userData = inputBox.value;
  if(userData.trim() != 0){
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
}
showTasks();

addBtn.onclick = () => {
  let userData = inputBox.value;
  let getLocalStrorage = localStorage.getItem("New Todo");
  if(getLocalStrorage == null){
    listArr = [];
  } else {
    listArr = JSON.parse(getLocalStrorage);
  }
  listArr.push(userData);
  localStorage.setItem("New Todo", JSON.stringify(listArr));
  showTasks();
  addBtn.classList.remove("active");
}

function showTasks(){
   let getLocalStrorage = localStorage.getItem("New Todo");
   if(getLocalStrorage == null){
     listArr = [];
   } else {
     listArr = JSON.parse(getLocalStrorage);
   }
   const pendingNumb = document.querySelector(".pendingNumb");
   pendingNumb.textContent = listArr.length;
   let newliTag = '';
   listArr.forEach((element,index)=>{
     newliTag += `<li id="taskLi">${element}<button onclick="deleteTask(${index})" id = "del-btn">Delete</button></li>`;
   });
   todoList.innerHTML = newliTag;
   inputBox.value = "";
}

function deleteTask(index){
  let getLocalStrorage = localStorage.getItem("New Todo");
  listArr = JSON.parse(getLocalStrorage);
  listArr.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(listArr));
  showTasks();
}

deleteAllBtn.onclick = () => {
  listArr = [];
  localStorage.setItem("New Todo", JSON.stringify(listArr));
  showTasks();
}
