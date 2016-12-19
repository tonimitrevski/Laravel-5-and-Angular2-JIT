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
        constructor(private el: ElementRef) {
            this.asyncAwait();
        }

        ngOnInit() {
            const hostElem = this.el.nativeElement;
            hostElem.parentNode.removeAttribute("style")
        }

        example() {
            console.log('example click');
        }

        /**
         * @returns {Promise<void>}
         */
        async asyncAwait() {
            console.log("Knock, knock!");

            await this.delay(1000);
            console.log("Who's there?");

            await this.delay(1000);
            console.log("async/await!");
        }

        /**
         * @param ms
         * @returns {Promise<void>}
         */
        private delay(ms: number) {
            return new Promise<void>(function(resolve) {
                setTimeout(resolve, ms);
            });
        }
    }

    // a component for this particular template
    return CustomDynamicComponent;
}


