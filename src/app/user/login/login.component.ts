import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { Router, ActivatedRoute, } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  private paramsSub: ISubscription;
  private params;
  public error;

  constructor(public authService: AuthService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.paramsSub = this.route.params.subscribe(params => {
      this.params = params;
    });
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

  public loginWithFacebook() {
    this.authService.loginWithFacebook()
      .then(() => {
        this.redirectAfterLogin();
      })
      .catch((error) => {
        this.error = error.message;
      });
  }

  public loginWithGoogle() {
    this.authService.loginWithGoogle()
      .then(() => {
        this.redirectAfterLogin();
      })
      .catch((error) => {
        this.error = error.message;
      });
  }

  public loginWithEmail(email: string, password: string) {
    return this.authService.loginWithEmail(email, password)
      .then(() => {
        this.redirectAfterLogin();
      })
      .catch((error) => {
        this.error = error.message;
      });
  }

  private redirectAfterLogin() {
    if (this.params && this.params.return) {
      this.router.navigate([this.params.return]);
    } else {
      this.router.navigate(['']);
    }
  }

}
