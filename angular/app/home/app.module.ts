/**
 * Created by toni on 18.12.16.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { COMPILER_PROVIDERS } from '@angular/compiler';

import { AppComponent }   from './app.component';
import {DynamicTypeBuilder} from "./dynamic/type.builder";
import {HtmlService} from "../services/HtmlService";

@NgModule({
    imports:      [
        BrowserModule,
    ],
    declarations: [ AppComponent],
    providers: [
        COMPILER_PROVIDERS, // this is an app singleton declaration
        DynamicTypeBuilder,
        HtmlService
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {
    constructor(private htmlService: HtmlService) {
        htmlService.html = document.querySelector('app').innerHTML;
/*        localStorage.setItem('template', document.querySelector('app').innerHTML);*/
    }
}