import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
    selector: 'userregister-form',
    templateUrl: './userregister-form.component.html',
    styleUrls: ['./userregister-form.component.css']

})

export class RegisterdataFormComponent {
    model = new User();
    // model = new User(1, 'Sharath', 'Java', '5', 'true');
    techList: string[] = ["Java", "Py", "R", "Angular2", "VBS"];
    submitted = false;
    formdata: any;
    errorMsg: String;
    objList: User[] = [];
    a: any;
    test: Number;
    errorStatus: boolean = false;
    onSubmit(model) {
        console.log("ID " + this.model.id);
        //        debugger;
        if (!isNaN(Number(this.model.id)) && this.trimStr(this.model.id.toString()).length > 0) {
            this.formdata = JSON.stringify(this.model);
            console.log("submit " + this.formdata);
            this.objList.push(this.model);
            this.objList.sort((a, b) => {
                if (Number(a.id) < Number(b.id)) return -1;
                else if (Number(a.id) > Number(b.id)) return 1;
                else return 0;
            });
            this.model = new User();
            this.submitted = true;
            this.errorStatus = false;
        } else {
            this.errorStatus = true;
            this.errorMsg = "Validation Error";
            this.formdata = null;
        }
        // debugger;
    }
    next(model) {

    }
    trimStr(as: String) {
        return as.replace(/^\s+|\s+$/g, '');
    }
}