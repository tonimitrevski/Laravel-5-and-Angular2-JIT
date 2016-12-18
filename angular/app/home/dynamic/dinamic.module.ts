import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

export function dinamicModule(componentType: any) {
    @NgModule({
        imports: [
            CommonModule
        ],
        declarations: [
            componentType
        ],
    })
    class RuntimeComponentModule
    {
    }
    // a module for just this Type
    return RuntimeComponentModule;
}