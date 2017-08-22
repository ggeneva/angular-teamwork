import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  test: any;
  userInfo: any;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
    this.userInfo = this.user.subscribe(
      res => {
        this.userInfo = res;
      }
    )
  }

  public loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
