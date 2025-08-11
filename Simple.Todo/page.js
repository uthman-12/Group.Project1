const addBtn = document.getElementById('add-btn');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    function addTask() {
      const taskText = newTaskInput.value.trim();
      if (taskText === '') return;

      const li = document.createElement('li');
      li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete">X</button>
      `;

      // Toggle complete on click
      li.querySelector('span').addEventListener('click', () => {
        li.querySelector('span').classList.toggle('completed');
      });

      // Delete task
      li.querySelector('.delete').addEventListener('click', () => {
        li.remove();
      });

      taskList.appendChild(li);
      newTaskInput.value = '';
    }

    addBtn.addEventListener('click', addTask);
    newTaskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addTask();
    });