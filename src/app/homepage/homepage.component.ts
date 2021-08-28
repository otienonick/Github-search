import { Component, OnInit } from '@angular/core';
import { UserRequestService } from '../services/user-request.service';
import { Hub } from '../hub';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  user!: Hub;
  repository:any;
  username!: string;

  

  constructor(private userService:UserRequestService) { 
    this.userService.repoRequest().subscribe(repos=>{
      this.repository =repos;

     })
   }
   
  

  ngOnInit(){
    this.userService.userRequest();
    this.user = this.userService.profile

  }

  findProfile(){
    this.userService.searchUser(this.username)
    this.userService.repoRequest().subscribe(repos=>{
      console.log(repos)
      this.repository =repos;
      this.userService.userRequest();
      this.user = this.userService.profile
      console.log(this.repository)

     })
    
      

  }

}
