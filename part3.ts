import { tasksInterface } from "./interface";

class Todos implements tasksInterface {
    myTasksArray: Array<string> = [];

    //  function takes a string addTask
    addTask(task: string): number {
        this.myTasksArray.push(task);
        console.log("Item " + task + " added to Array");
        return this.myTasksArray.length;
    }
    // fucntion void listAllTasks
    listAllTasks(): void {
        //for(let i:number=0; i<myTasksArray.length; i++)
        //{
        console.log("Array contains the following: ");

        this.myTasksArray.forEach(function (task) {
            console.log(task);
        })
    }
    //  function takes a string deleteTask
    deleteTask(task: string): number {
        let index: number = this.myTasksArray.indexOf(task);
        if (index > -1) {
            this.myTasksArray.splice(index, 1);
            console.log("Item " + task + " deleted from array.");
        }
        else {
            console.log("item " + task + " not in array")
        }
        return this.myTasksArray.length;
    }
}

let todo = new Todos();
todo.addTask("Complete Lab");

todo.listAllTasks();
todo.deleteTask("Complete Lab");