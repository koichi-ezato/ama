import {NgModule} from "@angular/core";
import { NotFoundComponent } from './not-found/not-found.component';
import {ErrorComponent} from "./error.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    ErrorComponent,
    NotFoundComponent,
  ]
})
export class ErrorModule {
}
