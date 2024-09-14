import {NgModule} from "@angular/core";
import {EmpProfileComponent} from "./emp-profile.component";
import {CommonModule} from "@angular/common";
import {EmpProfileRoutingModule} from "./emp-profile-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTooltipModule} from "@angular/material/tooltip";
import {SharedComponentModule} from "../../../shared/modules/shared-component.module";

@NgModule({
  declarations: [
    EmpProfileComponent
  ],
    imports: [
        CommonModule,
        EmpProfileRoutingModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatSidenavModule,
        MatExpansionModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        FormsModule,
        SharedComponentModule
    ],
  providers: [],
})
export class EmpProfileModule { }
