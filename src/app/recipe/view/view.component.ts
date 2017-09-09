import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../../models/recipe.model';
import { User } from '../../models/user.model';
import { DataService } from '../../providers/data.service';
import { AuthService } from '../../providers/auth.service';
import { UserService } from '../../providers/user.service';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, OnDestroy {

  private recipeKeySub: ISubscription;
  private recipeSub: ISubscription;

  public user: User;
  private recipeKey: string;
  public recipe: Recipe;

  constructor(private db: DataService,
    public authService: AuthService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  createComment(text: string) {
    this.recipe.comments = this.recipe.comments || [];

    const now = Date.now().toString();

    this.recipe.comments.push({
      text: text,
      author: this.user,
      dateCreated: now,
      dateUpdated: now
    });

    this.db.recipes.set(this.recipe.$key, this.recipe);
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.user = this.userService.getCurrentUser();
    }
    this.recipeKeySub = this.activatedRoute.params.subscribe((params: Params) => {
      this.recipeKey = params['key'];
      this.recipeSub = this.db.recipes.getObservableObject(this.recipeKey)
        .subscribe(recipe => {
          this.recipe = recipe;
        });
      // TODO: implement me
      if (!this.recipe) {
        console.log('recipe not found');
      }
    });
  }

  ngOnDestroy() {
    this.recipeKeySub.unsubscribe();
    this.recipeSub.unsubscribe();
  }

}
