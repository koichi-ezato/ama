import {Component, Input} from '@angular/core';
import {MenuItem} from "../menu/menu.service";

@Component({
  selector: 'ama-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  @Input() menuItems: MenuItem[] = [];

  constructor() { }
}
