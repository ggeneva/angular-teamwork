import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../models/recipe.model';
import { DataService } from '../../providers/data.service';
import { AuthService } from '../../providers/auth.service';
import { UserService } from '../../providers/user.service';
import { FileService } from '../../providers/file.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public recipe: Recipe = new Recipe();
  private user: User;
  private progress = 0;
  public imageUrl;

  @ViewChild('fileUpload') fileUpload;

  constructor(
    private db: DataService,
    private authService: AuthService,
    private userService: UserService,
    private fs: FileService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public sendPreview(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (result: any) => {
        this.imageUrl = result.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }
  public createRecipe() {
    const fileBrowser = this.fileUpload.nativeElement;
    const now = new Date().getTime();

    this.recipe.dateCreated = now;
    this.recipe.dateUpdated = now;

    this.userService.getCurrentUser().then(dbUser => {
      this.recipe.author = dbUser;
    }).then(() => {
      this.db.recipes.add(this.recipe)
        .then(key => {
          console.log(key);
          if (fileBrowser.files && fileBrowser.files[0]) {
            this.fs.uploadFile(fileBrowser.files[0], key)
              .then(url => {
                this.db.recipes.update(key, { imageUrl: url })
                  .then(() => {
                    this.router.navigateByUrl('recipes/browse/' + key);
                  });
              });
          } else {
            this.router.navigateByUrl('recipes/browse/' + key);
          }
        });
    });
  }

}
