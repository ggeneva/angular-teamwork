import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
import { RecipeRoutingModule } from './recipe-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowseComponent } from './browse/browse.component';
import { RecipeCardComponent } from '../shared/recipe-card/recipe-card.component';

@NgModule({
  imports: [
    CommonModule,
    RecipeRoutingModule,
    FormsModule
  ],
  declarations: [CreateComponent, BrowseComponent, RecipeCardComponent]
})
export class RecipeModule { }
