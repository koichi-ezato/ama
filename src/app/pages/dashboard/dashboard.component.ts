import { Component, OnInit } from '@angular/core';
import {PageTitleService} from "../../@core/utils";

@Component({
  selector: 'ama-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private pageTitle = 'Dashboard';

  constructor(
    private pageTitleService: PageTitleService,
  ) { }

  ngOnInit(): void {
    this.pageTitleService.onNotifySharedPageTitleChanged(this.pageTitle);
  }
}
