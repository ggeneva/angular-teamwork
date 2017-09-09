import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
import { RecipeRoutingModule } from './recipe-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowseComponent } from './browse/browse.component';
import { RecipeCardComponent } from '../shared/recipe-card/recipe-card.component';
import { FilterRecipesPipe } from '../pipes/filter-recipes.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RecipeRoutingModule,
    FormsModule,
    NgbModule
  ],
  declarations: [CreateComponent, BrowseComponent, RecipeCardComponent, FilterRecipesPipe],
  providers: []
})
export class RecipeModule { }
