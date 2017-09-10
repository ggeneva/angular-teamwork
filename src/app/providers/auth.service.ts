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
        .then((success) => {
          return resolve(success);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  }

  public loginWithFacebook(): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then((success) => {
          return resolve(success);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  }

  public loginWithEmail(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((success) => {
          resolve(success);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public logout() {
    return new Promise((resolve, reject) => {
      return this.afAuth.auth.signOut()
        .then((success) => {
          return resolve();
        })
        .catch((error) => {
          return reject(error);
        });
    });
  }
}
