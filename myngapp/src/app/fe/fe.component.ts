import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
// import { HttpModule, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

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