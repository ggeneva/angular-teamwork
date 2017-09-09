import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase';

@Injectable()
export class FileService {

  constructor(private db: AngularFireDatabase) { }

  public uploadFile(file: File, name?: string) {
    return new Promise((resolve, reject) => {
      const storageRef = firebase.storage().ref();
      const fileExtension = file.name.split('.').pop();
      const fileName = name ? name + '.' + fileExtension : file.name;

      const path = `/recipe-images/${fileName}`;

      const iRef = storageRef.child(path);

      iRef.put(file)
        .then(data => {
          resolve(data.downloadURL);
          console.log(data.downloadURL);
        })
        .catch(error => {
          reject(error);
        });
    });
    // const storageRef = firebase.storage().ref();

    // const fileRef = storageRef.child('mountains.jpg');
  }

}
