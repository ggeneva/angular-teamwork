import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { AuthService } from '../../providers/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: User;

  constructor(public userService: UserService, public authService: AuthService) {
    this.userService.getCurrentUser()
      .then(dbUser => {
        this.user = dbUser;
      });
  }

  ngOnInit() {
  }

}
