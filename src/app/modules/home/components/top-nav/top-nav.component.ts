import { Component, OnInit } from '@angular/core';
import { SelectedHeaderService } from 'src/app/services/selected-header.service';


@Component({
    selector: 'app-top-nav',
    templateUrl: './top-nav.component.html',
    styleUrls: ['./top-nav.component.scss']

})
export class TopNavComponent implements OnInit {
    header = 'Users';
    constructor(
        private _SelectedHeaderService: SelectedHeaderService
    ) {


    }
    ngOnInit() {
        this._SelectedHeaderService.getHeaderNameAsObservable().subscribe((val) => {
            if (val !== null) {
                this.header = val;
            } else {
                this.header = 'Users';
            }

        });

    }
}