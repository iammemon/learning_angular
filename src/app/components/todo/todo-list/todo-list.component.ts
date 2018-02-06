import { Component, OnInit, Input,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit,OnChanges {
  
  @Input() allTodos:string[];
  todosCount:number;
  constructor() { }

  ngOnInit() {
    this.todosCount=this.allTodos.length;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.todosCount=changes.allTodos.currentValue.length
  }

}
