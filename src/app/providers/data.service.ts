import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { TestData } from './data/test.data';
import { RecipesData } from './data/recipes.data';

@Injectable()
export class DataService {
  public test: TestData;
  public recipes: RecipesData;

  constructor(private db: AngularFireDatabase) {
    this.test = new TestData(this.db);
    this.recipes = new RecipesData(this.db);
  }

}
