import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../models/user.model';

@Injectable()
export class UserService {

  private currentUser: any;

  constructor(public afAuth: AngularFireAuth) {
    this.currentUser = this.afAuth.auth.currentUser;
    this.afAuth.authState.subscribe(
      res => {
        this.currentUser = this.afAuth.auth.currentUser;
      }
    );
  }

  public registerUserWithEmail(user: User) {
    const displayName: string = user.firstName + ' ' + user.lastName;
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        this.afAuth.auth.currentUser.displayName = displayName;
        console.log(result);
      });
  }

  public getCurrentUser() {
    return this.currentUser;
  }
}
