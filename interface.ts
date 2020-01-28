export interface tasksInterface{
    addTask(task: string): number;
    listAllTasks(): void ;
    deleteTask(task: string): number;
    myTasksArray: Array<string>;
}