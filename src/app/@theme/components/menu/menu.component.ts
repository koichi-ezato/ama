import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "./menu.service";

@Component({
  selector: 'ama-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() menuItems: MenuItem[] = [];
  @Input() isMulti = true;

  constructor() { }
}
