import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'simple-chart-example',
    templateUrl: './charts.component.html'
})
export class ChartComponentApp {
    series: any;
    constructor() {
        this.options = {
            title: { text: 'Angular Chart' },
            chart: { zoomType: 'y' },
            series: [
                { name: 'A1', data: [29.9, 71.5, 106.4, 129.2, 45, 13, 120, 29.9, 71.5, 106.4, 29.2, 45, 13, 120], },
                { name: 'B1', data: [-29.9, 4, -106.4, 0, 10, -100, 120, -29.9, 4, -106.4, 45, 10, -100, 120] }
            ]
        };

    }
    options: Object;
    from: any;
    to: any;
    onChartSelection(e) {
        this.from = e.originalEvent.xAxis[0].min.toFixed(2);
        this.to = e.originalEvent.xAxis[0].max.toFixed(2);
    }
    chart: Object;
    saveInstance(chartInstance) {
        this.chart = chartInstance;
    }
}