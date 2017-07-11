


var todoList = {
    todos:[],
    // 2. it should have a displayTodos method 
    displayTodos: function(){
        console.log("My todos:", this.todos)
    },
    // todoList.addTodo should add objects
    addTodo: function(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos()
    },
    // todoList.changeTodo should change the todoText property
    changeTodo: function(position, todoText){
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    // 5. it should have a deleteTodo method 
    deleteTodo: function(position){
        this.todos.splice(position,1);
        this.displayTodos();
    },
    // todoList.toggleCompleted should change the completed  property
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};

// todoList.addTodo("this is an object")
// todoList.addTodo("first try")
// todoList.changeTodo(0,"second try")

todoList.addTodo('boolean testing')
todoList.toggleCompleted(0) // running function toggleCompleted to the boolean testing todo changed its completed status to true





