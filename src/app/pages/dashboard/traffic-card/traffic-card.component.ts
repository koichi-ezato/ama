import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ama-traffic-card',
  templateUrl: './traffic-card.component.html',
  styleUrls: ['./traffic-card.component.css']
})
export class TrafficCardComponent {
  displayedColumns: string[] = ['week', 'val', 'rate'];
  dataSource = [
    {week: 'Mon', val: 100, rate: 6},
    {week: 'Tue', val: 200, rate: -9},
    {week: 'Wed', val: 300, rate: 54},
    {week: 'Thu', val: 400, rate: -44},
    {week: 'Fri', val: 500, rate: 48},
    {week: 'Sat', val: 600, rate: -17},
    {week: 'Sun', val: 700, rate: -26},
    {week: 'Mon', val: 800, rate: 66},
    {week: 'Tue', val: 900, rate: -32},
    {week: 'Wed', val: 1000, rate: 16},
  ];

  constructor() { }

  transformValue(value: number) {
    return Math.abs(value);
  }

}
