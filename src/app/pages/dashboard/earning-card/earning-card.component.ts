import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'ama-earning-card',
  templateUrl: './earning-card.component.html',
  styleUrls: ['./earning-card.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms  ease-out')),
      transition('inactive => active', animate('500ms  ease-in')),
    ])
  ]
})
export class EarningCardComponent {

  flipped = 'inactive';
  selected = 'bitcoin';

  constructor() { }

  toggleView() {
    this.flipped = (this.flipped === 'inactive') ? 'active': 'inactive';
  }
}
