const todoForm = document.querySelector('#todoForm');
const todoInput = document.querySelector('#todoInput');
const todoTable = document.querySelector('#todoTable');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let newTodo = document.createElement('div');
    let todoText = document.createElement('span');
    todoText.innerText = todoInput.value;
    let todoButton = document.createElement('button');
    todoButton.innerText = 'Mark as Done';
    todoButton.addEventListener('click', () => {
        todoText.style.textDecoration = 'line-through';
        todoButton.style.display = 'none';
    })
    newTodo.appendChild(todoText);
    newTodo.appendChild(todoButton);

    todoInput.value = '';
    let firstRowElement = document.createElement('td');
    firstRowElement.appendChild(todoText);
    let secondRowElement = document.createElement('td');
    secondRowElement.appendChild(todoButton);

    let tableRow = document.createElement('tr');
    tableRow.appendChild(firstRowElement);
    tableRow.appendChild(secondRowElement);
    todoTable.appendChild(tableRow);
})