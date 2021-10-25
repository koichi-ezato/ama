import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'ama-stats-card-front',
  templateUrl: './front-side.component.html',
  styleUrls: ['./front-side.component.css']
})
export class FrontSideComponent implements AfterViewInit {
  @ViewChild('canvas') ref: ElementRef | undefined;
  chart: Chart | undefined;

  labels = Array.from(Array(100))
    .map((_, i) => {
      return i;
    });
  data1 = Array.from(Array(100))
    .map((_, i) => {
      const oneFifth = i / 5;
      return (Math.sin(oneFifth) * (oneFifth - 10) + i / 6) * 5;
    });
  data2 = Array.from(Array(100))
    .map((_, i) => {
      const oneFifth = i / 5;
      return (Math.cos(oneFifth) * (oneFifth - 10) + i / 6) * 5;
    });

  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    const context = this.ref?.nativeElement;
    this.chart = new Chart(context, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'transactions',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 1,
            // radius: 0,
            data: this.data1,
          },
          {
            label: 'orders',
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 1,
            // radius: 0,
            data: this.data2,
          }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
        scales: {
          x: {
            display: false
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
