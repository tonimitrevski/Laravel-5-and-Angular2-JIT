import { ComponentFactory, Injectable } from '@angular/core';
import { JitCompiler } from '@angular/compiler';
import {dinamicComponent} from "./dinamic.component";
import {dinamicModule} from "./dinamic.module";

export interface IHaveDynamicData {
    entity: any;
}

@Injectable()
export class DynamicTypeBuilder {

    // wee need Dynamic component builder
    constructor(
        protected compiler: JitCompiler
    ) {}

    // this object is singleton - so we can use this as a cache
    private _cacheOfFactories: {[templateKey: string]: ComponentFactory<IHaveDynamicData>} = {};

    public createComponentFactory(template: string)
    : Promise<ComponentFactory<IHaveDynamicData>> {

        let factory = this._cacheOfFactories[template];

        if (factory) {
            console.log("Module and Type are returned from cache");

            return new Promise((resolve) => {
                resolve(factory);
            });
        }

        // unknown template ... let's create a Type for it
        let type   = this.createNewComponent(template);
        let module = this.createComponentModule(type);

        return new Promise((resolve) => {
            this.compiler
                .compileModuleAndAllComponentsAsync(module)
                .then((moduleWithFactories) =>
                {
                    factory = moduleWithFactories.componentFactories.find((selector: any) => selector.selector == 'dynamic-component');
                    this._cacheOfFactories[template] = factory;

                    resolve(factory);
                });
        });
    }

    protected createNewComponent (tmpl:string) {
        return dinamicComponent(tmpl)
    }
    protected createComponentModule (componentType: any) {
        return dinamicModule(componentType)
    }
}