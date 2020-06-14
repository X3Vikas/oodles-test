import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs'


@Injectable({
    providedIn: 'root'
})
export class SelectedHeaderService {
    headerName: Subject<string>;
    constructor() {
        this.headerName = new BehaviorSubject<string>(null);
    }

    setHeaderName(header: string): void {
        this.headerName.next(header);
    }
    getHeaderNameAsObservable(): Observable<string> {
        return this.headerName.asObservable();
    }
}