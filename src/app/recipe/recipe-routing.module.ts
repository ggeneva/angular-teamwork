import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { BrowseComponent } from './browse/browse.component';

const routes: Routes = [
    { path: '', redirectTo: 'browse', pathMatch: 'full' },
    { path: 'browse', component: BrowseComponent },
    { path: 'create', component: CreateComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class RecipeRoutingModule { }
