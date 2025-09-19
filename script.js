document.addEventListener('DOMContentLoaded', () => {
  console.log('Task Scheduler Ready ✅');

  const taskList = document.querySelector('.tasklist');
  const addTaskBtn = document.querySelector('.sub');
  const filterBtns = document.querySelectorAll('.para .btn');

  let tasks = new Map();   // store tasks with IDs
  let completed = new Set();
  let taskId = 0;
  let currentFilter = "taskAll"; // default filter
  const saveState = () => {
    // converted my map from an array to a string to save to local storage
    localStorage.setItem("task", JSON.stringify([...tasks]));
    localStorage.setItem("complete", JSON.stringify([...completed]));
    localStorage.setItem("taskId", taskId)
  }
 const loadState = () =>{
  // convert back to an array
    const saveTask = JSON.parse(localStorage.getItem("task") ||"[]");
    const saveComplete= JSON.parse(localStorage.getItem("complete") || "[]");
    taskId= Number(localStorage.getItem("taskId"));
    // convert array to map 
    tasks = new Map(saveTask); 
    // convert array to set
    completed= new Set(saveComplete);
 }
  // Add task
  addTaskBtn.addEventListener('click', e => {
    e.preventDefault(); // prevent form reload

    const title = document.getElementById('task-title').value.trim();
    const description = document.getElementById('task-text').value.trim();
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;

    if (!title || !description || !date || !priority) return;

    taskId++;
    tasks.set(taskId, { title, description, date, priority });
    renderTasks();
    saveState();

    // clear inputs
    document.getElementById("task-title").value = "";
    document.getElementById("task-text").value = "";
    document.getElementById("date").value = "";
    document.getElementById("priority").value = "Medium";
    
  });

  // Render tasks (with filtering)
  const renderTasks = () => {
    taskList.innerHTML = '';

    // Apply filter
    let filtered = [...tasks.entries()].filter(([id, task]) => {
      if (currentFilter === "Pending") return !completed.has(id);
      if (currentFilter === "completed") return completed.has(id);
      if (currentFilter === "prior") return task.priority === "High";
      return true; // "taskAll"
    });

    if (filtered.length === 0) {
      taskList.innerHTML = `
        <div class="empty">
          <i class="fas fa-clipboard-list"></i>
          <h3>No task yet</h3>
          <p>Add a new task to get started</p>
        </div>`;
      return;
    }

    filtered.forEach(([id, { title, description, date, priority }]) => {
      const taskItemDiv = document.createElement('div');
      taskItemDiv.classList.add('taskitem');
      if (completed.has(id)) taskItemDiv.style.opacity = '0.5';

  taskItemDiv.innerHTML = `
    <div class="blue" style="display: flex; flex-direction: column;  align-items: start;">
      <p style="display:flex; align-items:center; gap:10px; font-size:18px; color:black;">
      ${title} 
      <button class="btnns"style="padding:5px 20px; background:${priority === 'High' ? 'red' : priority === 'Medium' ?   'orange'  : 'green'}; color:white; border:none; border-radius:6px;">
        ${priority}
      </button>
     </p>
     <p style="color: grey;">${description}</p>
     <p class="name" style="color: grey;"><strong>Due:</strong> ${date}</p>
    </div>
      `;

      // Delete button
      const delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.classList.add('delBtn');
      delBtn.addEventListener('click', () => {
        tasks.delete(id);
        completed.delete(id);
        renderTasks();
        saveState();
      });

      // Complete button
      const completeBtn = document.createElement('button');
      // if the class having the id is completed show undo if its not show completed
      completeBtn.textContent = completed.has(id) ? 'Undo' : 'Complete';
      completeBtn.classList.add('completeBtn');
      completeBtn.addEventListener('click', () => {
        if (completed.has(id)) {
          completed.delete(id);
        } else {
          completed.add(id);
        }
        renderTasks();
        saveState();
      });
      const taskItem= document.createElement('div')
      taskItem.classList.add('taskit')
      taskItem.append(completeBtn, delBtn);
      taskItemDiv.appendChild(taskItem)
      taskList.appendChild(taskItemDiv);
    });
  };

  // Filter button logic
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      currentFilter = btn.dataset.filter; // update filter
      filterBtns.forEach((btn) =>btn.classList.remove('active'));
        btn.classList.add('active');
      renderTasks();
      saveState();
    });
  });
  loadState();
  renderTasks();
});
