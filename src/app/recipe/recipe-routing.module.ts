import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { BrowseComponent } from './browse/browse.component';
import { ViewComponent } from './view/view.component';
import { RouteGuardService } from '../providers/route-guard.service';

const routes: Routes = [
    { path: '', redirectTo: 'browse', pathMatch: 'full' },
    { path: 'browse', component: BrowseComponent },
    { path: 'browse/:key', component: ViewComponent },
    {
        path: 'create', component: CreateComponent,
        data: { requiresLogin: true },
        canActivate: [RouteGuardService]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class RecipeRoutingModule { }
