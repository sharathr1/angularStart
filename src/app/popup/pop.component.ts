import { Component } from '@angular/core';
import { Popup } from 'ng2-opd-popup';

@Component({
    selector: 'popuptest-root',
    templateUrl: './snippet.component.html',
    styleUrls: ['./snippet.component.css'],
})
export class PopComponentA {
    constructor(private popup: Popup) { }
    ClickButton() {
        this.popup.show();
    }

}
