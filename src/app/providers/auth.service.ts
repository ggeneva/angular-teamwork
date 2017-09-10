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

  public loginWithGoogle(): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .catch((error) => {
          return reject(error);
        })
        .then(() => {
          return resolve();
        });
    });
  }

  public loginWithFacebook(): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .catch((error) => {
          return reject(error);
        })
        .then(() => {
          return resolve();
        });
    });
  }

  public loginWithEmail(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .catch((error) => {
          return reject(error);
        })
        .then(() => {
          return resolve();
        });
    });
  }

  public logout() {
    return new Promise((resolve, reject) => {
      return this.afAuth.auth.signOut()
        .catch((error) => {
          return reject(error);
        })
        .then(() => {
          return resolve();
        });
    });
  }
}
