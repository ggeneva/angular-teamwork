import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { UserService } from '../../providers/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private user: User = new User();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  registerUser() {
    this.userService.registerUserWithEmail(this.user);
  }

}
