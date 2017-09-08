import { Component, OnInit } from '@angular/core';
import { DataService } from '../../providers/data.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  public recipes: Recipe[];
  private recipesSub;

  constructor(private db: DataService) { }

  ngOnInit() {
    this.recipesSub = this.db.recipes
      .getObservableList()
      .subscribe(data => {
        this.recipes = data;
      });
  }

}
