import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogicRoutingModule } from './logic-routing.module';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageContactComponent } from './components/page-contact/page-contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    PageHomeComponent,
    PageContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    LogicRoutingModule
  ]
})
export class LogicModule { }
