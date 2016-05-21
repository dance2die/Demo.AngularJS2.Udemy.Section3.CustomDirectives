import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive'

@Component({
    selector: 'my-attribute-directives',
    template: `
        <div [myHighlight]="'red'">
            Highlight me        
        </div>
        <br />
        <br />
        <div [myHighlight]="'blue'">
            Another Highlight
        </div>

    `,
    directives: [HighlightDirective]
})
export class AttributeDirectives{

}
