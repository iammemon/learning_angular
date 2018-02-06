import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {

  todos:string[];
  error:boolean;

  constructor() { }

  ngOnInit() {
    this.error=false;
    this.todos=['read book','write book']

  }
  addTodo(val){
    if(val){
    this.error=false;
    this.todos.push(val)
    this.todos = this.todos.slice();}
    else{
      this.error=true;
    }
    return false;
  }
}
