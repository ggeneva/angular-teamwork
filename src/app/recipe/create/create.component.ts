import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { DataService } from '../../providers/data.service';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public recipe: Recipe = new Recipe();

  constructor(private db: DataService, private authService: AuthService) { }

  ngOnInit() {
  }

  public createRecipe() {
    const now: string = Date.now().toString();

    this.recipe.dateCreated = now;
    this.recipe.dateUpdated = now;

    this.db.recipes.add(this.recipe);

  }

}
