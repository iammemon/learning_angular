import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoAppComponent } from './components/todo/todo-app/todo-app.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo/todo-item/todo-item.component';

import { GithubService } from './services/github.service';
import { GithubAppComponent } from './components/github/github-app/github-app.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    TodoListComponent,
    TodoItemComponent,
    GithubAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
