import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class GithubService {

  constructor(public http:Http) { }

  getRepos(username:string){
    return this.http.get(`https://api.github.com/users/${username}/repos`).map(res=>res.json())
  }
}
