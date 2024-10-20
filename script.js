const todoForm = document.querySelector('#todoForm');
const todoInputTitle = document.querySelector('#todoInputTitle');
const todoInputDesc = document.querySelector('#todoInputDesc');
const todoTable = document.querySelector('#todoTable');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let newTodo = document.createElement('div');
    let todoTitle = document.createElement('span');
    let todoDesc = document.createElement('span');
    todoTitle.innerText = todoInputTitle.value;
    todoDesc.innerText = todoInputDesc.value;
    todoDesc.style.color = '#777';
    let todoButton = document.createElement('button');
    todoButton.innerText = 'Mark as Done';
    todoButton.addEventListener('click', () => {
        todoTitle.style.textDecoration = 'line-through';
        todoDesc.style.textDecoration = 'line-through';
        todoButton.style.display = 'none';
    })
    newTodo.appendChild(todoTitle);
    newTodo.appendChild(todoDesc);
    newTodo.appendChild(todoButton);

    todoInputTitle.value = '';
    todoInputDesc.value = '';
    let firstRowElement = document.createElement('td');
    firstRowElement.appendChild(todoTitle);
    let secondRowElement = document.createElement('td');
    secondRowElement.appendChild(todoDesc);
    let thirdRowElement = document.createElement('td');
    thirdRowElement.appendChild(todoButton);

    let tableRow = document.createElement('tr');
    tableRow.appendChild(firstRowElement);
    tableRow.appendChild(secondRowElement);
    tableRow.appendChild(thirdRowElement);
    todoTable.appendChild(tableRow);
})