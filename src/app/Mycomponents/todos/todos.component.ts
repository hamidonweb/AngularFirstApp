import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos: Todo[];

constructor(){
  this.todos = [
{sno:1,
  title:"this is title play after 47 minutes",
  desc:"Description",
  active: true},
  {sno:2,
    title:"this is another title play after 47 minutes",
    desc:"Description 2",
    active: false},
    {sno:3,
      title:"this is another title 2 play after 47 minutes",
      desc:"Description 3",
      active: true}
]

}




}
