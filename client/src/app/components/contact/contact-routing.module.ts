import {RouterModule, Routes} from "@angular/router";
import {ContactComponent} from "./contact.component";
import {NgModule} from "@angular/core";

const routes: Routes = [{path: '', component: ContactComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}
