import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { AppComponent } from './components/app/app.component';

import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        PageHomeComponent,
        PageContactComponent,
        PageNotFoundComponent,
    ],
    imports: [
        BrowserModule,
        CoreRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class CoreModule { }
