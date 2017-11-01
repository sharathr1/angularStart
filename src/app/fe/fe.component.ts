import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
@Component({
    selector: 'fe-data',
    templateUrl: './fe.component.html',
    styleUrls: ['./fe.component.css']
})

export class FECompoment {
    people: any;
    constructor(private http: Http) {
        this.people = "";
        // this.http.get(`http://devl-smartfe.cloud.health.ge.com/ServiceOracleAPI/inventory/ping`)
        //     .map((res: Response) => res.json())
        //     .subscribe(people => this.people = people);
    }

    fetchdata() {
        console.log("Fetch Data")
        this.http.get(`http://localhost:9099/ping`)
            .map((res: Response) => res.json())
            .subscribe(res => this.people = res);


        return this.http.get(`http://localhost:9099/ping`)
            .map((res: Response) => JSON.stringify(res.json()));
    }

    testDev() {
        // this.http.get((`http://devl-smartfe.cloud.health.ge.com/ServiceOracleAPI/inventory/ping`)
        //     .map((res: Response) => res.json())
        //     .subscribe(people => this.people = people);

        return this.http.get(`http://devl-smartfe.cloud.health.ge.com/ServiceOracleAPI/inventory/ping`)
            .map((res: Response) => res.json());
    }

    name: String = 'Sharath';
    lastName: String = 'R';
    cell: Number = 88892772944;
    imagepath: String = "https://blobstore-ls-ge.run.aws-usw02-pr.ice.predix.io/v1/blob/images.jpg";

    getFullName(): string {
        return this.name + '' + this.lastName;
    }
}