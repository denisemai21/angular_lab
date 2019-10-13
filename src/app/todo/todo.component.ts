import { Component } from '@angular/core';

interface Todo {
  task:string;
  completed:boolean;
}

@Component({
  selector: 'todo-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  title: string = 'To Do List';
  completed: boolean = false;
//   newItem: string;
  newTask: string;
  tasks: Todo[] = [
{completed: false, task: 'Bring Milk'},
{completed: false, task: 'Pay Mobile Bill'},
{completed: false, task: 'Clean House'},
{completed: true, task: 'Wash Car'},
// {completed: false, task: 'Do Laundry'},
  ]

  showButton: boolean = true;
  removeCompleteTask(){
      this.showButton = false;
  }

  Add() {
    const newItem = {
      task: this.newTask,
      completed: false
    }
    this.tasks.push(newItem)
    this.newTask = null;
  }

//   numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   todos = [{ 
//     label: 'Bring milk', 
//     done: false, 
//     priority: 3 
//   },
//   { 
//     label: 'Pay mobile bill', 
//     done: true, 
//     priority: 1 
//   },
//   { 
//     label: 'Clean house', 
//     done: false, 
//     priority: 2 
//   },
//   { 
//     label: 'Wash car', 
//     done: false, 
//     priority: 4 
//   },
// ];

// addTodo(newTodoLabel) {
//   const newTodo = {
//     label: newTodoLabel,
//     priority: 1, 
//     done: false
//   };

//   this.todos.push(newTodo);
// }

// deleteTodo(todo) {
//   this.todos = this.todos.filter( t => t.label !== todo.label );
// }

// newTodoTask: [] = [];

// addTodo()
// {
//   // const newTask = {
//   //   task: newTodoTask,
//   // }
//   this.tasks.push(newTodoTask);
//   console.log(newTodoTask)
// }

}


// todos:Todo[] = [
//   {task: 'Clean up', completed: true,},
//   {task: 'Grocery Shopping', completed: false},
//   {task: 'Study', completed: false},
// ];