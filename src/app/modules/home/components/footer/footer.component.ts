import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    currntYear: Date = new Date();
    constructor() {
        (this.currntYear as any) = this.currntYear.getUTCFullYear();
    }
}