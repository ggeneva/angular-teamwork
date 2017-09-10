import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
import { RecipeRoutingModule } from './recipe-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowseComponent } from './browse/browse.component';
import { RecipeCardComponent } from '../shared/recipe-card/recipe-card.component';
import { FilterRecipesPipe } from '../pipes/filter-recipes.pipe';
import { ViewComponent } from './view/view.component';
import { CommentComponent } from '../shared/comment/comment.component';
import { CreateCommentComponent } from '../shared/create-comment/create-comment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImagePreviewerComponent } from '../shared/image-previewer/image-previewer.component';
import { PagingPipe } from '../pipes/paging.pipe';
import { DateifyPipe } from '../pipes/dateify.pipe';
import { SortRecipesPipe } from '../pipes/sort-recipes.pipe';

@NgModule({
  imports: [
    CommonModule,
    RecipeRoutingModule,
    FormsModule,
    NgbModule
  ],
  declarations: [CreateComponent,
    BrowseComponent,
    RecipeCardComponent,
    FilterRecipesPipe,
    ViewComponent,
    CommentComponent,
    CreateCommentComponent,
    ImagePreviewerComponent,
    PagingPipe,
    DateifyPipe,
    SortRecipesPipe
  ],
  providers: []
})
export class RecipeModule { }
