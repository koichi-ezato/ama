import {FooterComponent} from "./components";
import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { NavbarComponent } from './components';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import {RouterModule} from "@angular/router";
import { OneColumnComponent } from './layouts/one-column/one-column.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { PageHeaderComponent } from './components';
import { SidenavComponent } from './components';
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import { MenuComponent } from './components/menu/menu.component';

const COMPONENTS = [
  FooterComponent,
];

@NgModule({
    imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatTooltipModule, RouterModule, MatSidenavModule, MatListModule, MatExpansionModule],
  exports: [CommonModule, ...COMPONENTS, NavbarComponent, OneColumnComponent],
  declarations: [...COMPONENTS, NavbarComponent, OneColumnComponent, PageHeaderComponent, SidenavComponent, MenuComponent],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
      //   // ...NbThemeModule.forRoot(
      //   //   {
      //   //     name: 'default',
      //   //   },
      //     // [ DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME ],
      //   ).providers,
      ],
    };
  }
}
