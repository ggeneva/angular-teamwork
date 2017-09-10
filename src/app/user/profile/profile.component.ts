import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { AuthService } from '../../providers/auth.service';
import { User } from '../../models/user.model';
import { DataService } from '../../providers/data.service';
import { Recipe } from '../../models/recipe.model';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  public user: User;
  public recipes: Recipe[];
  private recipesSub: ISubscription;

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private db: DataService
  ) { }

  ngOnInit() {
    this.userService.getCurrentUser()
      .then(dbUser => {
        this.user = dbUser;

        this.recipesSub = this.db.recipes.getByAuthor(dbUser.uid).subscribe(recipes => {
          console.log(recipes);
          this.recipes = recipes;
        });
      });
  }

  ngOnDestroy() {
    this.recipesSub.unsubscribe();
  }

}
