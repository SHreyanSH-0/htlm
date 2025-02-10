const todoList = [{
    name: 'shreyansh',
    dueDate: '2005-05-20'
}];

renderTodoList();

function remove(i){
    todoList.splice(i,1);
    renderTodoList();
}

function renderTodoList(){
    const inputElement = document.querySelector('.js-todoInput');
    const divElement = document.querySelector('.js-todoList');
    let htmlCode = '';
        
    for(let i=0;i<todoList.length;i++){
        const value = todoList[i];
        // const name = value.name;
        // const dueDate = value.dueDate;

        const {name,dueDate} = value;
        const hold = /*`<p>${name} ${dueDate}
        <button  class = "deleteButton" onclick = "

        remove(${i});
        
        ">Delete</button></p>`;*/
        `<div> ${name} </div>
        <div> ${dueDate} </div>
        
        <button  class = "deleteButton" onclick = "

        remove(${i});
        
        ">Delete</button>
        `
        htmlCode += hold;
    }
    divElement.innerHTML = htmlCode;
}

function addTodo(){
    const inputElementname = document.querySelector('.js-todoInput');
    const inputElementDueDate = document.querySelector('.js-todoInputDueDate');
    dueDate = inputElementDueDate.value;
    let namei = inputElementname.value;
    todoList.push({
       name : namei,
       dueDate: dueDate
    });
    inputElementname.value = '';
    inputElementDueDate.value = '';
    renderTodoList();
    
}
