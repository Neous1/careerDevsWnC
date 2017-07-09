
var myComputer = {
    operatingSystem: 'mac',
    screenSize: '15 inches',
    purchaseYear: 2011 

}
console.log(myComputer);
console.log(myComputer.operatingSystem);

var yvon  = {
    name: "Yvon",
    sayName : function(){
        console.log(this)// keyword this refers to the entire function
    }
}

yvon.sayName()