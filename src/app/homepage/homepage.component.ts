import { Component, OnInit } from '@angular/core';
import { UserRequestService } from '../services/user-request.service';
import { Hub } from '../hub';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  profile!: Hub;

  constructor(private userService:UserRequestService) { 
      

   }

  ngOnInit(): void {
    this.userService.userRequest();
    this.profile = this.userService.profile
  }

}
