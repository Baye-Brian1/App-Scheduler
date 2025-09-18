document.addEventListener('DOMContentLoaded', ()=> {
const taskList=document.querySelector('.schedule');

 const addTaskBtn= document.querySelector('.sub');
 const container= document.querySelector('.tasks');
 let taskLog=[];
 addTaskBtn.addEventListener('submit', ()=>{
  const title= document.getElementById('task-title').value;
  const description= document.getElementById('task-text').value;
  const Date= document.getElementById('date').value;
  const Priority= document.getElementById('priority').value;
  if (!title || !description || !Date || !Priority) return
  taskLog.push({title, description, Date, Priority})
  addTaskBtn();
  document.querySelector('#task-title').value;
   document.querySelector('#task-text').value;
    document.querySelector('#date').value;
     document.querySelector('#priority').value;
 });
 function addTask() {
  taskList.innerHTML='';

  taskLog.map((item, index) =>{
    const taskItemDiv= document.createElement('div');
    taskItemDiv.classList.add('taskitem');
    const tasktext= document.createElement('p')
    tasktext.innerHTML=
    `<p style="">${item.title} <button>${item.Priority}</button></p>
    ${item.description}
    ${item.Date}
    `
  })
//    taskLog.forEach((item, idx) => {
//     const taskItemDiv = document.createElement('div');
//     taskItemDiv.classList.add('task-item');
//     const checkit= document.createElement('div');
//     checkit.classList.add('checkit');
//     const checkBox=document.createElement('input');
//     checkBox.type='checkbox';
//     checkBox.classList.add('check');
//     checkBox.onchange= function() {
//       if (checkBox.checked) {
//         taskItemDiv.style.opacity='0.5';
//         taskItemDiv.style.textDecoration='line-through'
//       } else {
//          taskItemDiv.style.opacity='1';
//         taskItemDiv.style.textDecoration='none'
//       };
//     }
//     const tasktext= document.createElement('p');
//     tasktext.innerHTML = `[${item.taskDate}]  ${item.Task} at ${item.taskTime}`;
//     checkit.appendChild(checkBox);
//     checkit.appendChild(tasktext);
//     const delBtn = document.createElement('button');
//     delBtn.textContent = 'Delete';
//     delBtn.classList.add('del')
//     delBtn.onclick = function() {
//      taskLog.splice(idx, 1);
//        localStorage.setItem('tasks', JSON.stringify(taskLog)) 
//       renderTasks();
//     };
      
//       taskItemDiv.appendChild(checkit);
//       taskItemDiv.appendChild(delBtn);
//       taskLoging.appendChild(taskItemDiv);
//   });

//  }
});
