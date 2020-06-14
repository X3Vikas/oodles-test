import { Component } from '@angular/core';
import { SelectedHeaderService } from 'src/app/services/selected-header.service';


@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
    isToggle: boolean;

    constructor(
        private _SelectedHeaderService: SelectedHeaderService
    ) {
        this.isToggle = false;

    }


    toggle() {
        this.isToggle = !this.isToggle;

    }
    selectHeader(header: any) {
        this._SelectedHeaderService.setHeaderName(header);

    }

}