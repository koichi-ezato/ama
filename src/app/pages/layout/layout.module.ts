import {NgModule} from "@angular/core";
import {LayoutComponent} from "./layout.component";
import {LayoutRoutingModule} from "./layout-routing.module";
import { StepperComponent } from './stepper/stepper.component';
import {MatStepperModule} from "@angular/material/stepper";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    LayoutRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  declarations: [
    LayoutComponent,
    StepperComponent,
    ListComponent,
  ],
})
export class LayoutModule { }
