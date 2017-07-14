var todoList = {
    todos:[],
    addTodo: function(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    // todoList.changeTodo should change the todoText property
    changeTodo: function(position, todoText){
        this.todos[position].todoText = todoText;
    },
    // 5. it should have a deleteTodo method 
    deleteTodo: function(position){
        this.todos.splice(position,1);
    },
    // todoList.toggleCompleted should change the completed  property
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    // .toggleAll: if everything's true , make everything false.
    toggleAll: function(){
        var totaltodos = this.todos.length;
        var completedTodos = 0;
        //Get number of completed todos.
        for(var i= 0; i < totaltodos; i++){
            if (this.todos[i].completed=== true){
                completedTodos++;
            }
        }
        //Case 1: If everything is true , make everything false.
        if(completedTodos === totaltodos){
            for (var i=0; i<totaltodos; i++){
                this.todos[i].completed = false
            }
        }
        // .toggelAll: Otherwise, make everything true.
        else{
             for (var i=0; i<totaltodos; i++){
             this.todos[i].completed = true;
            }
        }
    }

};
// handlers will handle different events
var handlers = {
    addTodo: function(){
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value)
        addTodoTextInput.value = " ";
        view.displayTodos();
        
    },
    changeTodo: function(){
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
        view.displayTodos();
    },
    deleteTodo: function(position){
        todoList.deleteTodo(position);
        view.displayTodos();
    }, 
    toggleCompleted: function(){
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
        view.displayTodos();
    },
    toggelAll: function(){
        todoList.toggleAll();
        view.displayTodos();
    }
};

var view = {
    displayTodos: function(){
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML="";
        for(var i = 0; i< todoList.todos.length; i++){
            var todoLi = document.createElement("li");
            var todo = todoList.todos[i];
            var todoTextWithCompletion = "";

            if(todo.completed === true){
                todoTextWithCompletion = "(x) " + todo.todoText;
            }
            else {
                todoTextWithCompletion = "( ) " + todo.todoText;
            }
            todoLi.id = i; //Each li should have an id that has the todo position
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());//There should be a delete button for each todo
            todosUl.appendChild(todoLi);
        }
    },
    // There should be a way to create delte buttons
    createDeleteButton: function(){
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        return deleteButton;
    },
    //Clicking delete should update todoList.todos and the DOM
    setUpEventListeners: function(){
        var todosUl = document.querySelector('ul');
        //Delete buttons should have access to the todo id
        todosUl.addEventListener("click", function(event){
            var elementClicked = event.target;

            //check if element clicked is a delete button
            if(elementClicked.className == "deleteButton"){
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};

view.setUpEventListeners();