const form = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const dateInput = document.getElementById('task-date');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  addTask(taskInput.value, dateInput.value);
  taskInput.value = '';
  dateInput.value = '';
});

function addTask(taskText, taskDate) {
  const li = document.createElement('li');

  const text = document.createElement('span');
  text.textContent = `${taskText} (Due: ${new Date(taskDate).toLocaleString()})`;
  text.className = 'task-text';

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.onclick = () => {
    const newText = prompt('Edit task:', taskText);
    const newDate = prompt('Edit date/time (YYYY-MM-DDTHH:MM):', taskDate);
    if (newText && newDate) {
      taskText = newText;
      taskDate = newDate;
      text.textContent = `${taskText} (Due: ${new Date(taskDate).toLocaleString()})`;
    }
  };

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✓';
  completeBtn.onclick = () => text.classList.toggle('completed');

  const delBtn = document.createElement('button');
  delBtn.textContent = '✗';
  delBtn.onclick = () => li.remove();

  li.appendChild(text);
  li.appendChild(editBtn);
  li.appendChild(completeBtn);
  li.appendChild(delBtn);

  taskList.appendChild(li);
}
