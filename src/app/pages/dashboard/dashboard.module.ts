import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { ProfitCardComponent } from './profit-card/profit-card.component';
import { FrontSideComponent } from './profit-card/front-side/front-side.component';
import { BackSideComponent } from './profit-card/back-side/back-side.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import { EarningCardComponent } from './earning-card/earning-card.component';
import {FrontSideComponent as EarningCardFrontComponent} from './earning-card/front-side/front-side.component';
import {BackSideComponent as EarningCardBackComponent} from './earning-card/back-side/back-side.component';
import {MatSelectModule} from "@angular/material/select";
import { ChartsPanelComponent } from './charts-panel/charts-panel.component';
import {MatTabsModule} from "@angular/material/tabs";
import { HeaderSummaryComponent } from './charts-panel/header-summary/header-summary.component';
import { OrdersChartComponent } from './charts-panel/orders-chart/orders-chart.component';
import { ProfitChartComponent } from './charts-panel/profit-chart/profit-chart.component';
import { TrafficCardComponent } from './traffic-card/traffic-card.component';
import {MatTableModule} from "@angular/material/table";

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
  ],
  declarations: [
    DashboardComponent,
    ProfitCardComponent,
    FrontSideComponent,
    BackSideComponent,
    EarningCardComponent,
    EarningCardFrontComponent,
    EarningCardBackComponent,
    ChartsPanelComponent,
    HeaderSummaryComponent,
    OrdersChartComponent,
    ProfitChartComponent,
    TrafficCardComponent,
  ],
})
export class DashboardModule { }
