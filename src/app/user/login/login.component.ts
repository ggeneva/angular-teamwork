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
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        this.redirectAfterLogin();
      });
  }

  public loginWithGoogle() {
    this.authService.loginWithGoogle()
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        this.redirectAfterLogin();
      });
  }

  public loginWithEmail(email: string, password: string) {
    this.authService.loginWithEmail(email, password)
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        this.redirectAfterLogin();
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
