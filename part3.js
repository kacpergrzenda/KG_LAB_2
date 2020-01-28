"use strict";
exports.__esModule = true;
var Todos = /** @class */ (function () {
    function Todos() {
        this.myTasksArray = [];
    }
    //  function takes a string addTask
    Todos.prototype.addTask = function (task) {
        this.myTasksArray.push(task);
        console.log("Item " + task + " added to Array");
        return this.myTasksArray.length;
    };
    // fucntion void listAllTasks
    Todos.prototype.listAllTasks = function () {
        //for(let i:number=0; i<myTasksArray.length; i++)
        //{
        console.log("Array contains the following: ");
        this.myTasksArray.forEach(function (task) {
            console.log(task);
        });
    };
    //  function takes a string deleteTask
    Todos.prototype.deleteTask = function (task) {
        var index = this.myTasksArray.indexOf(task);
        if (index > -1) {
            this.myTasksArray.splice(index, 1);
            console.log("Item " + task + " deleted from array.");
        }
        else {
            console.log("item " + task + " not in array");
        }
        return this.myTasksArray.length;
    };
    return Todos;
}());
var todo = new Todos();
todo.addTask("Complete Lab");
todo.listAllTasks();
todo.deleteTask("Complete Lab");
