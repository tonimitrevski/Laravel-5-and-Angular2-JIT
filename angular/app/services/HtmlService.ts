/**
 * Created by toni on 21.12.16.
 */
import { Injectable }    from '@angular/core';

@Injectable()
export class HtmlService {
    private _html:string = '';
    get html():string {
        return this._html;
    }
    set html(html:string) {
        this._html = html;
    }
}