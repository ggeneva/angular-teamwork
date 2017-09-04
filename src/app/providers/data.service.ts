import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { TestData } from './data/test.data';

@Injectable()
export class DataService {
  public test: TestData;

  constructor(private db: AngularFireDatabase) {
    this.test = new TestData(this.db);
  }

}
