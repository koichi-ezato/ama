import {UserService} from "./users.service";
import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

const SERVICES = [
  UserService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ]
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders<MockDataModule> | any {
    return {
      ngModule: MockDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
