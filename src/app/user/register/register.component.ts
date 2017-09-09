import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

import { UserService } from '../../providers/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User = new User();
  public password: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this.userService.registerUserWithEmail(this.user, this.password)
      .catch((error) => {
        console.log(error);
      })
      .then((result) => {
        this.router.navigate(['']);
      });
  }

}
