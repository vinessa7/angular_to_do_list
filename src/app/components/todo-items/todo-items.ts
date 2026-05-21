import { Component, input, output } from '@angular/core';
import { Todo } from '../model/todo.types';
import { HighlightCompletedTodo } from '../../directives/highlight-completed-todo';

@Component({
  selector: 'app-todo-items',
  imports: [HighlightCompletedTodo],
  templateUrl: './todo-items.html',
  styleUrl: './todo-items.scss',
})
export class TodoItems {
  todo = input.required<Todo>();
  todoToggled = output<Todo>();

  todoClicked() {
    this.todoToggled.emit(this.todo());
  }
}
