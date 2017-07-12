var testArray =['item1', 'item2', 'item3'];

testArray.push("extra item")
console.log(testArray)

for (var i=0; i < testArray.length; i++){
    console.log(testArray[i]);

}



// displayTodos shoud tell you if .todos is empty
// displayTodos shoud show .completed


var todoList = {
    todos:[],
    // displayTodos should show .todoText
    displayTodos: function(){
        console.log("My todos:")
        for (var i= 0; i <this.todos.length; i++){
            console.log("displayed Todos:",this.todos[i].todoText)
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
todoList.displayTodos();
todoList.addTodo('first');
todoList.addTodo('second');