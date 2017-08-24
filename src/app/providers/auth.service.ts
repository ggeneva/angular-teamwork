import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private user: any;

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(
      res => {
        this.user = res;
      }
    );
  }

  public isLoggedIn() {
    if (this.user !== null) {
      return true;
    }
    return false;
  }

  public loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  public loginWithFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  public loginWithEmail(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public logout() {
    this.afAuth.auth.signOut();
  }
}
