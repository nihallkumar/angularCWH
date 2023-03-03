import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';



@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {

  @Input() todo: Todo;
  @Input() i: number;
  @Output() todoDelete = new EventEmitter<Todo>();
  @Output() todoCheckBox = new EventEmitter<Todo>();

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("initiating delete");
  }

  onCheckboxClick(todo: Todo) {
    console.log(todo);
    this.todoCheckBox.emit(todo);
    console.log(todo);
  }

}
