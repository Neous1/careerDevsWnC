
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
    todos:["item1", "item2" , "item3", "item4"]
}

console.log(todoList);

// 2. it should have a displayTodos method 
// 3. it should have a addTodo method 
// 4. it should have a changeTodo method 
// 5. it should have a deleteTodo method 