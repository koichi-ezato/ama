import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'ama-profit-chart',
  templateUrl: './profit-chart.component.html',
  styleUrls: ['./profit-chart.component.css']
})
export class ProfitChartComponent implements AfterViewInit {
  @ViewChild('canvas') ref: ElementRef | undefined;
  chart: Chart | undefined;

  labels = Array.from(Array(10))
    .map((_, i) => {
      return i;
    });
  data1 = Array.from(Array(10))
    .map((_, i) => {
      const oneFifth = i / 5;
      return (Math.cos(oneFifth) * (oneFifth - 10) + i / 6) * 5;
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
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Payment',
            data: this.data1,
            backgroundColor: 'rgb(201, 203, 207)',
            borderColor: 'rgb(201, 203, 207)',
          },
          {
            label: 'Canceled',
            data: this.data2,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgb(54, 162, 235)',
          }
        ]
      },
      options: {
        responsive: false,
      }
    });
  }

}
