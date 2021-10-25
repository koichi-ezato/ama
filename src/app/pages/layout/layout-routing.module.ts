import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "./layout.component";
import {NgModule} from "@angular/core";
import {StepperComponent} from "./stepper/stepper.component";

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'stepper',
      component: StepperComponent,
    },
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {
}
