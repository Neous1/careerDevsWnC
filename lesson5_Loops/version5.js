var testArray =['item1', 'item2', 'item3'];

testArray.push("extra item")
// console.log(testArray)

for (var i=0; i < testArray.length; i++){
    // console.log(testArray[i]);

}







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
    }
};
// todoList.displayTodos();
// todoList.addTodo('first');
// todoList.addTodo('second');
// todoList.deleteTodo(0);
// todoList.displayTodos();
// todoList.deleteTodo(1)

// // todoList.displayTodos();
// todoList.displayTodos();// 
// todoList.addTodo('first');
// todoList.deleteTodo(0)
// todoList.displayTodos()

todoList.addTodo("testing")
todoList.addTodo("done")
todoList.toggleCompleted(1)
todoList.addTodo("third");
todoList.addTodo("fourth");
todoList.addTodo("fifth");
todoList.toggleCompleted(3)
todoList.deleteTodo(3,2)
todoList.deleteTodo(3,1)
todoList.deleteTodo(2,1)
todoList.toggleCompleted(1)


