import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {HomeRoutingModule} from "./home-routing.module";
import {SharedPipesModule} from "../../shared/modules/shared-pipes.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MatIconModule,
    RouterModule,
    SharedPipesModule
  ],
  providers: []
})
export class HomeModule { }