import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: any;

  constructor(public userService: UserService) {
    this.user = this.userService.getCurrentUser();
   }

  ngOnInit() {
    console.log(this.user);
  }

}
