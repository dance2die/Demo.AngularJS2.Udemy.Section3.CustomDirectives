import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive'

@Component({
    selector: 'my-attribute-directives',
    template: `
        <div myHighlight>
            Highlight me        
        </div>
        <div myHighlight>
            Another Highlight
        </div>

    `,
    directives: [HighlightDirective]
})
export class AttributeDirectives{

}
