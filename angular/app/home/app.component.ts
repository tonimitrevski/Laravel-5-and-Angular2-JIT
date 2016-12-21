import { Component, ComponentRef, ViewChild, ViewContainerRef, AfterViewInit}   from '@angular/core';
import { ComponentFactory} from '@angular/core';

import { IHaveDynamicData, DynamicTypeBuilder } from './dynamic/type.builder';
import {HtmlService} from "../services/HtmlService";

@Component({
    selector: 'app',
    template: `<div #dynamicContentPlaceHolder></div>`,
})
export class AppComponent implements AfterViewInit
{
    // reference for a <div> with #dynamicContentPlaceHolder
    @ViewChild('dynamicContentPlaceHolder', {read: ViewContainerRef})
    public dynamicComponentTarget: ViewContainerRef;
    // this will be reference to dynamic content - to be able to destroy it
    protected componentRef: ComponentRef<IHaveDynamicData>;

    // until ngAfterViewInit, we cannot start (firstly) to process dynamic stuff
    protected wasViewInitialized = false;

    // example entity ... to be recieved from other app parts
    // this is kind of candiate for @Input

    // wee need Dynamic component builder
    constructor(
        protected typeBuilder: DynamicTypeBuilder,
        private htmlService: HtmlService
    ) {}

    /** Get a Factory and create a component */

    protected refreshContent(){

        if (this.componentRef) {
            this.componentRef.destroy();
        }
        // here we get a TEMPLATE with dynamic content === TODO
        let template = this.htmlService.html;


        // here we get Factory (just compiled or from cache)
        this.typeBuilder
            .createComponentFactory(template)
            .then((factory: ComponentFactory<IHaveDynamicData>) =>
            {
                // Target will instantiate and inject component (we'll keep reference to it)
                this.componentRef = this
                    .dynamicComponentTarget
                    .createComponent(factory);

                // let's inject @Inputs to component instance
                /*let component = this.componentRef.instance;
                 console.log(this.componentRef);*/
                //...
            });
    }

    /** IN CASE WE WANT TO RE/Gerante - we need cean up */

    // this is the best moment where to start to process dynamic stuff
    public ngAfterViewInit(): void
    {
        this.wasViewInitialized = true;
        this.refreshContent();
    }
}