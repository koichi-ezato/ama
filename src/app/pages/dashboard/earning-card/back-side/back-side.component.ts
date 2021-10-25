import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'ama-earning-card-back',
  templateUrl: './back-side.component.html',
  styleUrls: ['./back-side.component.css']
})
export class BackSideComponent implements AfterViewInit {
  @ViewChild('canvas') ref: ElementRef | undefined;
  chart: Chart | undefined;
  selected: string = 'bitcoin';

  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    const context = this.ref?.nativeElement;
    this.chart = new Chart(context, {
      type: 'doughnut',
      data: {
        labels: ['Bitcoin', 'Tether', 'Ethereum'],
        datasets: [{
          label: 'Earnings',
          backgroundColor: ['lightgreen', 'blue', 'orange'],
          data: [50, 25, 25],
        }]
      },
      options: {
        responsive: false,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Last Month',
          }
        }
      }
    });
  }

  changeCurrency(currency: string): void {
    if (this.selected !== currency) {
      this.selected = currency;
    }
  }
}
