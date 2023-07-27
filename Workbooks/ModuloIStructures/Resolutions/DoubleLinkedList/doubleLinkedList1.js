import DoubleLinkedList from "../../DataStructures/DoubleLinkedList/DoubleLinkedList.js";
class ToDoList {
    constructor() {
      this.tasks = new DoubleLinkedList();
    }
  
    // Add a task to the to-do list
    addTask(task) {
      this.tasks.append({ task, completed: false });
    }
  
    // Mark a task as completed
    markCompleted(task) {
        const node = this.tasks.search(task);
        if (node) {
          node.value.completed = true;
        }
      }
  
    // Remove a task from the to-do list
    removeTask(task) {
      const node = this.tasks.search({ task });
      if (node) {
        this.tasks.removeNode(node);
      }
    }
  
    // Display the list of tasks
    showTasks() {
      const tasksList = this.tasks.printList();
      console.log("To-Do List:");
      tasksList.forEach((task, index) => {
        const status = task.completed ? "[Completed]" : "[Incomplete]";
        console.log(`${index + 1}. ${status} ${task.task}`);
      });
    }
  }
  
  // Test the to-do list
  const toDoList = new ToDoList();
  toDoList.addTask("Buy groceries");
  toDoList.addTask("Finish homework");
  toDoList.addTask("Go for a walk");
  toDoList.showTasks();
  
  toDoList.markCompleted("Finish homework");
  toDoList.removeTask("Go for a walk");
  toDoList.showTasks();
