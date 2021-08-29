import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Hub } from '../hub';
import { Repo } from '../repo';
import "rxjs/add/operator/map"



@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  profile!: Hub;
  // repo: Repo;
  private username: string;
  private API_URL= environment.myApiKey;
  


  constructor(private http:HttpClient) {
    this.profile = new Hub("", "","","",0,0,new Date,0,"") 
    // this.repo = new Repo("","","")
    this.username = "otienonick"
  }
userRequest(){
  interface ApiResponse{
    login:string;
    avatar_url:string
    bio:string;
    followers:number
    following:number
    created_at:Date
    public_repos:number
    html_url:string
  
    

  }


  let promise = new Promise<void>((resolve,reject)=>{
    this.http.get<ApiResponse>( 'https://api.github.com/users/' + this.username +'?access_token=' + this.API_URL).toPromise().then(response=>{
      this.profile.login = response.login
      this.profile.avatar_url =response.avatar_url
      this.profile.bio = response.bio
      this.profile.followers = response.followers
      this.profile.following = response.following
      this.profile.created_at = response.created_at
      this.profile.public_repos = response.public_repos
      this.profile.html_url = response.html_url
    
     


      resolve()
    },
    error=>{
      this.profile.login = 'an error occured'
      this.profile.bio = 'an error occured'
      reject(error)
    })
  })
  return promise;

}


repoRequest(){
  return this.http.get('https://api.github.com/users/' + this.username +'/repos?access_token=' + this.API_URL)
  .map((res: any) => {
    return res
})

 }
 
searchUser(username:string){
  this.username = username

}
  
}
