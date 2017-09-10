import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../models/recipe.model';
import { DataService } from '../../providers/data.service';
import { AuthService } from '../../providers/auth.service';
import { UserService } from '../../providers/user.service';
import { FileService } from '../../providers/file.service';
import { User } from '../../models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createRecipeFrom: FormGroup;
  public recipe: Recipe = new Recipe();
  private user: User;
  private progress = 0;
  public imageUrl;

  formErrors = {
    'name': '',
    'preparationTime': '',
    'cookingTime': '',
    'servings': '',
    'description': ''
  };

  validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 4 characters long',
      'maxlength': 'Name must be less than 30 characters long'
    },
    'preparationTime': {
      'required': 'Preparation Time is required.',
      'maxlength': 'Preparation Time cannot be more than 3 digits.',
    },
    'cookingTime': {
      'required': 'Cooking Time is required.',
      'maxlength': 'Cooking Time cannot be more than 3 digits.',
    },
    'servings': {
      'required': 'Servings is required.',
      'maxlength': 'Servings cannot be more than 3 digits.',
    },
    'description': {
      'required': 'Description is required.'
    }
  };
  @ViewChild('fileUpload') fileUpload;

  constructor(
    private db: DataService,
    private authService: AuthService,
    private userService: UserService,
    private fs: FileService,
    private router: Router,

    private fb: FormBuilder) {
    this.buildForm();
  }
  buildForm(): void {
    this.createRecipeFrom = this.fb.group({
      'name': ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30)
      ]
      ],
      'preparationTime': ['', [
        Validators.required,
        Validators.maxLength(3)
      ]
      ],
      'cookingTime': ['', [
        Validators.required,
        Validators.maxLength(3)
      ]
      ],
      'servings': ['', [
        Validators.required,
        Validators.maxLength(3)
      ]
      ],
      'description': ['', [
        Validators.required,
      ]
      ]
    });

    this.createRecipeFrom.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }

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
    this.recipe.name = this.createRecipeFrom.value['name'];
    this.recipe.preparationTime = this.createRecipeFrom.value['preparationTime'];
    this.recipe.cookingTime = this.createRecipeFrom.value['cookingTime'];
    this.recipe.servings = this.createRecipeFrom.value['servings'];
    this.recipe.description = this.createRecipeFrom.value['description'];
    console.log(this.recipe.name + this.recipe.preparationTime + this.recipe.cookingTime + this.recipe.servings + this.recipe.description);
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
  onValueChanged(data?: any) {
    if (!this.createRecipeFrom) {
      return;
    }
    const form = this.createRecipeFrom;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (this.formErrors.hasOwnProperty(field)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
}
