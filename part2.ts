let x: string = "hello World";
console.log(x);

//array of strings
let myTasksArray: Array<string> = [];

//  function takes a string addTask
function addTask(task: string): number {
    myTasksArray.push(task);
    console.log("Item " + task + " added to Array");
    return myTasksArray.length;
}
// fucntion void listAllTasks
function listAllTasks(): void {
    //for(let i:number=0; i<myTasksArray.length; i++)
    //{
    console.log("Array contains the following: ");

    myTasksArray.forEach(function (task) {
        console.log(task);
    })
}
//  function takes a string deleteTask
function deleteTask(task: string): number {
    let index: number = myTasksArray.indexOf(task);
    if (index > -1) {
        myTasksArray.splice(index, 1);
        console.log("Item " + task + " deleted from array.");
    }
    else {
        console.log("item " + task + " not in array")
    }
    return myTasksArray.length;
}
addTask("Complete Lab");
let numOfTasks: number = addTask("Eat Breakfeast");
console.log("The number of task to do today is " + numOfTasks);

listAllTasks();
deleteTask("Complete Lab");