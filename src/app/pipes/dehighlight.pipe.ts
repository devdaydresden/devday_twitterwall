import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dehighlight'
})

export class DehighlightPipe implements PipeTransform {
    transform(value: string, expr: any, arg2: string): any {
        if (!value)
            return value;

        return value.replace(new RegExp(expr, 'g'), '<span class="dehighlight">'+arg2+'</span>');
    }
}
