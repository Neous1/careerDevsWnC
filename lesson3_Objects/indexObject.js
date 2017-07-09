
var myComputer = {
    operatingSystem: 'mac',
    screenSize: '15 inches',
    purchaseYear: 2011 

}
console.log(myComputer);
console.log(myComputer.operatingSystem);

/* /////////////
Lesson 3 Objects*
///////////*/

var yvon  = {
    name: "Yvon",
    sayName : function(){
        console.log(this.name)// keyword this refers to the entire object
    }
}

yvon.sayName()


// 1. it should store the todos array on an object

var todoList = {
    todos:["item1", "item2" , "item3", "item4"],
    // 2. it should have a displayTodos method 
    displayTodos: function(){
        console.log("My todos:", this.todos)
    },
    // 3. it should have a addTodo method 
    addTodo: function(todo){
        this.todos.push(todo);// the "this" keyword infers a push tothe todos array above
        this.displayTodos()// the "this" keyword calls the displayTodos function above
    },
    // 4. it should have a changeTodo method 
    changeTodo: function(position, newValue){
        this.todos[position] = newValue;
        this.displayTodos();
    },
    // 5. it should have a deleteTodo method 
    deleteTodo: function(position){
        this.todos.splice(position,1);
        this.displayTodos();
    }
};

// console.log(todoList);
todoList.displayTodos()
todoList.addTodo('plunker')
todoList.changeTodo(4, 'changed plunker')
todoList.deleteTodo(4)







