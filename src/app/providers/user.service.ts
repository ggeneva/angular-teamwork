import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../models/user.model';

@Injectable()
export class UserService {

  constructor(public afAuth: AngularFireAuth) {
  }

  public registerUserWithEmail(user: User, password): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(user.email, password)
        .then((result) => {
          const photoURL = user.photoURL ? user.photoURL : null;
          this.afAuth.auth.currentUser.updateProfile(
            {
              displayName: user.displayName,
              photoURL: photoURL
            })
            .then(() => {
              resolve();
            });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public getCurrentUser(): Promise<User> {
    return new Promise((resolve, reject) => {
      const sub = this.afAuth.authState.subscribe(data => {
        const dbUser: User = this.updateCurrentUser(data);

        sub.unsubscribe();
        resolve(dbUser);
      });
    });
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
