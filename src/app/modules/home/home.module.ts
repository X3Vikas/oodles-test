import { NgModule } from '@angular/core';
import { HomeRouting, Route } from './home.routing';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        Route
    ],
    imports: [
        BrowserModule,
        HomeRouting,
    ],
    exports: []
})
export class HomeModule {

}