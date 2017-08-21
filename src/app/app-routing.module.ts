import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from "./error/error.component";

const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    // Lazy loaded module
    //   { path: 'todos', loadChildren: './todos/todo.module#TodoModule'}
    { path: '**', component: ErrorComponent, data: { status: 404, text: 'Page not found' } },
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