import {Component, OnInit} from '@angular/core';
import {AnalyticsService} from "./@core/utils";
import {SeoService} from "./@core/utils";

@Component({
  selector: 'ama-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private analytics: AnalyticsService,
    private seoService: SeoService,
  ) { }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}
