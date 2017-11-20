import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'simple-chart-example',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.css']
})
export class ChartComponentApp implements OnInit {
    series: any;
    options: Object;
    options2: Object;
    options3: Object;
    options4: Object;
    userslist: any;
    userScore: any;
    items: Array<any> = [];
    from: any;
    to: any;
    chart: Object;

    ticks = 0;

    /* ngOnInit() {
         let timer = Observable.timer(2000, 1000);
         timer.subscribe(t => this.ticks = t);
     }*/
    constructor(private http: Http) {
        //this.fetchdata();
        //this.retrieveAndThenDisplay();


    }



    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.fetchdata();
        this.postscore();
        this.fetchdatatest();
        this.options1chart();
        this.options2chart();
    }
    options2chart() {
        this.options2 = {
            chart: {
                type: 'column', zoomType: 'y'
            },

            title: {
                text: 'Column chart with negative values'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2]
            }, {
                name: 'Jane',
                data: [2, -2, -3, 2, 1]
            }, {
                name: 'Joe',
                data: [3, 4, 4, -2, 5]
            }]
        }
    }
    options1chart() {
        this.options = {
            title: { text: 'Angular Chart' },
            chart: { zoomType: 'y' },
            series: [
                { name: 'A1', data: [29.9, 71.5, 106.4, 129.2, 45, 13, 120, 29.9, 71.5, 106.4, 29.2, 45, 13, 120], },
                { name: 'B1', data: [-29.9, 4, -106.4, 0, 10, -100, 120, -29.9, 4, -106.4, 45, 10, -100, 120] }
            ]
        };
    }

    postscore() {
        console.log("POST");

        this.http.post('http://localhost:9092/itest/users', [{
            userScore: 75,
            userId: 12
        }])
            .subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log("Error occured");
            }
            );
    }

    executeHttp(url) {
        return this.http.get(url).map(res => res.json());
    }
    chartData: boolean;


    // retrieveDataPromise(): Promise<any> {
    //     return new Promise((resolve) => {
    //         this.retrieveDataResolver = resolve;
    //         this.fetchdata();
    //         this.retrieveDataResolver();
    //     })
    // }
    // retrieveAndThenDisplay() {
    //     this.retrieveDataPromise().then(() => { this.chartdata() });
    // }
    fetchdynamicdata() {
        this.fetchdata();
        // this.chartdata();
        // return Promise.all([this.fetchdata(), this.chartdata()]);

    }
    private retrieveDataResolver;

    fetchdata() {
        console.log("Fetch Data");
        return this.http.get(`http://localhost:9092/itest/users`)
            .map((res: Response) => res.json())
            .subscribe(res => {
                this.userslist = res;
                for (var i = 0; i < res.userslist.length; i++) {
                    this.items.push(res.userslist[i].userScore);
                }
                console.log(this.items.length);
                this.userslist = JSON.stringify(this.userslist);
                this.chartdata();
            });
    }
    chartdata() {
        console.log("chart data", JSON.stringify(this.items))
        this.options4 = {
            title: { text: 'Angular Chart1' },
            chart: { zoomType: 'y' },
            series: [
                { name: 'A1', data: this.items },
            ]
        };
    }

    fetchdatatest() {
        this.options3 = {
            title: { text: 'Angular Chart' },
            chart: { zoomType: 'y' },
            series: [
                { name: 'A1', data: [22, 55, 35] },
            ]
        };


    }
    onChartSelection(e) {
        this.from = e.originalEvent.xAxis[0].min.toFixed(2);
        this.to = e.originalEvent.xAxis[0].max.toFixed(2);
    }
    saveInstance(chartInstance) {
        this.chart = chartInstance;
    }


}