import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'highlight'
})

export class HighlightPipe implements PipeTransform {
    transform(value: string, expr: any, arg2: string): any {
        if (!value)
            return value;

        return value.replace(new RegExp(expr, 'gi'), '<span class="highlight">'+arg2+'</span>');
    }
}
