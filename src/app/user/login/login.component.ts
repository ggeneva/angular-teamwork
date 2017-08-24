import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }

  public loginWithFacebook() {
    this.authService.loginWithFacebook();
  }

  public loginWithGoogle() {
    this.authService.loginWithGoogle();
  }

  public loginWithEmail(email: string, password: string) {
    this.authService.loginWithEmail(email, password);
  }

}
