import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment/comment.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { ImagePreviewerComponent } from './image-previewer/image-previewer.component';
import { PagingPipe } from '../pipes/paging.pipe';
import { DateifyPipe } from '../pipes/dateify.pipe';
import { SortRecipesPipe } from '../pipes/sort-recipes.pipe';
import { OnlyNumberDirective } from '../directives/number-directive/number.directive';
import { FilterRecipesPipe } from '../pipes/filter-recipes.pipe';
import { RecipeRoutingModule } from '../recipe/recipe-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowseComponent } from '../recipe/browse/browse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CommentComponent,
    CreateCommentComponent,
    RecipeCardComponent,
    ImagePreviewerComponent,
    PagingPipe,
    DateifyPipe,
    SortRecipesPipe,
    OnlyNumberDirective,
    FilterRecipesPipe
  ],
  exports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CommentComponent,
    CreateCommentComponent,
    RecipeCardComponent,
    ImagePreviewerComponent,
    PagingPipe,
    DateifyPipe,
    SortRecipesPipe,
    OnlyNumberDirective,
    FilterRecipesPipe
  ]
})
export class SharedModule { }
