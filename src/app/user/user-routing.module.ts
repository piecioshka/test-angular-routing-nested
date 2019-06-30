import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageUserHomeComponent } from './pages/page-user-home/page-user-home.component';
import { PageUserSettingsComponent } from './pages/page-user-settings/page-user-settings.component';
import { PageUserRemoveAccountComponent } from './pages/page-user-remove-account/page-user-remove-account.component';

const routes: Routes = [
    {
        path: '',
        component: PageUserHomeComponent,
        children: [
            {
                path: 'settings',
                component: PageUserSettingsComponent
            },
            {
                path: 'remove-account',
                component: PageUserRemoveAccountComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
