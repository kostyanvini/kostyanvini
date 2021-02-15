'use sctrict'
//Переменные

let todoText = document.querySelector('.todoText'),
todoAdd = document.querySelector('.todo-add'),
todoList = document.querySelector('.todo'),
todo = []; //Массив со всеми задачами

//Проверим, есть ли в локальном хранилеще задачи, если есть, то отрисуем сразу
if(localStorage.getItem('task')){
    todo = JSON.parse(localStorage.getItem('task'));
    todoAddList();
}

//Добавление по клику
todoAdd.addEventListener('click', addTaskInTodo)
//Конец функции

//Добавление по кнопке Enter
todoText.addEventListener('keydown', (e) =>{
    if(e.keyCode == 13){
        addTaskInTodo()
    }
})
//Конец функции

//Функция добавления задач
function addTaskInTodo(){
    let date = new Date();
    let dateTime;
    if(date.getMinutes() < 10) dateTime = date.getHours()+ ":" + date.getMinutes() + "0";
    else  dateTime = date.getHours()+ ":" + date.getMinutes();
    if(todoText.value == ""){
        alert("Введите задачу")
    }
    else{
        let newTodo = {
            todo: todoText.value,
            checked: false,
            date: dateTime
        }
        todo.push(newTodo)
        todoAddList();
        localStorage.setItem('task', JSON.stringify(todo));    
    }
}
//Конец функции

//Функция отрисовки задач на экране
function todoAddList(){
    let todoTask = "";
    todo.forEach(function(item, i){
        todoTask += `
        <div class="todo-list-item">
            <span class="date">${item.date}</span>
            <input type="checkbox" class="task-checkbox" id="task_${i}" ${item.checked ? 'checked' : ''}><br>
            <label for="task_${i}" class="todo-text">${item.todo}</label><br>
            <button class="delete-todo">Х</button> <hr>
        </div>
        `
        todoList.innerHTML = todoTask;
    })
    todoText.value = "";
    //Запускаем функцию после добавления новых задач
    deleteTodoTask()
    //Запускаем функцию после добавления новых задач
    todoChecked()
}
//Конец функции

//Функция удаления задач из списка
function deleteTodoTask(){
    let deleteTodo = document.getElementsByClassName('delete-todo');
    for (let i = 0; i < deleteTodo.length; i++) {
        deleteTodo[i].addEventListener('click', (e) =>{
            e.target.parentElement.remove();
            todo.splice(i, 1);
            localStorage.setItem('task', JSON.stringify(todo));
            //Запускаем потому что необходимо обновить индексы элементов в массиве deleteTodo
            todoAddList()
        })    
    }
}
//Конец функции

//Проверим и сохраним, если чекбокс активен
function todoChecked (){
    let todoCheckbox = document.getElementsByClassName('task-checkbox');
    for (let i = 0; i < todoCheckbox.length; i++) {
        todoCheckbox[i].addEventListener('change', (e) =>{
            todo[i].checked = e.target.checked;
            localStorage.setItem('task', JSON.stringify(todo));
        })
    }
}
//Конец функции