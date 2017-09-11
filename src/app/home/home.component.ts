import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../providers/data.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public lastRecipes;
  private lastRecipesSub: ISubscription;

  constructor(public db: DataService) {

    // this.dataService.test.update('-KsiZGMi-PQdqU5sqJKG', { testfieldTwo: 'waw!!!' });
  }

  ngOnInit() {
    this.lastRecipesSub = this.db.recipes.getLastNRecipes(3)
      .subscribe(data => {
        console.log(data);
        this.lastRecipes = data;
      });
  }

  ngOnDestroy(): void {
    this.lastRecipesSub.unsubscribe();
  }
}
