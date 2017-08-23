import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private userObservable: Observable<firebase.User>;
  public user: any;

  constructor(public afAuth: AngularFireAuth) {
    this.userObservable = afAuth.authState;
    this.user = this.userObservable.subscribe(
      res => {
        this.user = res;
      }
    );
  }

  public isLoggedIn() {
    if(this.user!==null){
      return true;
    }
    return false;
  }

  public loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  loginWithEmail(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  register(){

  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
