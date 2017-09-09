import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../providers/data.service';
import { Recipe } from '../../models/recipe.model';
import { FilterRecipesPipe } from '../../pipes/filter-recipes.pipe';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  // for paggination
  public page = {
    number: 1,
    size: 6
  };

  public resultsCount;

  public recipes: Recipe[];
  private recipesSub;
  public filter: any = {};

  constructor(private db: DataService) { }

  public filterResults() {

  }

  public test() {
    console.log(this.filter.search);
  }

  ngOnInit() {
    this.recipesSub = this.db.recipes
      .getObservableList()
      .subscribe(data => {
        this.recipes = data;
      });
  }

}
