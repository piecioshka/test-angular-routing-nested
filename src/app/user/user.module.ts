import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { PageUserHomeComponent } from "./pages/page-user-home/page-user-home.component";
import { PageUserSettingsComponent } from "./pages/page-user-settings/page-user-settings.component";
import { PageUserRemoveAccountComponent } from "./pages/page-user-remove-account/page-user-remove-account.component";

@NgModule({
  declarations: [
    PageUserHomeComponent,
    PageUserSettingsComponent,
    PageUserRemoveAccountComponent,
  ],
  imports: [CommonModule, UserRoutingModule],
  bootstrap: [],
})
export class UserModule {}
