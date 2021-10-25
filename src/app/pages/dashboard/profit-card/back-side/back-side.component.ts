import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {Chart, registerables} from 'chart.js';

@Component({
  selector: 'ama-stats-card-back',
  templateUrl: './back-side.component.html',
  styleUrls: ['./back-side.component.css']
})
export class BackSideComponent implements AfterViewInit {
  @ViewChild('canvas') ref: ElementRef | undefined;
  chart: Chart | undefined;

  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    const context = this.ref?.nativeElement;
    this.chart = new Chart(context, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
          label: 'Profit',
          backgroundColor: 'rgba(201, 203, 207, 0.2)',
          borderColor: 'rgb(201, 203, 207)',
          data: [300, 520, 435, 530, 730, 620, 660, 860],
          fill: true,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            ticks: {
              callback: function (val, i) {
                return '';
              }
            }
          }
        }
      }
    });
  }
}
