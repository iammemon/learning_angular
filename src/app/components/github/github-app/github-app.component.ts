import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../../services/github.service'
@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.scss']
})
export class GithubAppComponent implements OnInit {

  error:boolean;
  reposData:any[]
  totalRepos:number
  constructor(private _githubS:GithubService) { }

  ngOnInit() {
  }

  findRepo(val){
    this._githubS.getRepos(val).subscribe(repos=>{
      this.error=false;
      this.reposData=repos
      this.totalRepos=this.reposData.length;
    },
    err=>{
      this.totalRepos=0;
      this.reposData=[]
      this.error=true;
    })
    return false;
  }

}
