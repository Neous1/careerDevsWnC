//1. it should have a place to store todos


var todos =["item1", "item2", "item3"];

//2. it should have a way to display todos

// console.log(todos); // how to display 

//3. it should have a way to add new todos

todos.push("item4");

//4. it should have a way to change todos

// target the item needing change in the array by selecting its index
// expample changing item1 to "item1 updated" will look like this

todos[0]= "item1 updated"


//5. it should have a way to delete todos

/* to delete an item off of array we can use the splice()function 
this function takes 2 params 
first is the index of the item 
second is the number of items to be deleted after the selected index*/

todos.splice(0,1);

//add an item
todos.push("item0", "item17", "item23")

//delete items
todos.splice(3, 3)

// if you try to delete a non existing index you'll get an empty array





// lesson2 Function 


// 2. it should have a function to display todos
function displayTodos(){

console.log("My Todos: ", todos);

}
displayTodos();

// 3. it should have a function to add todos

function addTodos(todo){
    todos.push(todo);
    displayTodos()
}
addTodos("hello");

// 4. it should have a function to change todos

function changeTodo(position, newValue){
    todos[position]=newValue; //position tells the function is targeted for change and newValue is the change
    displayTodos()
}


changeTodo(0, "changed");
changeTodo(0, "changed again");

// 5. it should have a function to delete todos

function deleteTodo(position){
    todos.splice(position, 1);
    displayTodos();
}

deleteTodo(0);
deleteTodo(2);
