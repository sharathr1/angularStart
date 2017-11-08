import { Component } from '@angular/core';
import { User } from './user';
import { FormGroup,FormBuilder, FormControl, Validators ,ReactiveFormsModule} from '@angular/forms';
@Component({
    selector: 'userregister-form',
    templateUrl: './userregister-form.component.html'
})

export class RegisterdataFormComponent {
    model = new User();
    // model = new User(1, 'Sharath', 'Java', '5', 'true');
    techList: string[] = ["Java", "Py", "R", "Angular2", "VBS"];
    submitted = false;
    formdata: any;

    onSubmit(model) {
        this.formdata = JSON.stringify(this.model)
        console.log("submit " + this.formdata);
        this.submitted = true;
    }
}