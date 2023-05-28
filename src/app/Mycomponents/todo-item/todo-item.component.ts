import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

//  @Input()
//   todo!: Todo;

//or same code


@Input() todo: Todo = new Todo;
@Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

onClick(todo:Todo=new Todo){

this.todoDelete.emit(todo);
console.log("on click works");
}


}
