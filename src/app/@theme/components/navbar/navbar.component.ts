import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {TitleService} from "../../../@core/utils";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'ama-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  public title = environment.title;

  private subscription!: Subscription;

  constructor(
    private titleService: TitleService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.titleService.sharedTitle$.subscribe(title => {
      this.title = title;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
