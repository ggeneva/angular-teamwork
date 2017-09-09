import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { DataService } from '../../providers/data.service';
import { AuthService } from '../../providers/auth.service';
import { UserService } from '../../providers/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public recipe: Recipe = new Recipe();
  private user: User;

  constructor(
    private db: DataService,
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  public createRecipe() {
    const now: string = Date.now().toString();

    this.recipe.dateCreated = now;
    this.recipe.dateUpdated = now;
    this.recipe.author = this.userService.getCurrentUser();

    this.db.recipes.add(this.recipe);

  }

}
