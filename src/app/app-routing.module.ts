import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TodoAppComponent} from './components/todo/todo-app/todo-app.component'
import {GithubAppComponent} from './components/github/github-app/github-app.component'


const routes: Routes = [
  {
    path:'',
    component:TodoAppComponent
  },
  {
    path:'github',
    component:GithubAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
