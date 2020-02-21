/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/



// make eventListner function to assign that todoInput to the ul
var addButton = document.getElementById('add-button');

//assign the parent element to which we will be appending the new child list item
var ulContainer = document.getElementById('todo-list');

addButton.addEventListener('click',function(){
    // make a variable to store the input text from input box
    var todoInput = document.getElementById('description').value;
    // create variable that will create the new list item
    var newLI = document.createElement('li');
    // allocate the text inputed by user to the new list item
    newLI.innerHTML = todoInput;
    // do the work of appending the new li to the parent ul
    ulContainer.appendChild(newLI);
})