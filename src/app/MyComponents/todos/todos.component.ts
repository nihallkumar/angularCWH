import { Component } from '@angular/core';
import { Todo } from "../../Todo";


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localItem: string;
  todos: Todo[];
  constructor() {
    // this.todos = [];
    // this.localItem=localStorage.getItem("todos")

    this.localItem = localStorage.getItem('todos') || "";
    if (localStorage.getItem("todos") == "") {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localItem);
    }

  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }


  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;   
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
