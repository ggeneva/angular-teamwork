import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../models/user.model';

@Injectable()
export class UserService {

  constructor(public afAuth: AngularFireAuth) {
  }

  public registerUserWithEmail(user: User): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
        .catch((error) => {
          reject(error);
        })
        .then((result) => {
          this.afAuth.auth.currentUser.updateProfile({
            displayName: user.firstName + ' ' + user.lastName,
            photoURL: null
          });
          resolve();
        });
    });
  }

  public getCurrentUser() {
    // return Observable.create(observer => {
    //   observer.next(this.currentUser);
    //   observer.complete();
    // })
    return this.updateCurrentUser(this.afAuth.auth.currentUser);
  }

  private updateCurrentUser(dbUser) {
    return {
      displayName: dbUser.displayName,
      email: dbUser.email,
      emailVerified: dbUser.emailVerified,
      isAnonymous: dbUser.isAnonymous,
      phoneNumber: dbUser.phoneNumber,
      photoURL: dbUser.photoURL,
      providerId: dbUser.providerId,
      providerData: dbUser.providerData,
      uid: dbUser.uid
    };
  }
}
