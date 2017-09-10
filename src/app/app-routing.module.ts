import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
    // { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', loadChildren: './home/home.module#HomeModule' },
    { path: '', loadChildren: './user/user.module#UserModule' },
    { path: 'recipes', loadChildren: './recipe/recipe.module#RecipeModule' },
    // Lazy loaded module
    //   { path: 'todos', loadChildren: './todos/todo.module#TodoModule'}
    { path: '**', component: ErrorComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    declarations: [
        ErrorComponent,
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
