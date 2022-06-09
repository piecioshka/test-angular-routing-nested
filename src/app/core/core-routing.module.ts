import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PageHomeComponent } from "./pages/page-home/page-home.component";
import { PageContactComponent } from "./pages/page-contact/page-contact.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    component: PageHomeComponent,
  },
  {
    path: "contact",
    component: PageContactComponent,
  },
  {
    path: "user",
    loadChildren: () => import("../user/user.module").then((m) => m.UserModule),
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
