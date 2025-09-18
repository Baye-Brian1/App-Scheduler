// document.addEventListener('DOMContentLoaded', () => {
//   console.log('Task Scheduler Ready ✅');

//   const taskList = document.querySelector('.tasklist');
//   const addTaskBtn = document.querySelector('.sub');
//   const filterBtns = document.querySelectorAll('.para .btn');

//   let tasks = new Map();   // store tasks with IDs
//   let completed = new Set();
//   let taskId = 0;
//   let currentFilter = "taskAll"; // default filter

//   // Add task
//   addTaskBtn.addEventListener('click', e => {
//     e.preventDefault(); // prevent form reload

//     const title = document.getElementById('task-title').value.trim();
//     const description = document.getElementById('task-text').value.trim();
//     const date = document.getElementById('date').value;
//     const priority = document.getElementById('priority').value;

//     if (!title || !description || !date || !priority) return;

//     taskId++;
//     tasks.set(taskId, { title, description, date, priority });
//     renderTasks();

//     // clear inputs
//     ['task-title', 'task-text', 'date', 'priority'].forEach(id => 
//       document.getElementById(id).value = ''
//     );
//   });

//   // Render tasks (with filtering)
//   const renderTasks = () => {
//     taskList.innerHTML = '';

//     // Apply filter
//     let filtered = [...tasks.entries()].filter(([id, task]) => {
//       if (currentFilter === "Pending") return !completed.has(id);
//       if (currentFilter === "completed") return completed.has(id);
//       if (currentFilter === "prior") return task.priority === "High";
//       return true; // "taskAll"
//     });

//     if (filtered.length === 0) {
//       taskList.innerHTML = `
//         <div class="empty">
//           <i class="fas fa-clipboard-list"></i>
//           <h3>No task yet</h3>
//           <p>Add a new task to get started</p>
//         </div>`;
//       return;
//     }

//     filtered.forEach(([id, { title, description, date, priority }]) => {
//       const taskItemDiv = document.createElement('div');
//       taskItemDiv.classList.add('taskitem');
//       if (completed.has(id)) taskItemDiv.style.opacity = '0.5';

//       taskItemDiv.innerHTML = `
//         <p style="display:flex; align-items:center; gap:10px; font-size:18px; color:black;">
//           ${title} 
//           <button style="padding:6px 12px; background:${priority === 'High' ? 'red' : priority === 'Medium' ? 'orange' : 'green'}; color:white; border:none; border-radius:6px;">
//             ${priority}
//           </button>
//         </p>
//         <p>${description}</p>
//         <p><strong>Due:</strong> ${date}</p>
//       `;

//       // Delete button
//       const delBtn = document.createElement('button');
//       delBtn.textContent = 'Delete';
//       delBtn.classList.add('delBtn');
//       delBtn.addEventListener('click', () => {
//         tasks.delete(id);
//         completed.delete(id);
//         renderTasks();
//       });

//       // Complete button
//       const completeBtn = document.createElement('button');
//       completeBtn.textContent = completed.has(id) ? 'Undo' : 'Complete';
//       completeBtn.classList.add('completeBtn');
//       completeBtn.addEventListener('click', () => {
//         if (completed.has(id)) {
//           completed.delete(id);
//         } else {
//           completed.add(id);
//         }
//         renderTasks();
//       });

//       taskItemDiv.append(completeBtn, delBtn);
//       taskList.appendChild(taskItemDiv);
//     });
//   };

//   // Filter button logic
//   filterBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//       currentFilter = btn.dataset.filter; // update filter
//       renderTasks();
//     });
//   });
// });


document.addEventListener('DOMContentLoaded', ()=>{
const taskList= document.querySelector('.tasklist')
const addTaskBtn= document.querySelector(".sub")
const filterBtn= document. querySelectorAll('.btn')
//  maps has a key=id and a value=object
let tasks= new Map();
// stores id
let completed= new Set();
let taskId=0
let currrentFilter="taskAll"
addTaskBtn.addEventListener('click', e=>{
  // prevents the submit button in the form from submitting a form
  e.preventDefault 
})
})