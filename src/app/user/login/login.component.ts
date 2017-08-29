import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  public loginWithFacebook() {
    this.authService.loginWithFacebook()
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        this.router.navigate(['']);
      });
  }

  public loginWithGoogle() {
    this.authService.loginWithGoogle()
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        this.router.navigate(['']);
      });
  }

  public loginWithEmail(email: string, password: string) {
    this.authService.loginWithEmail(email, password)
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        this.router.navigate(['']);
      });
  }

}
