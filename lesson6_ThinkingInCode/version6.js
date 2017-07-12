var todoList = {
    todos:[],
    
    displayTodos: function(){
// displayTodos shoud tell you if .todos is empty        
        if(this.todos.length === 0){
            console.log("Your todo list is empty!");
        }
        else{ // displayTodos should show .todoText
            console.log("My todos:")
            for (var i= 0; i <this.todos.length; i++){
                // console.log("displayed Todos:",this.todos[i].todoText)
                // displayTodos shoud show .completed
                if(this.todos[i].completed === true){
                    console.log("(x)",this.todos[i].todoText)
                }
                else{
                    console.log("( )",this.todos[i].todoText)
                }
            }
        }
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
        this.displayTodos();
    }

};
//Case 1
todoList.addTodo("first");
todoList.addTodo("second");
todoList.toggleCompleted(0)
todoList.toggleCompleted(1)
todoList.toggleAll()
todoList.deleteTodo(0)
todoList.deleteTodo(0)

todoList.addTodo("third");
todoList.addTodo("fourth");
todoList.toggleCompleted(0)
todoList.toggleCompleted(1)
todoList.toggleAll()
todoList.toggleAll()
