import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {dashCaseToCamelCase} from "@angular/compiler/src/util";
import {Chart, ChartConfiguration, registerables} from "chart.js";
import {config} from "rxjs";

@Component({
  selector: 'ama-earning-card-front',
  templateUrl: './front-side.component.html',
  styleUrls: ['./front-side.component.css']
})
export class FrontSideComponent implements AfterViewInit {
  @ViewChild('canvas') ref: ElementRef | undefined;
  chart: Chart | undefined;

  selected: string = 'bitcoin';

  data: { x: number; y: number; }[] = [];
  prev = 100;

  animation = {};
  config: ChartConfiguration = {
    type: 'line',
    data: {
      datasets: [{
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
        data: this.data,
      }]
    },
    options: {
      animation: this.animation,
      plugins: {
        legend: undefined,
      },
      scales: {
        x: {
          type: 'linear'
        }
      }
    }
  };

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.prev += 5 - Math.random() * 10;
      this.data.push({
        x: i,
        y: this.prev
      });
    }

    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.makeChart();
  }

  changeCurrency(currency: string): void {
    if (this.selected !== currency) {
      this.selected = currency;
      this.makeChart();
    }
  }

  makeChart() {
    if (this.chart) {
      this.chart.destroy();
    }
    const ctx = this.ref?.nativeElement;

    const totalDuration = 10000;
    const delayBetweenPoints = totalDuration / this.data.length;
    const previousY = (ctx: any) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
    this.animation = {
      x: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: NaN,
        delay(ctx: any) {
          if (ctx.type !== 'data' || ctx.xStarted) {
            return 0;
          }
          ctx.xStarted = true;
          return ctx.index * delayBetweenPoints;
        }
      },
      y: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: previousY,
        delay(ctx: any) {
          if (ctx.type !== 'data' || ctx.yStarted) {
            return 0;
          }
          ctx.yStarted = true;
          return ctx.index * delayBetweenPoints;
        }
      }
    }

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
          data: this.data,
          fill: true,
        }]
      },
      options: {
        animation: this.animation,
        plugins: {
          legend: {
            display: false
          },
        },
        scales: {
          x: {
            type: 'linear',
            display: false
          },
          y: {
            display: false
          }
        }
      }
    });
  }
}
