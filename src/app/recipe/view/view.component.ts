import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../../models/recipe.model';
import { User } from '../../models/user.model';
import { Comment } from '../../models/comment.model';
import { DataService } from '../../providers/data.service';
import { AuthService } from '../../providers/auth.service';
import { UserService } from '../../providers/user.service';
import { ISubscription } from 'rxjs/Subscription';
import { ToastsManager } from 'ng2-toastr';

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

  public notFound = false;

  constructor(private db: DataService,
    public authService: AuthService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  createComment(text: string) {
    this.recipe.comments = this.recipe.comments || [];

    const now = new Date().getTime();

    this.recipe.comments.push({
      text: text,
      author: this.user,
      dateCreated: now,
      dateUpdated: now
    });

    this.db.recipes.set(this.recipe.$key, this.recipe);
  }

  removeComment(comment: Comment) {
    if (this.user.uid !== comment.author.uid) {
      return;
    }

    const index = this.recipe.comments.indexOf(comment);

    if (index > -1) {
      this.recipe.comments.splice(index, 1);
    }

    this.db.recipes.set(this.recipe.$key, this.recipe);
  }

  removeRecipe() {

    if (this.user &&
      this.recipe &&
      this.user.uid === this.recipe.authorUid) {
      const recipeName = this.recipe.name;

      this.db.recipes.remove(this.recipe.$key)
        .then(() => {
          this.router.navigateByUrl('recipes/browse');
          alert('Your recipe for ' + recipeName + ' has been removed!');
        });
    }
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.userService.getCurrentUser()
        .then(dbUser => {
          this.user = dbUser;
        });
    }
    this.recipeKeySub = this.activatedRoute.params.subscribe((params: Params) => {
      this.recipeKey = params['key'];
      this.recipeSub = this.db.recipes.getObservableObject(this.recipeKey)
        .subscribe(recipe => {
          this.recipe = recipe;
          if (!this.recipe.name) {
            this.notFound = true;
          }
        });
    });
  }

  ngOnDestroy() {
    this.recipeKeySub.unsubscribe();
    this.recipeSub.unsubscribe();
  }

}
