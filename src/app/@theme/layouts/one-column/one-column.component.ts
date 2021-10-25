import {Component, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {MatSidenav} from "@angular/material/sidenav";
import {MENU_ITEMS} from "../../../pages/pages-menu";

@Component({
  selector: 'ama-one-column',
  templateUrl: './one-column.component.html',
  styleUrls: ['./one-column.component.css']
})
export class OneColumnComponent implements OnInit {
  menuItems = MENU_ITEMS;

  @ViewChild('drawer', {static: false}) public drawer!: MatSidenav;

  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
  }

}
