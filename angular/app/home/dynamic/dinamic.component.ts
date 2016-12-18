/**
 * Created by toni on 18.12.16.
 */
import {Component, OnInit, ElementRef} from '@angular/core';

export function dinamicComponent(tmpl) {
    @Component({
        selector: 'dynamic-component',
        template: tmpl,
    })
    class CustomDynamicComponent  implements OnInit {
        constructor(private el: ElementRef) {}

        ngOnInit() {
            const hostElem = this.el.nativeElement;
            hostElem.parentNode.removeAttribute("style")
        }

        example() {
            console.log('example click');
        }
    }

    // a component for this particular template
    return CustomDynamicComponent;
}


