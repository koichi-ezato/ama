import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'ama-orders-chart',
  templateUrl: './orders-chart.component.html',
  styleUrls: ['./orders-chart.component.css']
})
export class OrdersChartComponent implements AfterViewInit {
  @ViewChild('canvas') ref: ElementRef | undefined;
  chart: Chart | undefined;

  labels = Array.from(Array(10))
    .map((_, i) => {
      return i;
    });
  data1 = Array.from(Array(10))
    .map((_, i) => {
      const oneFifth = i / 5;
      return (Math.tan(oneFifth) * (oneFifth - 10) + i / 6) * 5;
    });
  data2 = Array.from(Array(10))
    .map((_, i) => {
      const oneFifth = i / 5;
      return (Math.sin(oneFifth) * (oneFifth - 10) + i / 6) * 5;
    });

  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    const context = this.ref?.nativeElement;
    this.chart = new Chart(context, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Payment',
            data: this.data1,
            borderColor: 'rgb(201, 203, 207)',
            fill: false,
            tension: 0.4,
          },
          {
            label: 'Canceled',
            data: this.data2,
            borderColor: 'rgb(54, 162, 235)',
            fill: false,
            tension: 0.4,
          }
        ]
      },
      options: {
        responsive: false,
      }
    });
  }
}
