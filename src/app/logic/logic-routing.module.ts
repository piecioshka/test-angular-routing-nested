import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageContactComponent } from './components/page-contact/page-contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        component: PageHomeComponent
    },
    {
        path: 'contact',
        component: PageContactComponent
    },
    {
        path: 'user',
        loadChildren: '../user/user.module#UserModule'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogicRoutingModule { }
