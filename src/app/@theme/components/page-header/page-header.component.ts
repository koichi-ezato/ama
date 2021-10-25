import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {OneColumnComponent} from "../../layouts/one-column/one-column.component";
import {MatSidenav} from "@angular/material/sidenav";
import {Subscription} from "rxjs";
import {PageTitleService} from "../../../@core/utils";

@Component({
  selector: 'ama-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit, OnDestroy {
  public pageTitle = '';

  private subscription!: Subscription;

  @Input() drawer!: MatSidenav;

  @ViewChild(OneColumnComponent) oneColumnComponent!: OneColumnComponent;

  constructor(
    private pageTitleService: PageTitleService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.pageTitleService.sharedPageTitle$.subscribe(pageTitle => {
      this.pageTitle = pageTitle;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleSidenav(): void {
    this.drawer?.toggle();
  }
}
